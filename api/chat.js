/*
  Vercel serverless function: POST /api/chat
  Keeps your API key on the server so visitors can never see it.

  Environment variables (Vercel > Project > Settings > Environment Variables):
    GROQ_API_KEY   required   your key from console.groq.com
    GROQ_MODEL     optional   defaults to llama-3.3-70b-versatile
*/

import { buildSystemPrompt } from '../src/data/knowledge.js';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const PRIMARY_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
const BACKUP_MODEL = 'llama-3.1-8b-instant';

const MAX_MESSAGES = 10; // history sent to the model
const MAX_CHARS = 600; // per message
const MAX_TOKENS = 450; // reply length cap

/* Best-effort rate limit per visitor IP (resets when the serverless instance restarts). */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 25;
const hits = new Map();

const isLimited = (ip) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  /* Keep the map from growing forever. */
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > MAX_REQUESTS;
};

const callGroq = async (model, system, messages, apiKey) => {
  const response = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: system }, ...messages],
      max_tokens: MAX_TOKENS,
      temperature: 0.4,
    }),
    signal: AbortSignal.timeout(20000),
  });

  if (!response.ok) {
    const error = new Error(`Groq responded with ${response.status}`);
    error.status = response.status;
    throw error;
  }

  const data = await response.json();
  return (data?.choices?.[0]?.message?.content || '').trim();
};

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'Chat is not configured yet' });
  }

  const ip =
    String(req.headers['x-forwarded-for'] || '')
      .split(',')[0]
      .trim() || 'unknown';

  if (isLimited(ip)) {
    return res
      .status(429)
      .json({ error: 'Too many messages. Please try again in a few minutes.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = null;
    }
  }

  const incoming = Array.isArray(body?.messages) ? body.messages : [];

  const messages = incoming
    .filter(
      (m) =>
        m &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim()
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

  /* The conversation must start and end with a visitor message. */
  while (messages.length && messages[0].role !== 'user') messages.shift();

  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const system = buildSystemPrompt();

  try {
    let reply;

    try {
      reply = await callGroq(PRIMARY_MODEL, system, messages, apiKey);
    } catch (err) {
      /* If the main model was renamed or retired, retry once with a backup model. */
      const modelProblem = err.status === 400 || err.status === 404;
      if (modelProblem && PRIMARY_MODEL !== BACKUP_MODEL) {
        reply = await callGroq(BACKUP_MODEL, system, messages, apiKey);
      } else {
        throw err;
      }
    }

    if (!reply) {
      return res.status(502).json({ error: 'The model returned an empty reply' });
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('chat api error:', err.message);
    return res.status(502).json({ error: 'The assistant is unavailable right now' });
  }
}
