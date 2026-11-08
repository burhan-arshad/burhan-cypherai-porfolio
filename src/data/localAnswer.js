/*
  Offline fallback.
  If the AI backend is not reachable (local dev, no API key, rate limit, network error),
  the chatbot still answers common questions from knowledge.js using simple keyword matching.
*/

import { PROFILE, LINKS, PROJECTS, SERVICES, SKILLS } from './knowledge.js';

/* Lowercase, strip punctuation, pad with spaces so whole-word matching is easy. */
const normalize = (t) =>
  ` ${String(t)
    .toLowerCase()
    .replace(/[^a-z0-9+#]+/g, ' ')
    .trim()} `;

const hasKey = (normalizedText, key) =>
  normalizedText.includes(` ${normalize(key).trim()} `);

const countHits = (normalizedText, keys) =>
  keys.reduce((n, k) => n + (hasKey(normalizedText, k) ? 1 : 0), 0);

const link = (label, url) => `[${label}](${url})`;

const projectAnswer = (p) => {
  const links = [
    p.live ? link('Live demo', p.live) : null,
    p.github ? link('GitHub', p.github) : null,
  ]
    .filter(Boolean)
    .join('  ');

  return [
    `**${p.name}**`,
    p.summary,
    `Tech: ${p.tech}.`,
    links,
  ]
    .filter(Boolean)
    .join('\n\n');
};

const edu = PROFILE.education;

const INTENTS = [
  {
    id: 'greeting',
    keys: ['hi', 'hello', 'hey', 'salam', 'assalam', 'assalamualaikum', 'aoa', 'hola'],
    shortOnly: true,
    answer: () =>
      'Hello. I can tell you about Burhan\'s projects, skills, services or how to contact him. What would you like to know?',
  },
  {
    id: 'thanks',
    keys: ['thanks', 'thank you', 'thx', 'shukriya', 'shukria', 'jazakallah'],
    shortOnly: true,
    answer: () => 'You are welcome. Anything else you would like to know about Burhan?',
  },
  {
    id: 'documents',
    keys: ['cv', 'resume', 'curriculum vitae', 'download', 'pdf'],
    answer: () =>
      `You can download both documents:\n- ${link('CV (PDF)', LINKS.cv)}\n- ${link('Resume (PDF)', LINKS.resume)}\n\nThe CV is the detailed version. The resume is a one-page summary.`,
  },
  {
    id: 'hire',
    keys: [
      'hire', 'hiring', 'freelance', 'freelancer', 'available', 'availability',
      'rate', 'rates', 'price', 'pricing', 'cost', 'quote', 'budget',
      'collaborate', 'collaboration', 'work together', 'job', 'opportunity',
      'internship', 'naukri', 'project for me',
    ],
    answer: () =>
      `${PROFILE.availability}. I cannot quote prices or confirm dates, but Burhan replies directly:\n- Contact form in the Contact section of the portfolio\n- Email: ${LINKS.email}\n- ${link('WhatsApp', LINKS.whatsapp)}\n- ${link('Upwork profile', LINKS.upwork)}\n\nTell him what you need to build and your timeline in the first message.`,
  },
  {
    id: 'contact',
    keys: [
      'contact', 'email', 'mail', 'phone', 'number', 'whatsapp', 'call',
      'reach', 'message', 'rabta', 'talk', 'speak',
    ],
    answer: () =>
      `You can reach Burhan here:\n- Email: ${LINKS.email}\n- Phone: ${LINKS.phone}\n- ${link('WhatsApp', LINKS.whatsapp)}\n- Contact form: the Contact section of this portfolio\n\nHe is based in ${PROFILE.location}.`,
  },
  {
    id: 'links',
    keys: [
      'github', 'linkedin', 'upwork', 'instagram', 'link', 'links',
      'social', 'socials', 'profile', 'profiles', 'portfolio',
    ],
    answer: () =>
      `Burhan online:\n- ${link('GitHub', LINKS.github)}\n- ${link('LinkedIn', LINKS.linkedin)}\n- ${link('Upwork', LINKS.upwork)}\n- ${link('Instagram', LINKS.instagram)}\n- ${link('Portfolio', LINKS.portfolio)}`,
  },
  {
    id: 'games',
    keys: ['game', 'games', 'gaming', 'game development', 'game dev'],
    answer: () => {
      const games = PROJECTS.filter((p) => p.tag === 'Game development' || p.id === 'chess');
      const list = games.map((p) => `- **${p.name}:** ${p.summary}`).join('\n');
      return `Burhan also builds games, mainly with Unity and C#:\n${list}\n\nSee the code on ${link('GitHub', LINKS.github)}.`;
    },
  },
  {
    id: 'projects',
    keys: [
      'project', 'projects', 'work', 'works', 'built', 'build', 'made',
      'created', 'showcase', 'kaam', 'portfolio work',
    ],
    answer: () => {
      const list = PROJECTS.map((p) => `- **${p.name}** (${p.tag})`).join('\n');
      return `Here is what Burhan has built:\n${list}\n\nAsk me about any of them by name, or see everything on ${link('GitHub', LINKS.github)}.`;
    },
  },
  {
    id: 'skills',
    keys: [
      'skill', 'skills', 'tech', 'stack', 'technology', 'technologies',
      'language', 'languages', 'tools', 'tool', 'expertise',
      'good at', 'frameworks', 'libraries',
    ],
    answer: () => {
      const list = Object.entries(SKILLS)
        .map(([k, v]) => `- **${k}:** ${v}`)
        .join('\n');
      return `Burhan's skills:\n${list}`;
    },
  },
  {
    id: 'services',
    keys: ['service', 'services', 'offer', 'offers', 'provide', 'help', 'do you do', 'can you do'],
    answer: () => {
      const list = SERVICES.map((s) => `- **${s.title}:** ${s.text}`).join('\n');
      return `Burhan offers:\n${list}\n\nTo discuss a project, use the contact form or ${link('WhatsApp', LINKS.whatsapp)}.`;
    },
  },
  {
    id: 'education',
    keys: [
      'education', 'study', 'studies', 'university', 'ucp', 'degree',
      'cgpa', 'gpa', 'semester', 'student', 'college', 'qualification',
      'padhai', 'parhai',
    ],
    answer: () =>
      `Burhan is pursuing a ${edu.degree} at ${edu.university}, ${edu.status}, with a CGPA of ${edu.cgpa}. He is also the ${PROFILE.leadership}.`,
  },
  {
    id: 'experience',
    keys: [
      'experience', 'client', 'clients', 'worked', 'freelancing',
      'previous work', 'past work', 'coordinator', 'club',
    ],
    answer: () =>
      `Burhan does freelance web development on ${link('Upwork', LINKS.upwork)}. Client work includes:\n- **Pearl Essence Interiors:** a WordPress website for a UAE-based interior design and fit-out business (${link('visit', 'https://pearlessenceinteriors.com/')})\n- **KADME:** a Shopify store for a Pakistani footwear brand (${link('visit', 'https://kadme.store/')})\n\nHe is also the ${PROFILE.leadership}.`,
  },
  {
    id: 'location',
    keys: ['where', 'location', 'city', 'country', 'pakistan', 'gujranwala', 'based'],
    answer: () => `Burhan is based in ${PROFILE.location}.`,
  },
  {
    id: 'ai',
    keys: [
      'ai', 'ml', 'machine learning', 'deep learning', 'nlp',
      'generative', 'agentic', 'computer vision', 'focus', 'learning',
      'learning path', 'roadmap',
    ],
    answer: () =>
      `Burhan focuses on ${PROFILE.focus.join(', ')}. His current learning path: ${PROFILE.learningPath}.\n\nAsk me about his projects to see this work in practice.`,
  },
  {
    id: 'philosophy',
    keys: ['philosophy', 'motto', 'approach', 'mindset', 'quote'],
    answer: () =>
      `Burhan's philosophy: "${PROFILE.philosophy}" He prefers learning by building over only studying theory.`,
  },
  {
    id: 'who',
    keys: [
      'who', 'about', 'introduce', 'yourself', 'burhan', 'kaun', 'kon',
      'tell me about', 'bio', 'background', 'cypherai',
    ],
    answer: () =>
      `**${PROFILE.name}** is an ${PROFILE.title} and Computer Science student at ${edu.university}, ${edu.status}, with a CGPA of ${edu.cgpa}. He is based in ${PROFILE.location}.\n\n${PROFILE.summary}\n\nAsk me about his projects, skills, services or how to contact him.`,
  },
];

const FALLBACK =
  `I can answer questions about Burhan's background, skills, projects, services and how to contact him. Try asking about his projects or how to hire him.\n\nFor anything else, email ${LINKS.email} or message him on ${link('WhatsApp', LINKS.whatsapp)}.`;

export const getLocalAnswer = (text) => {
  const n = normalize(text);
  const wordCount = n.trim().split(/\s+/).filter(Boolean).length;

  /* 1. A specific project name beats everything else. */
  let bestProject = null;
  let bestHits = 0;

  PROJECTS.forEach((p) => {
    const hits = countHits(n, p.keys);
    if (hits > bestHits) {
      bestHits = hits;
      bestProject = p;
    }
  });

  if (bestProject) return projectAnswer(bestProject);

  /* 2. Otherwise pick the intent with the most keyword hits. */
  let bestIntent = null;
  let bestScore = 0;

  INTENTS.forEach((intent) => {
    if (intent.shortOnly && wordCount > 4) return;
    const score = countHits(n, intent.keys);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  });

  return bestIntent ? bestIntent.answer() : FALLBACK;
};
