// Applies enriched lessons (docs/research/enriched/<id>.json) back into the source content
// files, in each file's native format. Re-stamps authoritative id/trackId/moduleId/order/title
// from the CURRENT lesson, validates every overridden lesson, and only rewrites files that
// actually changed. Idempotent and reproducible — re-run any time the enriched JSONs change.
//
// Usage: node scripts/apply-enrichment.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { validateLesson } from '../src/lib/schema.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const enrichedDir = root + 'docs/research/enriched/'

// Load enriched lessons by id.
const enriched = {}
for (const f of (existsSync(enrichedDir) ? readdirSync(enrichedDir) : [])) {
  if (f.endsWith('.json')) enriched[f.replace('.json', '')] = JSON.parse(readFileSync(enrichedDir + f, 'utf8'))
}
if (!Object.keys(enriched).length) { console.log('No enriched lessons found.'); process.exit(0) }

const sourceFile = (l) => {
  if (l.trackId === 'engineering') return `src/content/engineering/${l.moduleId.replace(/^eng-/, '')}.js`
  if (l.trackId === 'product') return `src/content/product/${l.moduleId.replace(/^prod-/, '')}.js`
  if (l.trackId === 'python' || l.trackId === 'java') return 'src/content/coding.js'
  if (l.trackId === 'cloud') return 'src/content/cloud.js'
  throw new Error(`unknown track ${l.trackId} for ${l.id}`)
}

// Group enriched ids by their source file (using the CURRENT lesson for routing + restamp).
const { lessons: current, glossary } = await import(pathToFileURL(root + 'src/content/index.js').href)
const byFile = {}
const problems = []
for (const id of Object.keys(enriched)) {
  const cur = current[id]
  if (!cur) { problems.push(`${id}: no current lesson (unknown id)`); continue }
  const file = sourceFile(cur)
  // Re-stamp authoritative fields so enrichment can't change identity/order/title.
  const merged = { ...enriched[id], id: cur.id, trackId: cur.trackId, moduleId: cur.moduleId, order: cur.order, title: cur.title }
  delete merged.diagram // diagrams live in the overlay (diagrams.js); don't bake stale ones in
  // Guard: keep only glossaryTerms that actually exist in the merged glossary (enrichment
  // sometimes references undefined terms — those concepts still live inline via keyTerms).
  if (merged.glossaryTerms) merged.glossaryTerms = merged.glossaryTerms.filter((t) => glossary[t])
  const issues = validateLesson(merged)
  if (issues.length) { problems.push(`${id}: ${issues.join(' | ')}`); continue }
  ;(byFile[file] ||= []).push([id, merged])
}
if (problems.length) { console.log('VALIDATION ISSUES:\n  ' + problems.join('\n  ')); process.exit(1) }

const leadComments = (raw, stopRe) => raw.slice(0, raw.search(stopRe)).trimEnd()

let changed = 0
for (const [file, entries] of Object.entries(byFile)) {
  const abs = root + file
  const raw = readFileSync(abs, 'utf8')
  const mod = (await import(pathToFileURL(abs).href + '?t=' + entries.length)).default

  if (file.includes('/engineering/') || file.includes('/product/')) {
    // lessonMap default export: { "<id>": {...}, ... }
    const map = { ...mod }
    for (const [id, lesson] of entries) map[id] = lesson
    const header = leadComments(raw, /export default/)
    writeFileSync(abs, `${header}\nexport default ${JSON.stringify(map, null, 2)}\n`)
  } else {
    // coding.js / cloud.js: { tracks, lessons, <xGlossary> }
    const glossaryKey = Object.keys(mod).find((k) => k !== 'tracks' && k !== 'lessons')
    const lessons = { ...mod.lessons }
    for (const [id, lesson] of entries) lessons[id] = lesson
    const header = leadComments(raw, /const lessons/)
    writeFileSync(
      abs,
      `${header}\nconst lessons = ${JSON.stringify(lessons, null, 2)}\n\n` +
        `const tracks = ${JSON.stringify(mod.tracks, null, 2)}\n\n` +
        `const ${glossaryKey} = ${JSON.stringify(mod[glossaryKey] || {}, null, 2)}\n\n` +
        `export default { tracks, lessons, ${glossaryKey} }\n`,
    )
  }
  changed += entries.length
  console.log(`  ${file}: ${entries.length} lesson(s) enriched`)
}
console.log(`\nApplied ${changed} enriched lessons across ${Object.keys(byFile).length} files. All valid ✓`)
