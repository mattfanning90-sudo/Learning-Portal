// Consumes the agentic-engineering authoring output (one JSON per lesson under
// docs/research/agentic-jobs/) and writes src/content/agentic.js.
// Re-stamps authoritative id/trackId/moduleId/order/title from the manifest, validates every
// lesson with the real validateLesson, SKIPS un-authored lessons (so partial/incremental builds
// work during a pilot), and drops empty modules. Concept-first track → no runnable challenge.
//
// Usage: node scripts/assemble-agentic.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { validateLesson } from '../src/lib/schema.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const jobsDir = root + 'docs/research/agentic-jobs/'

const MODULES = {
  'ag-m1': { title: 'Module 1 — Foundations: Working with LLMs', goal: 'A practitioner’s mental model of what these models are — and are not — so you can use them well.' },
  'ag-m2': { title: 'Module 2 — Prompting & Context Engineering', goal: 'Reliably get great output: structure, examples, schemas, and what to feed the model.' },
  'ag-m3': { title: 'Module 3 — Coding with AI Agents', goal: 'The daily 10×: working with Claude Code, Copilot and Cursor as coworkers you direct and review.' },
  'ag-m4': { title: 'Module 4 — How Agents Actually Work', goal: 'Open the box: the agent loop, tool calling, MCP, memory, and guardrails.' },
  'ag-m5': { title: 'Module 5 — Building Agentic Systems', goal: 'Design patterns for real agents: single vs multi-agent, workflows, human-in-the-loop, trade-offs.' },
  'ag-m6': { title: 'Module 6 — Trust, Evals & Production', goal: 'Make it reliable: evals, measuring quality, observability, prompt injection, responsible use.' },
  'ag-m7': { title: 'Module 7 — The Agentic Engineer', goal: 'Put it together: a real end-to-end build, your own toolkit, and the craft going forward.' },
}

// [moduleId, order, id, title] — authoritative manifest.
const MANIFEST = [
  ['ag-m1', 1, 'ag-m1-l1', 'What an LLM Is, for a Practitioner'],
  ['ag-m1', 2, 'ag-m1-l2', 'Claude vs ChatGPT vs Gemini: When to Use Which'],
  ['ag-m1', 3, 'ag-m1-l3', 'Context Is Everything: the Window as Working Memory'],
  ['ag-m1', 4, 'ag-m1-l4', 'Why You Always Verify: Hallucination & Knowledge Cutoff'],
  ['ag-m2', 1, 'ag-m2-l1', 'Anatomy of a Great Prompt'],
  ['ag-m2', 2, 'ag-m2-l2', "Show, Don't Tell: Few-Shot Examples"],
  ['ag-m2', 3, 'ag-m2-l3', 'Structured Output: JSON & Schemas'],
  ['ag-m2', 4, 'ag-m2-l4', 'Context Engineering: What to Put In, What to Leave Out'],
  ['ag-m2', 5, 'ag-m2-l5', 'Reasoning Models & "Think Step by Step"'],
  ['ag-m2', 6, 'ag-m2-l6', 'Debugging a Prompt That Misbehaves'],
  ['ag-m3', 1, 'ag-m3-l1', 'From Autocomplete to Agentic Coding'],
  ['ag-m3', 2, 'ag-m3-l2', 'The Tools: Claude Code, Copilot & Cursor — Best at What'],
  ['ag-m3', 3, 'ag-m3-l3', 'The Agent-Coworker Loop: Plan → Act → Review'],
  ['ag-m3', 4, 'ag-m3-l4', 'Writing a Good Task or Spec for an Agent'],
  ['ag-m3', 5, 'ag-m3-l5', "Reviewing Agent Output: Verify, Don't Trust"],
  ['ag-m3', 6, 'ag-m3-l6', 'Context Files: AGENTS.md / CLAUDE.md & Conventions'],
  ['ag-m3', 7, 'ag-m3-l7', 'When Not to Use an Agent'],
  ['ag-m4', 1, 'ag-m4-l1', 'The Agent Loop: Perceive → Decide → Act'],
  ['ag-m4', 2, 'ag-m4-l2', 'Tool & Function Calling: Giving the Model Hands'],
  ['ag-m4', 3, 'ag-m4-l3', 'MCP: the USB-C for Tools'],
  ['ag-m4', 4, 'ag-m4-l4', 'Memory & State Across Turns'],
  ['ag-m4', 5, 'ag-m4-l5', 'Guardrails: Keeping an Agent on the Rails'],
  ['ag-m5', 1, 'ag-m5-l1', 'Single-Agent Patterns: ReAct & Plan-and-Execute'],
  ['ag-m5', 2, 'ag-m5-l2', 'Multi-Agent Orchestration: When Many Beat One'],
  ['ag-m5', 3, 'ag-m5-l3', 'Workflows vs Autonomous Agents'],
  ['ag-m5', 4, 'ag-m5-l4', 'Human-in-the-Loop & Approvals'],
  ['ag-m5', 5, 'ag-m5-l5', 'Cost, Latency & the Engineering Trade-offs'],
  ['ag-m6', 1, 'ag-m6-l1', "You Can't Ship on Vibes: Evals for Agents"],
  ['ag-m6', 2, 'ag-m6-l2', 'Measuring Agent Quality: Task Success, Not Output'],
  ['ag-m6', 3, 'ag-m6-l3', 'Observability & Tracing for Agentic Systems'],
  ['ag-m6', 4, 'ag-m6-l4', 'Prompt Injection & the New Attack Surface'],
  ['ag-m6', 5, 'ag-m6-l5', 'Responsible, Cost-Aware Agentic Engineering'],
  ['ag-m7', 1, 'ag-m7-l1', 'Case Study: How This Portal Was Built with Claude Code'],
  ['ag-m7', 2, 'ag-m7-l2', 'Building Your Own Agent Toolkit'],
  ['ag-m7', 3, 'ag-m7-l3', 'The 2026 Craft: Taste, Judgment & Staying Current'],
  ['ag-m7', 4, 'ag-m7-l4', 'Where This Is Going: the Agentic Future'],
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
  const lesson = { ...a, id, trackId: 'agentic', moduleId, order, title, estMinutes: a.estMinutes || 9 }
  delete lesson.challenge
  delete lesson.glossaryTerms
  const issues = validateLesson(lesson)
  if (issues.length) problems.push(`${id}: ${issues.join(' | ')}`)
  lessons[id] = lesson
  ;(moduleLessonIds[moduleId] ||= []).push({ order, id })
}

const tracks = [{
  id: 'agentic',
  title: 'Agentic Engineering & Coding',
  tagline: 'Get 10× from Claude, ChatGPT, Gemini and coding agents — and understand the engineering underneath well enough to build your own.',
  accent: 'agent',
  accentVar: 'var(--agent)',
  modules: Object.keys(MODULES)
    .map((mid) => ({
      id: mid,
      title: MODULES[mid].title,
      goal: MODULES[mid].goal,
      lessonIds: (moduleLessonIds[mid] || []).sort((x, y) => x.order - y.order).map((x) => x.id),
    }))
    .filter((m) => m.lessonIds.length > 0),
}]

const agenticGlossary = {}

const out = `// Agentic Engineering & Coding track. Auto-assembled by scripts/assemble-agentic.mjs.
// Self-contained: index.js merges { tracks, lessons } into the registry.
const lessons = ${JSON.stringify(lessons, null, 2)}

const tracks = ${JSON.stringify(tracks, null, 2)}

const agenticGlossary = ${JSON.stringify(agenticGlossary, null, 2)}

export default { tracks, lessons, agenticGlossary }
`
writeFileSync(root + 'src/content/agentic.js', out)

console.log(`Assembled ${Object.keys(lessons).length} agentic lessons across ${tracks[0].modules.length} module(s).`)
tracks[0].modules.forEach((m) => console.log(`  ${m.id}: ${m.lessonIds.length} lessons`))
if (missing.length) console.log(`  (skipped ${missing.length} un-authored: ${missing.join(', ')})`)
console.log('--- validation ---')
console.log(problems.length ? problems.map((p) => '  ' + p).join('\n') : '  all authored lessons valid ✓')
if (problems.length) { console.log(`\n${problems.length} ISSUES to review.`); process.exit(1) }
