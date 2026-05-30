// Transforms the research artifact into per-module authoring briefs.
// Handles: id scheme, the gentle-on-ramp reorder (eng-m1), the flywheel dedup
// (eng-m7 drops the Snowball lesson), and the five injected addition lessons.
// Output: docs/research/jobs/<moduleId>.json + docs/research/jobs/_index.json
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const research = JSON.parse(readFileSync(root + 'docs/research/atlas-curriculum-research.json', 'utf8')).result
const outDir = root + 'docs/research/jobs'
mkdirSync(outDir, { recursive: true })

// ── Injected addition lessons (not in the research artifact) ──
const INJECT = {
  multimodal: {
    title: 'Beyond Text: Multimodal Models (Vision, Voice, and Image Generation)',
    summary: "Modern models do not just read and write text — they see images, hear and speak, and generate pictures and video. The same 'predict the next chunk' idea extends to other kinds of data, hugely widening what AI products can do.",
    metaphor_seed: 'A person who was once only a pen-pal (text only) and has now gained eyes, ears, and a voice — they can look at your photo, listen to your question, and sketch you a picture back. Same brain, far more senses.',
    case_study_seed: "OpenAI's GPT-4o and Google's Gemini live multimodal demos (2024-2025): real-time voice conversation, reading a screenshot, describing a live camera feed — plus image/video generators like Sora and Midjourney as real product surfaces.",
    pm_angle: 'Multimodal unlocks whole product categories (document AI, voice agents, visual search) but each modality adds cost, latency, and new failure modes. Knowing what is reliable today versus a flashy demo lets you scope realistically.',
    deep_sections: ['How images and audio become tokens too', 'Document AI and OCR as a product surface', "Voice agents and image/video generation — what's production-ready"],
    sources: [{ label: 'OpenAI — Hello GPT-4o', url: 'https://openai.com/index/hello-gpt-4o/' }],
  },
  'responsible-ai': {
    title: 'Whose Values? Bias, Fairness, and Responsible AI',
    summary: 'Models learn from human data, so they inherit human biases — and at scale those biases can cause real, discriminatory harm. Responsible AI is the practice of finding and reducing that harm before it reaches users.',
    metaphor_seed: "A mirror that does not just reflect society but amplifies it — if the data it learned from under-represents some people, the mirror quietly distorts in the same direction, and at scale that distortion becomes systemic.",
    case_study_seed: "Amazon's scrapped AI recruiting tool (2018) that penalised résumés containing the word 'women's', and the COMPAS criminal-risk-score controversy — canonical cases of biased training data producing discriminatory outcomes.",
    pm_angle: 'Bias is a product, brand, legal, and ethical risk you own. You must decide where to measure fairness, what representativeness your data needs, and where a biased output is simply unacceptable. It is a requirement, not an afterthought.',
    deep_sections: ['Where bias enters: data, labels, and feedback loops', 'Measuring fairness (and why definitions compete)', 'Mitigations: representative data, disparate-impact evals, human oversight'],
    sources: [{ label: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' }],
  },
  regulation: {
    title: 'The Rules of the Road: AI Regulation and Compliance',
    summary: 'Shipping AI now means operating inside a fast-growing body of law — what data you may use, what you must disclose, and what you are liable for. Ignoring it is an existential product risk.',
    metaphor_seed: "Driving a powerful new vehicle onto public roads: it does not matter how fast your car is if you ignore speed limits, licensing, and who is liable in a crash. Regulation is the road law for AI, and it is being written right now.",
    case_study_seed: 'The EU AI Act (phasing in from 2024-2026) with its risk-tier system banning some uses and heavily regulating high-risk ones; plus GDPR data-residency rules and the wave of copyright lawsuits over training data (e.g. NYT v. OpenAI).',
    pm_angle: 'Regulation constrains what data you can use, what you must log and disclose, and which use cases are off-limits — directly shaping the roadmap. "Move fast" meets "do not break the law", and you must design for compliance from the start.',
    deep_sections: ['EU AI Act risk tiers in plain English', "GDPR, data residency, and the 'right to explanation'", 'Copyright and training data: the open legal questions'],
    sources: [{ label: 'EU AI Act explorer', url: 'https://artificialintelligenceact.eu/' }],
  },
  analytics: {
    title: 'Reading the Data: Analytics Literacy for Product Leaders',
    summary: "The product model insists on 'deep knowledge of the data', but that is a learnable, semi-technical skill: reading an A/B test, knowing a funnel from a cohort, and telling a real signal from noise. Without it, 'data-driven' is just a slogan.",
    metaphor_seed: "A doctor reading a patient's chart. Anyone can see the numbers went up or down; a trained clinician knows which numbers matter, which are noise, and when a 'significant' change is real versus a fluke. Analytics literacy is that clinical eye for your product's vital signs.",
    case_study_seed: "Booking.com's famous experimentation culture — running over a thousand concurrent A/B tests and trusting statistically-significant results over executive opinion — versus the common trap of celebrating a metric bump that was just random noise.",
    pm_angle: 'This IS the technical-literacy core for PMs: A/B testing and significance, funnels, cohorts, retention curves, and leading versus lagging indicators. You need not run the SQL, but you must read the dashboard and challenge a dubious result.',
    deep_sections: ['A/B tests and statistical significance without the maths', 'Funnels, cohorts, and retention curves', 'Leading versus lagging indicators; vanity versus actionable metrics'],
    sources: [{ label: "Lenny's Newsletter — metrics & experimentation", url: 'https://www.lennysnewsletter.com/' }],
  },
  growth: {
    title: 'Getting to Users: Growth and Go-to-Market',
    summary: 'A great product no one adopts still fails. Growth is the discipline of acquisition, activation, and retention — and product-led growth makes the product itself the engine that brings and keeps users.',
    metaphor_seed: 'A brilliant restaurant down an unmarked alley. The food (product) is superb, but if no one finds the door (acquisition), feels welcome on the first visit (activation), or has a reason to return (retention), it closes. Growth builds the sign, the welcome, and the reason to come back.',
    case_study_seed: "Slack and Dropbox's product-led growth: the product spread inside companies through use and invitations rather than a traditional sales push — the canonical PLG flywheel (AARRR: acquisition, activation, retention, referral, revenue).",
    pm_angle: 'Technical-literacy angle: growth loops are instrumented and measured — referral mechanics, activation milestones, and retention cohorts all depend on event tracking you must understand to optimise. PLG ties product design directly to distribution.',
    deep_sections: ['The AARRR funnel: acquisition, activation, retention, referral, revenue', 'Product-led growth and viral/referral loops', 'Positioning: why the same product wins or loses on how it is framed'],
    sources: [{ label: 'Reforge — growth loops', url: 'https://www.reforge.com/' }],
  },
}

// ── Module plan: which research lessons (by index), in what order, plus injections ──
// pick = research lesson indices in desired order; skipSeed reserves l1 for an existing seed lesson.
const PLAN = [
  { id: 'eng-m1', track: 'engineering', src: 0, title: 'Module 1 — What an LLM Actually Is', goal: 'Build a rock-solid, jargon-free mental model of how a large language model works.', seedReserved: 1, pick: [6, 1, 2, 3, 4, 5], inject: ['multimodal'] },
  { id: 'eng-m2', track: 'engineering', src: 1, title: 'Module 2 — Building Reliable AI Features', goal: 'The five-technique builder’s toolkit for dependable AI features.', pick: [0, 1, 2, 3, 4, 5], inject: [] },
  { id: 'eng-m3', track: 'engineering', src: 2, title: 'Module 3 — Agents & Agentic Software Engineering', goal: 'The defining shift of 2026: AI that acts, not just answers.', pick: [0, 1, 2, 3, 4, 5, 6], inject: [] },
  { id: 'eng-m4', track: 'engineering', src: 3, title: 'Module 4 — Proving It Works: Evals & Observability', goal: 'The discipline that separates shipped products from demos.', pick: [0, 1, 2, 3, 4, 5], inject: [] },
  { id: 'eng-m5', track: 'engineering', src: 4, title: 'Module 5 — Safety, Security & Governance', goal: 'Ship AI that won’t make headlines for the wrong reasons.', pick: [0, 1, 2, 3], inject: ['responsible-ai', 'regulation'] },
  { id: 'eng-m6', track: 'engineering', src: 5, title: 'Module 6 — Production AI & LLMOps', goal: 'Turn a prototype into a reliable, affordable, durable product.', pick: [0, 1, 2, 3, 4], inject: [] },
  { id: 'eng-m7', track: 'engineering', src: 6, title: 'Module 7 — The Product Owner’s Edge', goal: 'Step back and think like a Silicon Valley owner. (Flywheel is taught canonically in the Product track.)', pick: [1, 2], inject: [] },
  { id: 'prod-m1', track: 'product', src: 0, title: 'Module 1 — How Great Product Companies Work', goal: 'The operating system of the best tech companies.', seedReserved: 1, pick: [1, 2, 3, 4], inject: ['analytics'] },
  { id: 'prod-m2', track: 'product', src: 1, title: 'Module 2 — Product Discovery', goal: 'De-risk ideas cheaply before expensive engineering time.', pick: [0, 1, 2, 3, 4, 5], inject: [] },
  { id: 'prod-m3', track: 'product', src: 2, title: 'Module 3 — Vision, Strategy & Saying No', goal: 'Set direction and make the ruthless trade-offs.', pick: [0, 1, 2, 3, 4, 5], inject: [] },
  { id: 'prod-m4', track: 'product', src: 3, title: 'Module 4 — Leading People', goal: 'The human side — where most transformations fail.', pick: [0, 1, 2, 3, 4], inject: [] },
  { id: 'prod-m5', track: 'product', src: 4, title: 'Module 5 — Managing AI Products', goal: 'A different animal: probabilistic, not deterministic.', pick: [0, 1, 2, 3, 4], inject: [] },
  { id: 'prod-m6', track: 'product', src: 5, title: 'Module 6 — Business & Engineering Edge of AI', goal: 'The commercial realities that decide survival.', pick: [0, 1, 2, 3, 4], inject: ['growth'] },
]

const index = []
for (const m of PLAN) {
  const srcLessons = research[m.track].modules[m.src].lessons
  const seeds = []
  let order = (m.seedReserved || 0) + 1
  for (const idx of m.pick) {
    const L = srcLessons[idx]
    seeds.push({
      id: `${m.id}-l${order}`, order, moduleId: m.id, trackId: m.track, estMinutes: 9,
      title: L.title, summary: L.summary, metaphor_seed: L.metaphor_idea || L.metaphor_seed,
      case_study_seed: L.case_study_idea || L.case_study_seed, pm_angle: L.pm_angle || '',
      deep_sections: L.deep_sections || [], sources: L.sources || [],
    })
    order++
  }
  for (const key of m.inject) {
    const inj = INJECT[key]
    seeds.push({ id: `${m.id}-l${order}`, order, moduleId: m.id, trackId: m.track, estMinutes: 9, ...inj })
    order++
  }
  writeFileSync(`${outDir}/${m.id}.json`, JSON.stringify({ moduleId: m.id, trackId: m.track, title: m.title, goal: m.goal, lessons: seeds }, null, 2))
  index.push({ id: m.id, trackId: m.track, title: m.title, goal: m.goal, file: `docs/research/jobs/${m.id}.json`, lessonCount: seeds.length })
}
writeFileSync(`${outDir}/_index.json`, JSON.stringify(index, null, 2))

const total = index.reduce((s, m) => s + m.lessonCount, 0)
console.log(`Wrote ${index.length} module briefs, ${total} lessons to author.`)
for (const m of index) console.log(`  ${m.id} (${m.trackId}): ${m.lessonCount} lessons`)
