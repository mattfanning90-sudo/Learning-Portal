# AGENTS.md — Atlas

Context for any AI coding agent (or human) working in this repo. Read this first.

## What Atlas is

A **static, no-backend React learning portal** that takes a *smart but non-technical*
learner to confidence as both a **great AI engineer** and a **Silicon-Valley-style
Product Owner/Manager**. Every lesson is plain-English with a metaphor, a real case study,
and an assessment. The portal has **4 tracks / ~107 lessons**: AI Engineering (40),
Product Leadership (34), Python (25), Java (8).

The core idea: **content is data, not markup.** Each lesson is a plain object; one
renderer (`LessonPage`) turns it into the page. Adding content = adding data.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173 (Vite + HMR)
npm run build    # static bundle in ./dist
npm run preview  # serve the production build (use this to verify, not the dev server — see Gotchas)
npm test         # vitest: unit + content-validation + render smoke (must stay green)
```

No accounts, no server. Progress/notes/quiz/challenge results persist in `localStorage`.

## Architecture

- **React 18 + Vite**, `react-router-dom` **HashRouter** (deploys as static files; deep links don't 404).
- **`src/main.jsx`** mounts `<App/>`; **`src/App.jsx`** defines routes: `/` Dashboard,
  `/track/:trackId`, `/lesson/:lessonId`, `/glossary`.
- **State**: `src/lib/useProgress.js` — a `store` over namespaced `localStorage`
  (`atlas:v1:*`: completed, notes, quiz, challenge, resume, settings) + a `useProgress()`
  hook (re-renders on change via `useSyncExternalStore`).
- **Curriculum**: `src/lib/curriculum.js` `buildCurriculum({tracks,lessons,braided})` →
  lookups, progress math, `nextLesson`/`prevLesson`, `moduleQuiz()`. `src/lib/atlas.js`
  is the assembled singleton wired to the real content.
- **Design**: `src/index.css` holds the **Lumen** token system (`oklch` palette,
  DM Serif Display + DM Sans, layered shadows, radii). Track accents: `--accent`
  (engineering), `--blue` (product), `--py` (python), `--java` (java).

## The lesson data model

A lesson is a plain object. Required: `id, trackId, moduleId, order, title, coreIdea,
plainEnglish[], metaphor{title,body[]}, caseStudy{title,body[],bridge}, takeaways[]`, **and
an assessment**: either `knowledgeCheck[]` (AI tracks) **or** `challenge{}` (coding tracks).

Optional/contextual:
- `deepSections[{title, teaser, body[]}]` — collapsible "go deeper" sections.
- `keyTerms[{term, def}]` — rendered one-term-per-line (use this instead of cramming
  definitions into prose).
- `pmAngle{body[]}` — the 👔 "why this matters to a PM" box (AI lessons).
- `codeExamples[{language, caption, source, runnable}]` — the 🧪 "Try it" runner (coding).
- `challenge{language, prompt, starter, expectedOutput, check, hint}` — the ✦ blank-terminal
  assessment: learner writes code, it runs, and output is auto-marked against `expectedOutput`.
- `glossaryTerms[]` (ids), `sources[{label,url}]`, `estMinutes`.

`src/lib/schema.js` `validateLesson(lesson)` is the single source of truth; the test suite
fails on any invalid lesson or undefined glossary term.

## How content is organized & authored

- **Registry**: `src/content/index.js` exposes `tracks`, `lessons`, `braided`, and a merged
  `glossary`. AI modules are registered there; **coding tracks live in `src/content/coding.js`**
  (self-contained `{tracks, lessons, codingGlossary}`) which `index.js` merges in.
- **Files**: `src/content/engineering/m1..m7.js`, `src/content/product/m1..m6.js`,
  `src/content/coding.js`, `src/content/glossary.js`.
- **Authoring pipeline** (how the curricula were built — reuse it to add more):
  1. `scripts/build-jobs.mjs` / `scripts/build-coding-jobs.mjs` — turn an outline/research into
     per-module **briefs** under `docs/research/{jobs,coding-jobs}/`.
  2. A **Workflow** (`Workflow` tool) fans out one agent per module to author lessons from the
     brief, copying a finished **seed lesson as the style exemplar**.
  3. `scripts/assemble-content.mjs` / `scripts/assemble-coding.mjs` — re-stamp authoritative
     fields, merge seeds, write the content files + glossary. The coding assembler also
     **runs every challenge's reference solution on Wandbox** to prove it produces
     `expectedOutput`, then strips solutions from the shipped bundle.
- `braided` = the interleaved AI⇄Product order the Dashboard recommends. Coding lessons are
  intentionally **not** braided (browse those tracks directly).

## The code runner

Runnable code + challenges execute via the **public Wandbox API**
(`https://wandbox.org/api/compile.json`) — free, CORS-open, no key, no backend.
(We originally targeted Piston; its public API went whitelist-only Feb 2026.)
- `src/lib/runCode.js` `runCode(language, source)` → `{ok, stdout, stderr, output}`.
  Maps `python`→`cpython-3.12.7`, `java`→`openjdk-jdk-21+35`. **Java `public class` is stripped
  to `class` for execution only** (Wandbox compiles to `prog.java`); the learner's code is untouched.
- `src/lib/checkChallenge.js` normalizes + compares output to the target.
- `src/lib/diagnoseAttempt.js` turns a wrong attempt into a friendly hint (error type, empty
  output, capitalisation, wrong line count). Pure + tested.

## Conventions

- **Writing style** (this is the bar — copy the seed lessons): short, one-idea sentences;
  introduce each new term on its own line via `keyTerms`; use `` `backticks` `` for code in
  prose (rendered as inline code via the `Inline` helper); always a concrete metaphor and a
  real, named case study; no unexplained jargon (every `glossaryTerms` id must be defined).
- **Design**: reuse Lumen tokens; don't hard-code hex — use the `oklch` CSS variables. Match
  the editorial look (serif headlines, terracotta accent, the dark hero/quiz cards).
- **Components are small and single-purpose** under `src/components/` (+ `src/components/lesson/`).

## Testing

`npm test` (vitest) must stay green. Layers:
- Pure logic (TDD): `schema`, `useProgress`, `curriculum`, `checkChallenge`, `diagnoseAttempt`,
  `runCode` (mocked `fetch`).
- `src/content/content.test.js` — validates every lesson, "no unexplained jargon", braided-once.
- `src/smoke.test.jsx` — client-renders all routes (jsdom + `createRoot`).
- **Real-browser checks**: drive system Chrome headlessly with `puppeteer-core`
  (`npm install puppeteer-core --no-save`, executablePath
  `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`) against `npm run preview`.
  This is how the Wandbox runner and challenges were verified end-to-end.

## Gotchas (these cost real time — read them)

- **Dev-server staleness**: restarting `npm run dev`, or regenerating a big content file,
  strands the open browser tab (HMR socket drops / half-applied module graph). It *looks*
  broken but isn't. Fix: **hard-refresh (Cmd+Shift+R)**, or verify against `npm run preview`
  (production build, no HMR). Don't restart the dev server out of habit — HMR updates live.
- **Wandbox transient errors**: occasional `OCI runtime error: ... Resource temporarily
  unavailable` — infra flakiness, not a code bug. Re-run before treating it as a failure.
- **Workflow `args`**: pass arrays/objects as real JSON values, not a stringified JSON string
  (guard with `typeof args === 'string' ? JSON.parse(args) : args`).

## File map

```
src/
  App.jsx  main.jsx  index.css            # shell, router, Lumen tokens
  lib/    schema, useProgress, curriculum, atlas, runCode, checkChallenge, diagnoseAttempt
  content/ index.js (registry) · engineering/* · product/* · coding.js · glossary.js
  components/ Header, Dashboard, TrackPage, ModuleCard, ModuleQuiz, Glossary, CourseGuide,
              ProgressRing, StatusBadge · lesson/{LessonPage, CollapsibleSection(Body,Inline),
              Boxes(KeyTerms,…), KnowledgeCheck, CodeRunner, CodeChallenge, NotesPanel}
scripts/  build-jobs · assemble-content · build-coding-jobs · assemble-coding
docs/     superpowers/{specs,plans} · research/ · product/atlas-product-brief.md
```
