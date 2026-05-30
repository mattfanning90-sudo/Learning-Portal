// Consumes the coding-authoring workflow output and writes src/content/coding.js.
// Re-stamps authoritative challenge data from the briefs, VALIDATES each challenge
// by running its reference solution on Wandbox (output must equal expectedOutput),
// runs code examples to catch errors, then strips solutions from the shipped data.
//
// Usage: node scripts/assemble-coding.mjs <workflow-output.json>
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { runCode } from '../src/lib/runCode.js'
import { checkChallenge } from '../src/lib/checkChallenge.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const outPath = process.argv[2]
if (!outPath) { console.error('Usage: node scripts/assemble-coding.mjs <workflow-output.json>'); process.exit(1) }

const raw = JSON.parse(readFileSync(outPath, 'utf8'))
const data = raw.result || raw
const byId = Object.fromEntries((data.modules || []).map((m) => [m.moduleId || m._id, m]))
const jobIndex = JSON.parse(readFileSync(root + 'docs/research/coding-jobs/_index.json', 'utf8'))

// Existing seeds (py-m1-l1, java-m1-l1) to merge in.
const seed = (await import(pathToFileURL(root + 'src/content/coding.js').href)).default
const SEED_LESSON = { 'py-m1': 'py-m1-l1', 'java-m1': 'java-m1-l1' }

const TRACK_META = {
  python: { title: 'Python', accent: 'py', accentVar: 'var(--py)', tagline: 'Learn to code from zero in the language of AI — and run it right here in your browser.' },
  java: { title: 'Java', accent: 'java', accentVar: 'var(--java)', tagline: 'The structured, enterprise language behind Android and big systems — taught from scratch.' },
}

const lessons = {}
const glossary = { ...(seed.codingGlossary || {}) }
const moduleMeta = []
const validations = []
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

for (const job of jobIndex) {
  const brief = JSON.parse(readFileSync(root + job.file, 'utf8'))
  const res = byId[job.id]
  if (!res) { validations.push(`${job.id}: MISSING from workflow output`); continue }
  const authored = res.lessons || []

  const ids = []
  if (SEED_LESSON[job.id]) { const sid = SEED_LESSON[job.id]; lessons[sid] = seed.lessons[sid]; ids.push(sid) }

  for (let i = 0; i < brief.lessons.length; i++) {
    const b = brief.lessons[i]
    const a = authored[i]
    if (!a) { validations.push(`${b.id}: missing from agent output`); continue }
    // Re-stamp authoritative fields.
    const lesson = {
      ...a,
      id: b.id, trackId: b.trackId, moduleId: b.moduleId, order: b.order, title: b.title,
      estMinutes: a.estMinutes || 9,
      challenge: {
        ...a.challenge,
        language: b.language, check: 'equals',
        prompt: b.challenge.prompt, expectedOutput: b.challenge.expectedOutput, starter: b.challenge.starter || '',
      },
    }
    // VALIDATE: run the reference solution; output must equal expectedOutput.
    const sol = a.challenge?.solution
    if (!sol) validations.push(`${b.id}: no solution provided`)
    else {
      const r = await runCode(b.language, sol)
      const passed = r.ok && checkChallenge(r.stdout, b.challenge.expectedOutput)
      validations.push(`${b.id}: solution ${passed ? 'OK' : 'FAIL'}${passed ? '' : ` (got ${JSON.stringify(r.stdout || r.stderr).slice(0, 80)}, want ${JSON.stringify(b.challenge.expectedOutput)})`}`)
      await sleep(150)
    }
    // Validate code examples run.
    for (const [ci, ex] of (a.codeExamples || []).entries()) {
      const r = await runCode(ex.language || b.language, ex.source)
      if (!r.ok) validations.push(`${b.id}: codeExample[${ci}] ERROR (${JSON.stringify(r.stderr).slice(0, 80)})`)
      await sleep(150)
    }
    delete lesson.challenge.solution // keep answers out of the shipped bundle
    lessons[b.id] = lesson
    ids.push(b.id)
  }

  for (const g of res.glossary || []) if (g.id && !glossary[g.id]) glossary[g.id] = { term: g.term, plain: g.plain }
  moduleMeta.push({ id: job.id, trackId: job.trackId, title: job.title, goal: job.goal, lessonIds: ids })
}

// Build tracks.
const tracks = ['python', 'java'].map((tid) => ({
  id: tid, ...TRACK_META[tid],
  modules: moduleMeta.filter((m) => m.trackId === tid).sort((x, y) => Number(x.id.split('-m')[1]) - Number(y.id.split('-m')[1]))
    .map((m) => ({ id: m.id, title: m.title, goal: m.goal, lessonIds: m.lessonIds })),
}))

const file = `// Coding tracks (Python + Java). Auto-assembled by scripts/assemble-coding.mjs.
// Self-contained: index.js merges { tracks, lessons } into the registry.
const lessons = ${JSON.stringify(lessons, null, 2)}

const tracks = ${JSON.stringify(tracks, null, 2)}

const codingGlossary = ${JSON.stringify(glossary, null, 2)}

export default { tracks, lessons, codingGlossary }
`
writeFileSync(root + 'src/content/coding.js', file)

console.log(`Assembled ${Object.keys(lessons).length} coding lessons, ${Object.keys(glossary).length} glossary terms.`)
console.log('--- challenge/example validation ---')
validations.forEach((v) => console.log('  ' + v))
const fails = validations.filter((v) => /FAIL|ERROR|MISSING|no solution|missing/.test(v))
console.log(fails.length ? `\n${fails.length} ISSUES to review.` : '\nAll challenges verified against expected output.')
