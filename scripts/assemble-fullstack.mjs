// Consumes the full-stack authoring output (one JSON per lesson under
// docs/research/fullstack-jobs/) and writes src/content/fullstack.js.
// Re-stamps authoritative id/trackId/moduleId/order/title from the manifest, validates every
// lesson with the real validateLesson, SKIPS un-authored lessons (so partial/incremental builds
// work during a pilot), and drops empty modules. Concept-first track → no runnable challenge.
//
// Usage: node scripts/assemble-fullstack.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { validateLesson } from '../src/lib/schema.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const jobsDir = root + 'docs/research/fullstack-jobs/'

const MODULES = {
  'fs-m1': { title: 'Module 1 — How the Web Actually Works', goal: 'Build the whole-system mental model: what happens between a click and a rendered page.' },
  'fs-m2': { title: 'Module 2 — The Frontend', goal: 'Understand what the user sees and touches — components, state, and talking to the backend.' },
  'fs-m3': { title: 'Module 3 — The Backend', goal: 'The engine room: servers, APIs, the request lifecycle, and who is allowed to do what.' },
  'fs-m4': { title: 'Module 4 — Data & Databases', goal: 'Where it all lives: how apps store, model, read, and speed up their data.' },
  'fs-m5': { title: 'Module 5 — Connecting It All', goal: 'Trace a real feature end to end and wire in the moving parts that make it work.' },
  'fs-m6': { title: 'Module 6 — Shipping It', goal: 'Get code from a laptop to production safely — version control, CI/CD, hosting, monitoring.' },
  'fs-m7': { title: 'Module 7 — Quality & Craft', goal: 'What separates a demo from a product: testing, security, performance, readability, access.' },
  'fs-m8': { title: 'Module 8 — Thinking Like an Engineer', goal: 'System design and the pro mindset: scale, architecture, trade-offs, and shipping value.' },
}

// [moduleId, order, id, title] — authoritative manifest.
const MANIFEST = [
  ['fs-m1', 1, 'fs-m1-l1', 'What Happens When You Visit a URL'],
  ['fs-m1', 2, 'fs-m1-l2', 'Client vs Server: the Two Halves of Every App'],
  ['fs-m1', 3, 'fs-m1-l3', 'HTTP: the Language of the Web'],
  ['fs-m1', 4, 'fs-m1-l4', 'HTML, CSS & JavaScript: Structure, Style, Behaviour'],
  ['fs-m1', 5, 'fs-m1-l5', 'The Browser, the DOM & What Runs Where'],
  ['fs-m1', 6, 'fs-m1-l6', 'DNS & Domains: How a Request Finds a Server'],
  ['fs-m2', 1, 'fs-m2-l1', 'From Pages to Components'],
  ['fs-m2', 2, 'fs-m2-l2', 'State & Reactivity: Why UIs Update'],
  ['fs-m2', 3, 'fs-m2-l3', 'Talking to the Backend: APIs & JSON'],
  ['fs-m2', 4, 'fs-m2-l4', 'Routing & SPAs vs Server-Rendered Pages'],
  ['fs-m2', 5, 'fs-m2-l5', 'Styling, Design Systems & Responsive Design'],
  ['fs-m2', 6, 'fs-m2-l6', 'Why We "Build": Bundlers & Tooling'],
  ['fs-m3', 1, 'fs-m3-l1', 'What a Server Actually Does'],
  ['fs-m3', 2, 'fs-m3-l2', 'APIs & REST: the Contract Between Front and Back'],
  ['fs-m3', 3, 'fs-m3-l3', 'The Request Lifecycle: Routing → Middleware → Handler'],
  ['fs-m3', 4, 'fs-m3-l4', 'Authentication vs Authorization'],
  ['fs-m3', 5, 'fs-m3-l5', 'Sessions, Tokens & Cookies'],
  ['fs-m3', 6, 'fs-m3-l6', 'Never Trust the Client: Validation & Errors'],
  ['fs-m4', 1, 'fs-m4-l1', 'Why Apps Need a Database'],
  ['fs-m4', 2, 'fs-m4-l2', 'SQL vs NoSQL: the Core Trade-off'],
  ['fs-m4', 3, 'fs-m4-l3', 'Data Modelling: Tables, Keys & Relationships'],
  ['fs-m4', 4, 'fs-m4-l4', 'Reading & Writing Data (CRUD)'],
  ['fs-m4', 5, 'fs-m4-l5', 'Indexes, Migrations & Performance Basics'],
  ['fs-m4', 6, 'fs-m4-l6', 'Caching: Making It Fast'],
  ['fs-m5', 1, 'fs-m5-l1', 'A Feature Traced: Click → Database → Back'],
  ['fs-m5', 2, 'fs-m5-l2', 'Configuration & Secrets'],
  ['fs-m5', 3, 'fs-m5-l3', 'File Uploads & Object Storage'],
  ['fs-m5', 4, 'fs-m5-l4', 'Real-Time: WebSockets & Push'],
  ['fs-m5', 5, 'fs-m5-l5', 'Third-Party APIs & Webhooks'],
  ['fs-m6', 1, 'fs-m6-l1', 'Version Control & Collaboration (Git, Branches, PRs)'],
  ['fs-m6', 2, 'fs-m6-l2', 'CI/CD: Automated Testing & Deploy Pipelines'],
  ['fs-m6', 3, 'fs-m6-l3', 'Hosting: Static, Servers, Serverless & Containers'],
  ['fs-m6', 4, 'fs-m6-l4', 'Environments & Rollbacks'],
  ['fs-m6', 5, 'fs-m6-l5', 'Monitoring & Logging: When It Breaks at 3am'],
  ['fs-m7', 1, 'fs-m7-l1', 'The Testing Pyramid'],
  ['fs-m7', 2, 'fs-m7-l2', 'Security Essentials (OWASP, in Plain English)'],
  ['fs-m7', 3, 'fs-m7-l3', 'Performance: Frontend Load & Backend Scale'],
  ['fs-m7', 4, 'fs-m7-l4', 'Readable Code & Technical Debt'],
  ['fs-m7', 5, 'fs-m7-l5', 'Accessibility & Inclusive Design'],
  ['fs-m8', 1, 'fs-m8-l1', 'System Design Basics: How to Scale'],
  ['fs-m8', 2, 'fs-m8-l2', 'Monolith vs Microservices vs Serverless'],
  ['fs-m8', 3, 'fs-m8-l3', "Trade-offs: There's No \"Best\", Only Fit"],
  ['fs-m8', 4, 'fs-m8-l4', 'Reading a Codebase & Joining a Team'],
  ['fs-m8', 5, 'fs-m8-l5', 'The Product-Engineer: Ship Value, Not Just Code'],
]

const lessons = {}
const problems = []
const missing = []
const moduleLessonIds = {}

for (const [moduleId, order, id, title] of MANIFEST) {
  const file = jobsDir + id + '.json'
  if (!existsSync(file)) { missing.push(id); continue }
  let a
  try { a = JSON.parse(readFileSync(file, 'utf8')) } catch (e) { problems.push(`${id}: bad JSON (${e.message})`); continue }
  const lesson = { ...a, id, trackId: 'fullstack', moduleId, order, title, estMinutes: a.estMinutes || 9 }
  delete lesson.challenge
  delete lesson.glossaryTerms
  const issues = validateLesson(lesson)
  if (issues.length) problems.push(`${id}: ${issues.join(' | ')}`)
  lessons[id] = lesson
  ;(moduleLessonIds[moduleId] ||= []).push({ order, id })
}

const tracks = [{
  id: 'fullstack',
  title: 'Full-Stack Engineering',
  tagline: 'Understand how a real app is built end to end — every layer, in plain English — well enough to design it and lead the people who build it.',
  accent: 'stack',
  accentVar: 'var(--stack)',
  modules: Object.keys(MODULES)
    .map((mid) => ({
      id: mid,
      title: MODULES[mid].title,
      goal: MODULES[mid].goal,
      lessonIds: (moduleLessonIds[mid] || []).sort((x, y) => x.order - y.order).map((x) => x.id),
    }))
    .filter((m) => m.lessonIds.length > 0),
}]

const fullstackGlossary = {}

const out = `// Full-Stack Engineering track. Auto-assembled by scripts/assemble-fullstack.mjs.
// Self-contained: index.js merges { tracks, lessons } into the registry.
const lessons = ${JSON.stringify(lessons, null, 2)}

const tracks = ${JSON.stringify(tracks, null, 2)}

const fullstackGlossary = ${JSON.stringify(fullstackGlossary, null, 2)}

export default { tracks, lessons, fullstackGlossary }
`
writeFileSync(root + 'src/content/fullstack.js', out)

console.log(`Assembled ${Object.keys(lessons).length} full-stack lessons across ${tracks[0].modules.length} module(s).`)
tracks[0].modules.forEach((m) => console.log(`  ${m.id}: ${m.lessonIds.length} lessons`))
if (missing.length) console.log(`  (skipped ${missing.length} un-authored: ${missing.join(', ')})`)
console.log('--- validation ---')
console.log(problems.length ? problems.map((p) => '  ' + p).join('\n') : '  all authored lessons valid ✓')
if (problems.length) { console.log(`\n${problems.length} ISSUES to review.`); process.exit(1) }
