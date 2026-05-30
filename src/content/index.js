// The content registry (auto-assembled). Tracks -> modules -> lessons + braided order.
export const tracks = [
  { id: 'engineering', title: 'AI Engineering', tagline: "From 'how does this thing actually work?' to 'I can design, ship, and govern AI products people trust.'", accent: 'accent', accentVar: 'var(--accent)', modules: [] },
  { id: 'product', title: 'Product Leadership', tagline: 'Think like a Silicon Valley product leader — and speak engineering fluently enough to lead the people who build.', accent: 'blue', accentVar: 'var(--blue)', modules: [] },
]
export const lessons = {}
export const braided = []
const trackById = (id) => tracks.find((t) => t.id === id)
export function registerModule({ trackId, id, title, goal, lessonMap }) {
  Object.assign(lessons, lessonMap)
  trackById(trackId).modules.push({ id, title, goal, lessonIds: Object.keys(lessonMap) })
}

import engM1 from './engineering/m1.js'
import engM2 from './engineering/m2.js'
import engM3 from './engineering/m3.js'
import engM4 from './engineering/m4.js'
import engM5 from './engineering/m5.js'
import engM6 from './engineering/m6.js'
import engM7 from './engineering/m7.js'
import prodM1 from './product/m1.js'
import prodM2 from './product/m2.js'
import prodM3 from './product/m3.js'
import prodM4 from './product/m4.js'
import prodM5 from './product/m5.js'
import prodM6 from './product/m6.js'

registerModule({ trackId: 'engineering', id: 'eng-m1', title: "Module 1 — What an LLM Actually Is", goal: "Build a rock-solid, jargon-free mental model of how a large language model works.", lessonMap: engM1 })
registerModule({ trackId: 'engineering', id: 'eng-m2', title: "Module 2 — Building Reliable AI Features", goal: "The five-technique builder’s toolkit for dependable AI features.", lessonMap: engM2 })
registerModule({ trackId: 'engineering', id: 'eng-m3', title: "Module 3 — Agents & Agentic Software Engineering", goal: "The defining shift of 2026: AI that acts, not just answers.", lessonMap: engM3 })
registerModule({ trackId: 'engineering', id: 'eng-m4', title: "Module 4 — Proving It Works: Evals & Observability", goal: "The discipline that separates shipped products from demos.", lessonMap: engM4 })
registerModule({ trackId: 'engineering', id: 'eng-m5', title: "Module 5 — Safety, Security & Governance", goal: "Ship AI that won’t make headlines for the wrong reasons.", lessonMap: engM5 })
registerModule({ trackId: 'engineering', id: 'eng-m6', title: "Module 6 — Production AI & LLMOps", goal: "Turn a prototype into a reliable, affordable, durable product.", lessonMap: engM6 })
registerModule({ trackId: 'engineering', id: 'eng-m7', title: "Module 7 — The Product Owner’s Edge", goal: "Step back and think like a Silicon Valley owner. (Flywheel is taught canonically in the Product track.)", lessonMap: engM7 })
registerModule({ trackId: 'product', id: 'prod-m1', title: "Module 1 — How Great Product Companies Work", goal: "The operating system of the best tech companies.", lessonMap: prodM1 })
registerModule({ trackId: 'product', id: 'prod-m2', title: "Module 2 — Product Discovery", goal: "De-risk ideas cheaply before expensive engineering time.", lessonMap: prodM2 })
registerModule({ trackId: 'product', id: 'prod-m3', title: "Module 3 — Vision, Strategy & Saying No", goal: "Set direction and make the ruthless trade-offs.", lessonMap: prodM3 })
registerModule({ trackId: 'product', id: 'prod-m4', title: "Module 4 — Leading People", goal: "The human side — where most transformations fail.", lessonMap: prodM4 })
registerModule({ trackId: 'product', id: 'prod-m5', title: "Module 5 — Managing AI Products", goal: "A different animal: probabilistic, not deterministic.", lessonMap: prodM5 })
registerModule({ trackId: 'product', id: 'prod-m6', title: "Module 6 — Business & Engineering Edge of AI", goal: "The commercial realities that decide survival.", lessonMap: prodM6 })

braided.push('eng-m1-l1', 'eng-m1-l2', 'eng-m1-l3', 'eng-m1-l4', 'eng-m1-l5', 'eng-m1-l6', 'eng-m1-l7', 'eng-m1-l8', 'prod-m1-l1', 'prod-m1-l2', 'prod-m1-l3', 'prod-m1-l4', 'prod-m1-l5', 'prod-m1-l6', 'eng-m2-l1', 'eng-m2-l2', 'eng-m2-l3', 'eng-m2-l4', 'eng-m2-l5', 'eng-m2-l6', 'prod-m2-l1', 'prod-m2-l2', 'prod-m2-l3', 'prod-m2-l4', 'prod-m2-l5', 'prod-m2-l6', 'eng-m3-l1', 'eng-m3-l2', 'eng-m3-l3', 'eng-m3-l4', 'eng-m3-l5', 'eng-m3-l6', 'eng-m3-l7', 'prod-m3-l1', 'prod-m3-l2', 'prod-m3-l3', 'prod-m3-l4', 'prod-m3-l5', 'prod-m3-l6', 'eng-m4-l1', 'eng-m4-l2', 'eng-m4-l3', 'eng-m4-l4', 'eng-m4-l5', 'eng-m4-l6', 'prod-m4-l1', 'prod-m4-l2', 'prod-m4-l3', 'prod-m4-l4', 'prod-m4-l5', 'eng-m5-l1', 'eng-m5-l2', 'eng-m5-l3', 'eng-m5-l4', 'eng-m5-l5', 'eng-m5-l6', 'prod-m5-l1', 'prod-m5-l2', 'prod-m5-l3', 'prod-m5-l4', 'prod-m5-l5', 'eng-m6-l1', 'eng-m6-l2', 'eng-m6-l3', 'eng-m6-l4', 'eng-m6-l5', 'prod-m6-l1', 'prod-m6-l2', 'prod-m6-l3', 'prod-m6-l4', 'prod-m6-l5', 'prod-m6-l6', 'eng-m7-l1', 'eng-m7-l2')

// ─── Coding tracks (Python + Java) — merged from a self-contained module ───
import coding from './coding.js'
// Append the coding tracks (Python, then Java) to the braided order in track→module→lesson
// order, so "Mark complete" advances through coding lessons too instead of dead-ending.
for (const t of coding.tracks) {
  tracks.push(t)
  for (const m of t.modules) braided.push(...m.lessonIds)
}
Object.assign(lessons, coding.lessons)

// ─── Cloud, AWS & FinOps track — merged from a self-contained module ───
import cloud from './cloud.js'
for (const t of cloud.tracks) {
  tracks.push(t)
  for (const m of t.modules) braided.push(...m.lessonIds)
}
Object.assign(lessons, cloud.lessons)

// Single merged glossary (AI/Product terms + coding terms + cloud terms).
import baseGlossary from './glossary.js'
export const glossary = { ...baseGlossary, ...(coding.codingGlossary || {}), ...(cloud.cloudGlossary || {}) }
