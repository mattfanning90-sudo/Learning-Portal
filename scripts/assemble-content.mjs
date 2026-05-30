// Consumes the authoring-workflow output and writes the real content tree:
//   src/content/<track>/<mN>.js   (one file per module, lessons keyed by id)
//   src/content/glossary.js       (merged: seed terms + every authored term)
//   src/content/index.js          (registers all modules + braided order)
//
// Re-stamps each lesson's id/trackId/moduleId/order/title from the canonical
// brief so the registry is correct even if an agent drifted. Merges the two
// seed lessons (eng-m1-l1, prod-m1-l1) that were authored in Phase A.
//
// Usage: node scripts/assemble-content.mjs <path-to-workflow-output.json>
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const outPath = process.argv[2]
if (!outPath) { console.error('Usage: node scripts/assemble-content.mjs <workflow-output.json>'); process.exit(1) }

const raw = JSON.parse(readFileSync(outPath, 'utf8'))
const data = raw.result || raw
const moduleResults = data.modules || []
const jobIndex = JSON.parse(readFileSync(root + 'docs/research/jobs/_index.json', 'utf8'))
const byId = Object.fromEntries(moduleResults.map((m) => [m.moduleId || m._id, m]))

const trackDir = (trackId) => (trackId === 'engineering' ? 'engineering' : 'product')
const fileFor = (id) => `src/content/${trackDir(id.startsWith('eng') ? 'engineering' : 'product')}/${id.split('-')[1]}.js`

const SEED = { 'eng-m1': 'eng-m1-l1', 'prod-m1': 'prod-m1-l1' }
const glossary = structuredClone((await import(pathToFileURL(root + 'src/content/glossary.js').href)).default)
const problems = []
const moduleMeta = []

for (const job of jobIndex) {
  const brief = JSON.parse(readFileSync(root + job.file, 'utf8'))
  const res = byId[job.id]
  if (!res) { problems.push(`${job.id}: MISSING from workflow output`); continue }
  const authored = res.lessons || []
  if (authored.length !== brief.lessons.length) {
    problems.push(`${job.id}: got ${authored.length} lessons, expected ${brief.lessons.length}`)
  }

  // Re-stamp canonical fields from the brief (match by index/order).
  const lessonMap = {}
  // Merge seed lesson (already authored in Phase A) for the two seed modules.
  if (SEED[job.id]) {
    const seedMod = await import(pathToFileURL(root + fileFor(job.id)).href)
    const seedLesson = seedMod.default[SEED[job.id]]
    if (seedLesson) lessonMap[SEED[job.id]] = seedLesson
  }
  brief.lessons.forEach((seed, i) => {
    const a = authored[i]
    if (!a) return
    lessonMap[seed.id] = {
      ...a,
      id: seed.id, trackId: seed.trackId, moduleId: seed.moduleId,
      order: seed.order, title: seed.title, estMinutes: a.estMinutes || seed.estMinutes || 9,
    }
  })

  // Order lessons by .order for stable lessonIds.
  const ordered = Object.values(lessonMap).sort((x, y) => x.order - y.order)
  const orderedMap = Object.fromEntries(ordered.map((l) => [l.id, l]))

  writeFileSync(root + fileFor(job.id), `// ${job.title}\n// Auto-assembled from authoring workflow. Edit content via the briefs + re-run.\nexport default ${JSON.stringify(orderedMap, null, 2)}\n`)

  // Collect glossary entries.
  for (const g of res.glossary || []) {
    if (g.id && !glossary[g.id]) glossary[g.id] = { term: g.term, plain: g.plain, seeAlso: [] }
  }

  moduleMeta.push({ id: job.id, trackId: job.trackId, title: job.title, goal: job.goal, lessonIds: ordered.map((l) => l.id) })
}

// Backfill glossary seeAlso from lessons that reference each term.
const allLessons = {}
for (const meta of moduleMeta) {
  const mod = await import(pathToFileURL(root + fileFor(meta.id)).href + `?t=${Date.now()}`)
  Object.assign(allLessons, mod.default)
}
for (const [lid, l] of Object.entries(allLessons)) {
  for (const term of l.glossaryTerms || []) {
    if (glossary[term] && !glossary[term].seeAlso.includes(lid)) glossary[term].seeAlso.push(lid)
  }
}
writeFileSync(root + 'src/content/glossary.js', `// Plain-English glossary. termId -> { term, plain, seeAlso: [lessonId] }.\nexport default ${JSON.stringify(glossary, null, 2)}\n`)

// Generate index.js: import every module, register in order, build braided path.
const ENG = moduleMeta.filter((m) => m.trackId === 'engineering').sort(byNum)
const PROD = moduleMeta.filter((m) => m.trackId === 'product').sort(byNum)
function byNum(a, b) { return Number(a.id.split('-m')[1]) - Number(b.id.split('-m')[1]) }

// Braided: interleave eng/prod module by module, eng-m7 appended at the end.
const braid = []
const maxLen = Math.max(ENG.length, PROD.length)
for (let i = 0; i < maxLen; i++) {
  if (ENG[i] && i < 6) braid.push(...ENG[i].lessonIds)
  if (PROD[i]) braid.push(...PROD[i].lessonIds)
}
if (ENG[6]) braid.push(...ENG[6].lessonIds)

const imp = (m) => `import ${camel(m.id)} from './${trackDir(m.trackId)}/${m.id.split('-')[1]}.js'`
const reg = (m) => `registerModule({ trackId: '${m.trackId}', id: '${m.id}', title: ${JSON.stringify(m.title)}, goal: ${JSON.stringify(m.goal)}, lessonMap: ${camel(m.id)} })`
function camel(id) { return id.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()) }

const indexSrc = `// The content registry (auto-assembled). Tracks -> modules -> lessons + braided order.
export const tracks = [
  { id: 'engineering', title: 'AI Engineering', tagline: "From 'how does this thing actually work?' to 'I can design, ship, and govern AI products people trust.'", accent: 'accent', modules: [] },
  { id: 'product', title: 'Product Leadership', tagline: 'Think like a Silicon Valley product leader — and speak engineering fluently enough to lead the people who build.', accent: 'blue', modules: [] },
]
export const lessons = {}
export const braided = []
const trackById = (id) => tracks.find((t) => t.id === id)
export function registerModule({ trackId, id, title, goal, lessonMap }) {
  Object.assign(lessons, lessonMap)
  trackById(trackId).modules.push({ id, title, goal, lessonIds: Object.keys(lessonMap) })
}

${[...ENG, ...PROD].map(imp).join('\n')}

${ENG.map(reg).join('\n')}
${PROD.map(reg).join('\n')}

braided.push(${braid.map((x) => `'${x}'`).join(', ')})
`
writeFileSync(root + 'src/content/index.js', indexSrc)

console.log(`Assembled ${moduleMeta.length} modules, ${Object.values(allLessons).length} lessons, ${Object.keys(glossary).length} glossary terms.`)
if (problems.length) { console.log('PROBLEMS:'); problems.forEach((p) => console.log('  - ' + p)) }
else console.log('No structural problems.')
