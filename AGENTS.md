# AGENTS.md — Atlas

Context for any AI coding agent (or human) working in this repo. Read this first.

## What Atlas is

A **React learning portal** that takes a *smart but non-technical* learner to confidence
across the modern software stack — **AI engineering, Silicon-Valley-style product leadership,
coding, and cloud/cost**. Every lesson is plain-English with a metaphor, a real case study,
and an assessment. The portal has **5 tracks / 150 lessons**: AI Engineering (40),
Product Leadership (34), Python (25), Java (8), Cloud/AWS/FinOps (43).

The core idea: **content is data, not markup.** Each lesson is a plain object; one renderer
(`LessonPage`) turns it into the page. Adding content = adding data.

It runs fully static (progress in `localStorage`), with an **optional** small API for account
sign-in + cross-device progress sync (see *Auth & progress sync*). Signed-out users lose nothing.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173 (Vite + HMR)
npm run build    # static bundle in ./dist (chunked: app/vendor/clerk/content)
npm run preview  # serve the production build (verify with this, not the dev server — see Gotchas)
npm start        # production server: server/index.js serves ./dist + the /api routes
npm test         # vitest: unit + content-validation + render smoke (must stay green)
npm run lint     # eslint (flat config) — 0 errors required
npm run typecheck# tsc checkJs over the pure logic layer (jsconfig.json)
npm run format   # prettier
```

Progress/notes/quiz/challenge results persist in `localStorage`; with the optional API
configured they also sync to Postgres on sign-in.

## Architecture

- **React 18 + Vite**, `react-router-dom` **HashRouter** (deploys as static files; deep links don't 404).
- **`src/main.jsx`** mounts `<App/>` (wrapped in `ClerkProvider` only if a Clerk key is set);
  **`src/App.jsx`** defines routes: `/` Dashboard, `/track/:trackId`, `/lesson/:lessonId`,
  `/glossary`, and mounts `<ProgressSync/>` when Clerk is enabled.
- **State**: `src/lib/useProgress.js` — a `store` over namespaced `localStorage`
  (`atlas:v1:*`: completed, notes, quiz, challenge, resume, settings) + a `useProgress()` hook
  (re-renders via `useSyncExternalStore`). `store.exportAll()/importAll()` back the sync.
- **Curriculum**: `src/lib/curriculum.js` `buildCurriculum({tracks,lessons,braided})` → lookups,
  progress math, `nextLesson`/`prevLesson`, `moduleQuiz()`. `src/lib/atlas.js` is the assembled
  singleton; it also exports `accentOf(track)` (a track's accent CSS var, with a default).
- **Design**: `src/index.css` holds the **Lumen** token system (`oklch` palette, DM Serif
  Display + DM Sans, layered shadows, radii). Track accents: `--accent` (engineering), `--blue`
  (product), `--py` (python), `--java` (java), `--cloud` (cloud/aws/finops). Read via `accentOf`.

## The lesson data model

A lesson is a plain object. Required: `id, trackId, moduleId, order, title, coreIdea,
plainEnglish[], metaphor{title,body[]}, caseStudy{title,body[],bridge}, takeaways[]`, **and an
assessment**: either `knowledgeCheck[]` (concept tracks) **or** `challenge{}` (coding tracks).

Optional/contextual:
- `deepSections[{title, teaser, body[]}]` — collapsible "go deeper" sections.
- `keyTerms[{term, def}]` — rendered one-term-per-line (use this instead of cramming
  definitions into prose; define every term before it's used).
- `pmAngle{body[]}` — the 👔 "why this matters to a PM / who pays" box.
- `diagram{title, direction, steps[{note, nodes[{id,label,sub?,icon?,accent?}]}]}` — an
  animated, progressive build-up diagram (boxes + drawn connectors), rendered by `Diagram.jsx`.
  One step = static; many = step-through (Play / scrubber / arrow-keys, reduced-motion-aware).
  Attached by lesson id via the `src/content/diagrams.js` **overlay**, so it works for
  auto-assembled tracks too.
- `codeExamples[{language, caption, source, runnable}]` — the 🧪 "Try it" runner (coding).
- `challenge{language, prompt, starter, expectedOutput, check, hint}` — the ✦ blank-terminal
  assessment: learner writes code, it runs, output is auto-marked against `expectedOutput`.
- `glossaryTerms[]` (ids — must exist in the merged glossary), `sources[{label,url}]`, `estMinutes`.

`src/lib/schema.js` `validateLesson(lesson)` is the single source of truth; the test suite fails
on any invalid lesson, undefined glossary term, or malformed diagram.

## How content is organized & authored

- **Registry**: `src/content/index.js` exposes `tracks`, `lessons`, `braided`, and a merged
  `glossary`. AI/Product modules register there; the **coding** (`coding.js`) and
  **Cloud/AWS/FinOps** (`cloud.js`) tracks are self-contained `{tracks, lessons, *Glossary}`
  modules merged in via a `mergeTrack()` helper. `diagrams.js` is an overlay attaching `diagram`
  fields by lesson id.
- **Files**: `src/content/engineering/m1..m7.js`, `product/m1..m6.js`, `coding.js`, `cloud.js`,
  `diagrams.js`, `glossary.js`.
- **`braided`** = the global order "Mark complete → next" follows. AI⇄Product are interleaved;
  coding then cloud are appended (each advancing within itself) so completion never dead-ends.
  The content test asserts every lesson appears in `braided` **exactly once**.
- **Authoring pipeline** (how the curricula were built — reuse it to add more):
  1. Briefs/outline → per-lesson or per-module jobs under `docs/research/{jobs,coding-jobs,cloud-jobs}/`.
  2. A **Workflow** (`Workflow` tool) fans out **one agent per lesson/module**, each writing a
     schema-validated job file and self-checking it against `validateLesson` (copy a finished
     **seed lesson as the style exemplar**).
  3. A deterministic assembler (`scripts/assemble-{content,coding,cloud}.mjs`) re-stamps
     authoritative fields, validates every lesson, and writes the content file + glossary. The
     coding assembler also **runs each challenge's reference solution on Wandbox** to prove it
     produces `expectedOutput`, then strips solutions from the shipped bundle.
- **Comprehension-audit pattern** (used to harden existing content): fan out read-only "cold
  reader" agents (one slice each) that flag *genuine* gaps with concrete fixes; then fan out
  fill agents on **disjoint files**; then `npm test` + prod-preview. Define every term before use.

## The code runner

Runnable code + challenges execute via the **public Wandbox API**
(`https://wandbox.org/api/compile.json`) — free, CORS-open, no key, no backend.
- `src/lib/runCode.js` `runCode(language, source)` → `{ok, stdout, stderr, output}`. Maps
  `python`→`cpython-3.12.7`, `java`→`openjdk-jdk-21+35`. **Java `public class` is stripped to
  `class` for execution only**; the learner's code is untouched.
- `src/lib/checkChallenge.js` normalizes + compares output; `src/lib/diagnoseAttempt.js` turns a
  wrong attempt into a friendly hint. Pure + tested.

## Auth & progress sync (optional)

Off by default; the app is fully usable signed-out. When configured:
- **Frontend**: `@clerk/clerk-react`. `main.jsx` wraps the tree in `ClerkProvider` **only if**
  `VITE_CLERK_PUBLISHABLE_KEY` is set; `AuthControls` renders Sign-in / `UserButton`;
  `ProgressSync` (mounted only when Clerk is enabled) pulls server progress on sign-in, merges
  with local (`src/lib/mergeProgress.js` — union, newest-wins), writes back, then
  debounced-pushes on change. `src/lib/sync.js` calls the API with a Clerk Bearer token.
- **Backend**: `server/` — Express 5 serves `./dist` + a JSON API. `@clerk/express`
  `clerkMiddleware()` authenticates; `GET/PUT /api/progress` read/write a `user_progress` JSONB
  row in **Railway Postgres** (`server/db.js`, `server/progress.js`). SPA fallback uses a final
  `app.use` (not `app.get('*')` — Express 5).
- **Env**: `VITE_CLERK_PUBLISHABLE_KEY` (frontend + build); `CLERK_PUBLISHABLE_KEY` **and**
  `CLERK_SECRET_KEY` (backend); `DATABASE_URL`; `CORS_ORIGINS`; `VITE_API_URL` (frontend → API
  base, empty = same-origin). `.env.example` documents them. Tests force the key empty
  (`vite.config.js` `test.env`) so the smoke test exercises the signed-out path.
- The deployed instance currently uses Clerk **dev** keys (email sign-in; "Development mode"
  badge). Promoting to a production instance is on the backlog.

## Deployment

Two hosts, both deploy from the working tree (independent of git):
- **Netlify** (static frontend, `learningatlas.netlify.app`): `netlify deploy --prod --build`.
- **Railway** (`atlas-portal` service, full-stack): `railway up --service atlas-portal --detach`;
  start = `node server/index.js`. Env vars live on the service.
- `vite.config.js` `manualChunks` splits `vendor` / `clerk` / `content` from app code for caching.
- **Verify-before-claim playbook** (this is the standard ship loop): `npm test` green →
  `npm run build` → headless prod-preview check → commit on a branch → merge to `main` → push →
  redeploy both → confirm Netlify bundle has the change + Railway `/api/health` 200 + `/api/progress`
  401 (auth wired). Don't claim "done"/"live" without the evidence.

## Conventions

- **Writing style** (the bar — copy the seed lessons): short, one-idea sentences; each new term
  on its own line via `keyTerms`; `` `backticks` `` for code in prose (rendered via `Inline`);
  always a concrete metaphor and a real, named case study; no unexplained jargon.
- **Design**: reuse Lumen `oklch` tokens, never hard-code hex; theme to the track via
  `accentOf(track)`. Match the editorial look (serif headlines, the dark hero/quiz/diagram cards).
- **Motion**: animate process/causality only; respect `prefers-reduced-motion`. No decorative motion.
- **Components are small and single-purpose** under `src/components/` (+ `src/components/lesson/`).

## Testing

`npm test` (vitest) must stay green. Layers:
- Pure logic (TDD): `schema`, `useProgress`, `curriculum`, `checkChallenge`, `diagnoseAttempt`,
  `runCode` (mocked `fetch`), `mergeProgress`, `server/progress`.
- `src/content/content.test.js` — validates every lesson, "no unexplained jargon", braided-once,
  diagram overlay integrity.
- `src/smoke.test.jsx` — client-renders all routes (jsdom + `createRoot`), Clerk disabled.
- **Real-browser checks**: drive system Chrome headlessly with `puppeteer-core`
  (`npm install puppeteer-core --no-save`, executablePath
  `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`) against `npm run preview`.
  This is how the Wandbox runner, the diagram animation, and deploys were verified end-to-end.

## Quality gates & CI

GitHub Actions (`.github/workflows/ci.yml`) runs **lint → typecheck → test → build** on every
push/PR — keep all green. Other guardrails in place:
- **ESLint** (flat config) + **Prettier**; **JSDoc + `checkJs`** (`jsconfig.json`, types in `src/lib/types.js`).
- **`<ErrorBoundary>`** (top-level, in `main.jsx`) shows a fallback instead of white-screening on a render error.
- **Server hardening**: `helmet` headers + `express-rate-limit` on `/api` + a final JSON error handler.
- **Route code-splitting** (`React.lazy` + Suspense in `App.jsx`).
- **Accessibility**: WCAG-AA (axe-clean) — contrast tokens, `:focus-visible`, skip-link, `<main>` landmark, ARIA.
- **Optional observability**: env-gated Sentry + PostHog (`src/lib/observability.js`), off unless configured —
  turn on via `docs/CHECKLIST-production.md`.

## Gotchas (these cost real time — read them)

- **Clerk needs the publishable key on the *backend* too**: `@clerk/express` reads
  `CLERK_PUBLISHABLE_KEY` (NOT the `VITE_`-prefixed name) alongside `CLERK_SECRET_KEY`. Missing it
  → `clerkMiddleware` throws on **every** request, so even `/api/health` returns a 500 (looks like
  a deploy/edge error, not config). Set both on Railway.
- **Dev-server staleness**: restarting `npm run dev`, or regenerating a big content file, strands
  the open tab (HMR socket drops). It *looks* broken but isn't. Hard-refresh (Cmd+Shift+R) or
  verify against `npm run preview`. Don't restart the dev server out of habit.
- **Wandbox transient errors**: occasional `OCI runtime error: ... Resource temporarily
  unavailable` — infra flakiness, not a code bug. Re-run before treating it as a failure.
- **Workflow `args`**: pass arrays/objects as real JSON, not a stringified JSON string
  (guard with `typeof args === 'string' ? JSON.parse(args) : args`).
- **iCloud conflict copies**: this repo lives in iCloud, which sometimes spawns `"<name> 2.ext"`
  duplicates. They're cruft — don't commit them; remove with `find . -name "* 2.*" -delete`.

## File map

```
src/
  App.jsx  main.jsx  index.css            # shell, router, Lumen tokens + keyframes
  lib/    schema, useProgress, curriculum, atlas(+accentOf), runCode, checkChallenge,
          diagnoseAttempt, mergeProgress, sync
  content/ index.js (registry, mergeTrack) · engineering/* · product/* · coding.js · cloud.js
           · diagrams.js (overlay) · glossary.js
  components/ Header, Dashboard, TrackPage, ModuleCard, ModuleQuiz, Glossary, CourseGuide,
              ProgressRing, StatusBadge, AuthControls, ProgressSync · lesson/{LessonPage,
              CollapsibleSection(Body,Inline), Boxes(KeyTerms,…), Diagram, KnowledgeCheck,
              CodeRunner, CodeChallenge, NotesPanel}
server/   index.js (Express: dist + API) · auth.js (Clerk) · db.js (pg) · progress.js
scripts/  build-jobs · assemble-content · build-coding-jobs · assemble-coding · assemble-cloud
docs/     superpowers/{specs,plans} · research/ · product/{atlas-product-brief.md, backlog.md}
```
