import { useEffect, useRef, useState } from 'react';
import { getLocalAnswer } from '../data/localAnswer';

/*
  Colors read your site's CSS variables, so the chatbot follows whatever palette you use.
  The second value in each var() is the fallback if a variable is missing.
*/
const ACCENT = 'var(--accent-primary, #ff6a2b)';
const BG = 'var(--bg-primary, #0b0a09)';
const TEXT = 'var(--text-primary, #ece7df)';
const MUTED = 'var(--text-muted, #8f8a82)';
const ON_ACCENT = '#0b0a09';
const LINE = 'rgba(236, 231, 223, 0.12)';

const API_URL = '/api/chat';
const LAUNCHER_DELAY_MS = 4000; // wait for the hero intro to finish

const GREETING =
  "Hi, I'm the assistant on Burhan's portfolio. Ask me about his projects, skills, experience or how to work with him. You can write in English or Roman Urdu.";

const SUGGESTIONS = [
  { label: 'Who is Burhan?', prompt: 'Who is Burhan Arshad?' },
  { label: 'Projects', prompt: 'What projects has Burhan built?' },
  { label: 'Skills', prompt: 'What are his main skills?' },
  {
    label: 'Hire him',
    prompt: 'Is Burhan available for freelance work and how can I hire him?',
  },
  { label: 'CV and resume', prompt: 'Where can I download his CV and resume?' },
  { label: 'Contact', prompt: 'How can I contact Burhan?' },
];

/* ---------- tiny markdown renderer: **bold**, [text](url), bare urls, emails, "- " lists ---------- */

const INLINE =
  /(\*\*[^*]+\*\*|\[[^\]]+\]\((?:https?:\/\/|mailto:|tel:)[^\s)]+\)|https?:\/\/[^\s)]*[^\s).,;:!?]|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

/* Split into tokens so links and bold text appear whole while typing. */
const tokenize = (text) => {
  const out = [];
  text.split(INLINE).forEach((part, i) => {
    if (!part) return;
    if (i % 2 === 1) out.push(part);
    else out.push(...part.split(/(\s+)/).filter(Boolean));
  });
  return out;
};

const renderInline = (text) =>
  text.split(INLINE).map((part, i) => {
    if (!part) return null;
    if (i % 2 === 0) return part;

    if (part.startsWith('**')) {
      return (
        <strong key={i} className="font-semibold" style={{ color: TEXT }}>
          {part.slice(2, -2)}
        </strong>
      );
    }

    const md = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
    if (md) {
      const external = md[2].startsWith('http');
      return (
        <a
          key={i}
          href={md[2]}
          target={external ? '_blank' : undefined}
          rel="noopener noreferrer"
        >
          {md[1]}
        </a>
      );
    }

    if (part.startsWith('http')) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer">
          {part.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        </a>
      );
    }

    return (
      <a key={i} href={`mailto:${part}`}>
        {part}
      </a>
    );
  });

const RichText = ({ text }) => {
  const blocks = [];
  let list = [];

  const flush = () => {
    if (list.length) {
      blocks.push({ type: 'ul', items: list });
      list = [];
    }
  };

  text.split('\n').forEach((line) => {
    const bullet = line.match(/^\s*[-*]\s+(.*)$/);
    if (bullet) {
      list.push(bullet[1]);
      return;
    }
    flush();
    if (line.trim()) blocks.push({ type: 'p', text: line });
  });
  flush();

  return (
    <div className="space-y-2">
      {blocks.map((b, i) =>
        b.type === 'ul' ? (
          <ul key={i} className="space-y-1">
            {b.items.map((item, j) => (
              <li key={j} className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full"
                  style={{ background: ACCENT }}
                />
                <span className="min-w-0 break-words">{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="break-words">
            {renderInline(b.text)}
          </p>
        )
      )}
    </div>
  );
};

/* ---------- server call ---------- */

const askServer = async (history) => {
  const payload = history
    .filter((m) => m.id !== 'greeting')
    .slice(-10)
    .map((m) => ({ role: m.role, content: m.text }));

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: payload }),
      signal: controller.signal,
    });

    if (!res.ok) throw new Error(`Chat API ${res.status}`);

    const data = await res.json();
    if (!data || typeof data.reply !== 'string' || !data.reply.trim()) {
      throw new Error('Empty reply');
    }
    return data.reply.trim();
  } finally {
    clearTimeout(timer);
  }
};

const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

/* ---------- component ---------- */

const Chatbot = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [mode, setMode] = useState(null); // 'ai' | 'local' | null
  const [messages, setMessages] = useState([
    { id: 'greeting', role: 'assistant', text: GREETING },
  ]);

  const listRef = useRef(null);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  const busy = loading || typing;

  /* Show the launcher after the hero intro. */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), LAUNCHER_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  /* Clean up the typing animation on unmount. */
  useEffect(() => () => clearInterval(timerRef.current), []);

  /* Escape closes the panel. */
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  /* Focus the input when the panel opens. */
  useEffect(() => {
    if (!open) return undefined;
    const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 300);
    return () => clearTimeout(t);
  }, [open]);

  /* Keep the newest message in view. */
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  /* Reveal a reply token by token so it feels like live typing. */
  const reveal = (full) => {
    const id = uid();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      setMessages((prev) => [...prev, { id, role: 'assistant', text: full }]);
      return;
    }

    const tokens = tokenize(full);
    let n = 0;

    setMessages((prev) => [...prev, { id, role: 'assistant', text: '' }]);
    setTyping(true);

    timerRef.current = setInterval(() => {
      n = Math.min(n + 3, tokens.length);
      const shown = tokens.slice(0, n).join('');
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, text: shown } : m)));

      if (n >= tokens.length) {
        clearInterval(timerRef.current);
        setTyping(false);
      }
    }, 28);
  };

  const send = async (raw) => {
    const text = raw.trim();
    if (!text || busy) return;

    const history = [...messages, { id: uid(), role: 'user', text }];
    setMessages(history);
    setInput('');
    setLoading(true);

    let reply;
    try {
      reply = await askServer(history);
      setMode('ai');
    } catch (err) {
      reply = getLocalAnswer(text);
      setMode('local');
    }

    setLoading(false);
    reveal(reply);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      <style>{`
        .bc-line { border-color: ${LINE}; }
        .bc-hover:hover:not(:disabled) { border-color: ${ACCENT}; color: ${TEXT}; }
        .bc-focus:focus-visible { outline: 2px solid ${ACCENT}; outline-offset: 2px; }
        .bc-input { border-color: ${LINE}; }
        .bc-input::placeholder { color: rgba(236, 231, 223, 0.35); }
        .bc-input:focus { border-color: ${ACCENT}; outline: none; }
        .bc-send:not(:disabled):hover { filter: brightness(1.1); }
        .bc-msg a { color: ${ACCENT}; text-decoration: underline; text-underline-offset: 3px; }
        .bc-corner { position: absolute; width: 10px; height: 10px; pointer-events: none; }
        .bc-dot { width: 5px; height: 5px; border-radius: 9999px; background: ${ACCENT}; animation: bc-bounce 1s infinite ease-in-out; }
        .bc-dot:nth-child(2) { animation-delay: .15s; }
        .bc-dot:nth-child(3) { animation-delay: .3s; }
        @keyframes bc-bounce {
          0%, 80%, 100% { opacity: .25; transform: translateY(0); }
          40% { opacity: 1; transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bc-dot { animation: none; opacity: .7; }
        }
      `}</style>

      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="burhan-chat"
        className={`bc-line bc-hover bc-focus fixed bottom-5 right-3 z-[9000] flex items-center gap-3 rounded-md border px-4 py-3 font-mono text-[11px] tracking-wide transition-all duration-500 sm:right-6 ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        style={{
          background: BG,
          color: TEXT,
          boxShadow: '0 12px 32px rgba(0,0,0,0.45)',
        }}
      >
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ background: ACCENT }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{ background: ACCENT }}
          />
        </span>
        {open ? 'Close chat' : 'Ask about Burhan'}
      </button>

      {/* Panel */}
      <div
        id="burhan-chat"
        role="dialog"
        aria-label="Chat with Burhan's assistant"
        aria-hidden={!open}
        className={`fixed bottom-[4.75rem] right-3 z-[9000] flex origin-bottom-right flex-col overflow-hidden rounded-md border sm:right-6 ${
          open ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-3 scale-[0.98] opacity-0'
        }`}
        style={{
          width: 'min(400px, calc(100vw - 1.5rem))',
          height: 'min(72vh, 600px)',
          background: BG,
          borderColor: LINE,
          color: TEXT,
          boxShadow: '0 28px 70px rgba(0,0,0,0.6)',
          visibility: open ? 'visible' : 'hidden',
          transition: open
            ? 'opacity .3s ease, transform .3s ease, visibility 0s'
            : 'opacity .3s ease, transform .3s ease, visibility 0s linear .3s',
        }}
      >
        {/* Corner brackets: the same reticle language as the cursor */}
        <span aria-hidden="true" className="bc-corner left-1.5 top-1.5 border-l-[1.5px] border-t-[1.5px]" style={{ borderColor: ACCENT }} />
        <span aria-hidden="true" className="bc-corner right-1.5 top-1.5 border-r-[1.5px] border-t-[1.5px]" style={{ borderColor: ACCENT }} />
        <span aria-hidden="true" className="bc-corner bottom-1.5 left-1.5 border-b-[1.5px] border-l-[1.5px]" style={{ borderColor: ACCENT }} />
        <span aria-hidden="true" className="bc-corner bottom-1.5 right-1.5 border-b-[1.5px] border-r-[1.5px]" style={{ borderColor: ACCENT }} />

        {/* Header */}
        <div className="bc-line flex items-start justify-between gap-3 border-b px-5 pb-3 pt-4">
          <div className="min-w-0">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.25em]"
              style={{ color: ACCENT }}
            >
              SYS.07 // Assistant
            </p>
            <p className="mt-1 text-sm font-semibold" style={{ color: TEXT }}>
              Ask about Burhan
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 pt-0.5">
            {mode && (
              <span
                className="bc-line rounded-sm border px-1.5 py-0.5 font-mono text-[10px]"
                style={{ color: MUTED }}
                title={
                  mode === 'ai'
                    ? 'Answers are generated by an AI model'
                    : 'The AI is unavailable, so you are getting quick prepared answers'
                }
              >
                {mode === 'ai' ? 'AI answers' : 'Quick answers'}
              </span>
            )}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="bc-focus font-mono text-[11px] transition-colors hover:text-white"
              style={{ color: MUTED }}
            >
              Close
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={listRef}
          aria-live="polite"
          className="flex-1 space-y-4 overflow-y-auto px-5 py-4"
        >
          {messages.map((m) =>
            m.role === 'user' ? (
              <div key={m.id} className="flex justify-end">
                <p
                  className="max-w-[85%] break-words rounded-md px-3 py-2 text-sm leading-relaxed"
                  style={{ background: ACCENT, color: ON_ACCENT }}
                >
                  {m.text}
                </p>
              </div>
            ) : (
              <div
                key={m.id}
                className="bc-msg border-l pl-3 text-sm leading-relaxed"
                style={{ borderColor: 'rgba(236, 231, 223, 0.18)', color: TEXT }}
              >
                <RichText text={m.text} />
              </div>
            )
          )}

          {loading && (
            <div
              className="border-l py-1 pl-3"
              style={{ borderColor: 'rgba(236, 231, 223, 0.18)' }}
              aria-label="Assistant is typing"
            >
              <span className="inline-flex items-center gap-1">
                <span className="bc-dot" />
                <span className="bc-dot" />
                <span className="bc-dot" />
              </span>
            </div>
          )}
        </div>

        {/* Suggestions */}
        <div className="flex gap-2 overflow-x-auto px-5 pb-3 pt-1">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.label}
              type="button"
              disabled={busy}
              onClick={() => send(s.prompt)}
              className="bc-line bc-hover bc-focus shrink-0 whitespace-nowrap rounded-sm border px-3 py-1.5 text-xs transition-colors disabled:opacity-40"
              style={{ color: MUTED }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <form
          onSubmit={onSubmit}
          className="bc-line flex items-center gap-2 border-t px-4 py-3"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={400}
            placeholder="Type your question"
            aria-label="Your message"
            autoComplete="off"
            className="bc-input min-w-0 flex-1 rounded-md border bg-transparent px-3 py-2.5 text-sm"
            style={{ color: TEXT }}
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            className="bc-send bc-focus rounded-md px-4 py-2.5 text-xs font-semibold disabled:opacity-40"
            style={{ background: ACCENT, color: ON_ACCENT }}
          >
            Send
          </button>
        </form>

        <p
          className="px-5 pb-3 text-center text-[11px]"
          style={{ color: MUTED }}
        >
          AI can make mistakes. For anything important, contact Burhan directly.
        </p>
      </div>
    </>
  );
};

export default Chatbot;
