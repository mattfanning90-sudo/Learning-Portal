# Atlas Learning Portal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Atlas — a static React learning portal that teaches a non-technical learner to be a great AI engineer and Silicon-Valley-style product leader, across two braided tracks of fully-written, metaphor-driven lessons.

**Architecture:** React 18 + Vite, no backend. Content is data (one object per lesson, the 8-part format as fields) rendered by a single `LessonPage`. State (progress, notes, quiz results) persists in `localStorage` via a `useProgress` hook. `react-router-dom` HashRouter for Dashboard / Track / Lesson / Glossary. Reuses the existing "Lumen" design system (`oklch` tokens, DM Serif Display + DM Sans, layered shadows).

**Tech Stack:** React 18, Vite 5, react-router-dom 6, vitest + jsdom (unit tests for pure logic), DM Serif Display / DM Sans (Google Fonts).

**Testing philosophy:** TDD for the pure logic that holds the app together — the persistence hook, curriculum assembly, and the lesson-schema validator (these are where bugs hide and regressions bite). UI components and lesson content are verified by running the app and observing (the `verify`/`run` skills), since their correctness is visual, not assertable. The schema validator is the safety net for mass content authoring.

**Content source:** `docs/research/atlas-curriculum-research.json` — every lesson's metaphor, case study, PM angle, deep-section titles, and primary sources. Spec: `docs/superpowers/specs/2026-05-30-atlas-learning-portal-design.md`.

---

## Phase A — App skeleton & the rendering contract

### Task 1: Initialize the project

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css` (stub)

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "atlas-learning-portal",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^5.4.11",
    "vitest": "^2.1.8",
    "jsdom": "^25.0.1"
  }
}
```

- [ ] **Step 2: Write `vite.config.js`** (with vitest jsdom env)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { environment: 'jsdom', globals: true },
})
```

- [ ] **Step 3: Write `index.html`** (fonts preloaded, per the Lumen scaffold)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Atlas — AI Engineering & Product Leadership</title>
    <meta name="description" content="A plain-English portal to become a great AI engineer and product leader." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Write `src/main.jsx`**

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
```

- [ ] **Step 5: Write a placeholder `src/App.jsx` and empty `src/index.css`**

```jsx
export default function App() {
  return <div style={{ padding: 40, fontFamily: 'system-ui' }}>Atlas — booting…</div>
}
```

- [ ] **Step 6: Install and verify dev server**

Run: `npm install && npm run dev`
Expected: Vite serves on http://localhost:5173 showing "Atlas — booting…".

- [ ] **Step 7: Commit**

```bash
git add package.json vite.config.js index.html src/
git commit -m "chore: scaffold Atlas Vite + React + Router app"
```

---

### Task 2: Port and extend the Lumen design tokens

**Files:**
- Modify: `src/index.css` (replace stub)

- [ ] **Step 1: Write `src/index.css`** — the full Lumen token set plus Atlas extensions (tinted section colors for PM/case-study boxes). Source tokens from `../export/src/index.css` and `DESIGN.md`.

```css
*,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: oklch(0.99 0.004 85);
  --surface: oklch(1 0 0);
  --surface-raised: oklch(0.97 0.006 85);
  --border: oklch(0.90 0.008 85);
  --text-primary: oklch(0.18 0.02 250);
  --text-secondary: oklch(0.44 0.015 250);
  --text-muted: oklch(0.65 0.010 250);
  --accent: oklch(0.52 0.19 30);
  --accent-light: oklch(0.95 0.04 30);
  --accent-hover: oklch(0.44 0.19 30);
  --tag-bg: oklch(0.94 0.014 250);
  /* Atlas extensions */
  --green: oklch(0.46 0.13 155); --green-bg: oklch(0.95 0.03 155); --green-border: oklch(0.84 0.05 155);
  --blue: oklch(0.50 0.12 255); --blue-bg: oklch(0.96 0.025 255); --blue-border: oklch(0.86 0.04 255);
  --shadow-sm: 0 1px 4px oklch(0.18 0.02 250 / 0.06);
  --shadow-float: 0 8px 40px oklch(0.18 0.02 250 / 0.12), 0 2px 8px oklch(0.18 0.02 250 / 0.06);
  --radius-sm: 6px; --radius-md: 12px; --radius-lg: 16px; --radius-xl: 24px;
  --sidebar-w: 248px;
  --hero-grad: linear-gradient(135deg, oklch(0.18 0.04 250) 0%, oklch(0.24 0.05 260) 100%);
  font-family: 'DM Sans', system-ui, sans-serif; font-size: 16px;
  color: var(--text-primary); background: var(--bg);
}
body { background: var(--bg); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
html { scroll-behavior: smooth; }
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 99px; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@media (prefers-reduced-motion: reduce) {
  *,*::before,*::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
.serif { font-family: 'DM Serif Display', serif; font-weight: 400; }
```

- [ ] **Step 2: Commit**

```bash
git add src/index.css
git commit -m "feat: Atlas design tokens (Lumen system + tinted section colors)"
```

---

### Task 3: Lesson/curriculum data schema + validator (TDD)

**Files:**
- Create: `src/lib/schema.js`, `src/lib/schema.test.js`

- [ ] **Step 1: Write the failing test** (`src/lib/schema.test.js`)

```js
import { describe, it, expect } from 'vitest'
import { validateLesson } from './schema.js'

const valid = {
  id: 'eng-m1-l1', trackId: 'engineering', moduleId: 'eng-m1', order: 1,
  title: 'The Improv Actor', coreIdea: 'An LLM predicts the next token.',
  plainEnglish: ['It is a plausibility engine, not a truth engine.'],
  metaphor: { title: 'Think of it like…', body: ['A well-read improv actor.'] },
  deepSections: [{ title: 'The math without the math', teaser: 'rolling weighted dice', body: ['...'] }],
  pmAngle: { body: ['Fluent is not verified.'] },
  caseStudy: { title: 'ChatGPT launch', body: ['100M users in two months.'], bridge: 'Sounding right is the only goal.' },
  takeaways: ['Generation is solved; truth is not.'],
  knowledgeCheck: [{ q: 'What is it?', options: [{ text: 'A truth engine', correct: false }, { text: 'A plausibility engine', correct: true }], feedback: 'Plausibility, always.' }],
  glossaryTerms: ['token'], sources: [{ label: 'Karpathy', url: 'https://example.com' }], estMinutes: 8,
}

describe('validateLesson', () => {
  it('returns no problems for a valid lesson', () => {
    expect(validateLesson(valid)).toEqual([])
  })
  it('flags missing core fields', () => {
    const { metaphor, ...noMetaphor } = valid
    expect(validateLesson(noMetaphor)).toContain('missing metaphor')
  })
  it('requires at least one correct knowledge-check option', () => {
    const bad = { ...valid, knowledgeCheck: [{ q: 'x', options: [{ text: 'a', correct: false }], feedback: 'f' }] }
    expect(validateLesson(bad)).toContain('knowledgeCheck[0] has no correct option')
  })
})
```

- [ ] **Step 2: Run test, verify it fails**

Run: `npm test -- schema`
Expected: FAIL ("validateLesson is not a function").

- [ ] **Step 3: Implement `src/lib/schema.js`**

```js
// Returns an array of human-readable problems; empty array means valid.
export function validateLesson(L) {
  const p = []
  const need = ['id', 'trackId', 'moduleId', 'title', 'coreIdea']
  for (const k of need) if (!L?.[k]) p.push(`missing ${k}`)
  if (!Array.isArray(L?.plainEnglish) || L.plainEnglish.length === 0) p.push('missing plainEnglish')
  if (!L?.metaphor?.body?.length) p.push('missing metaphor')
  if (!L?.caseStudy?.body?.length) p.push('missing caseStudy')
  if (!Array.isArray(L?.takeaways) || L.takeaways.length === 0) p.push('missing takeaways')
  if (!Array.isArray(L?.knowledgeCheck) || L.knowledgeCheck.length === 0) p.push('missing knowledgeCheck')
  ;(L?.knowledgeCheck || []).forEach((q, i) => {
    if (!q.options?.some(o => o.correct)) p.push(`knowledgeCheck[${i}] has no correct option`)
  })
  return p
}
```

- [ ] **Step 4: Run test, verify pass**

Run: `npm test -- schema`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/schema.js src/lib/schema.test.js
git commit -m "feat: lesson schema validator (TDD)"
```

---

### Task 4: `useProgress` persistence hook (TDD)

**Files:**
- Create: `src/lib/useProgress.js`, `src/lib/useProgress.test.js`

- [ ] **Step 1: Write the failing test** — tests the storage functions (not the React hook) so they're pure and assertable.

```js
import { describe, it, expect, beforeEach } from 'vitest'
import { store } from './useProgress.js'

beforeEach(() => localStorage.clear())

describe('progress store', () => {
  it('toggles completion and reports it', () => {
    expect(store.isComplete('eng-m1-l1')).toBe(false)
    store.toggleComplete('eng-m1-l1')
    expect(store.isComplete('eng-m1-l1')).toBe(true)
    store.toggleComplete('eng-m1-l1')
    expect(store.isComplete('eng-m1-l1')).toBe(false)
  })
  it('saves and reads notes', () => {
    store.saveNote('eng-m1-l1', 'remember this')
    expect(store.getNote('eng-m1-l1')).toBe('remember this')
  })
  it('records the resume pointer', () => {
    store.setResume('prod-m2-l3')
    expect(store.getResume()).toBe('prod-m2-l3')
  })
  it('persists quiz results', () => {
    store.saveQuiz('eng-m1-l1', { correct: true })
    expect(store.getQuiz('eng-m1-l1')).toEqual({ correct: true })
  })
})
```

- [ ] **Step 2: Run test, verify fail**

Run: `npm test -- useProgress`
Expected: FAIL.

- [ ] **Step 3: Implement `src/lib/useProgress.js`** — a plain `store` object over namespaced localStorage, plus a thin `useProgress` React hook that re-renders on change.

```js
import { useSyncExternalStore } from 'react'

const K = (s) => `atlas:v1:${s}`
const read = (s, d) => { try { return JSON.parse(localStorage.getItem(K(s))) ?? d } catch { return d } }
const write = (s, v) => { localStorage.setItem(K(s), JSON.stringify(v)); emit() }

const listeners = new Set()
const emit = () => listeners.forEach((l) => l())
const subscribe = (l) => { listeners.add(l); return () => listeners.delete(l) }

export const store = {
  getCompleted: () => read('completed', {}),
  isComplete: (id) => !!read('completed', {})[id],
  toggleComplete(id) { const c = read('completed', {}); c[id] ? delete c[id] : (c[id] = Date.now()); write('completed', c) },
  setComplete(id, v) { const c = read('completed', {}); v ? (c[id] = Date.now()) : delete c[id]; write('completed', c) },
  getNote: (id) => read('notes', {})[id] || '',
  saveNote(id, text) { const n = read('notes', {}); text ? (n[id] = text) : delete n[id]; write('notes', n) },
  allNotes: () => read('notes', {}),
  getQuiz: (id) => read('quiz', {})[id] || null,
  saveQuiz(id, result) { const q = read('quiz', {}); q[id] = result; write('quiz', q) },
  getResume: () => read('resume', null),
  setResume(id) { write('resume', id) },
}

// React hook: returns the store and re-renders any component on any change.
export function useProgress() {
  useSyncExternalStore(subscribe, () => localStorage.getItem(K('completed')) + localStorage.getItem(K('notes')))
  return store
}
```

- [ ] **Step 4: Run test, verify pass**

Run: `npm test -- useProgress`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/useProgress.js src/lib/useProgress.test.js
git commit -m "feat: localStorage progress/notes/quiz store + hook (TDD)"
```

---

### Task 5: Curriculum assembly + braided order (TDD)

**Files:**
- Create: `src/lib/curriculum.js`, `src/lib/curriculum.test.js`, `src/content/index.js` (registry)

- [ ] **Step 1: Write the failing test** — uses a small injected fixture, not real content.

```js
import { describe, it, expect } from 'vitest'
import { buildCurriculum } from './curriculum.js'

const tracks = [{ id: 'engineering', title: 'AI Engineering', modules: [
  { id: 'eng-m1', title: 'M1', lessonIds: ['eng-m1-l1', 'eng-m1-l2'] },
]}]
const lessons = {
  'eng-m1-l1': { id: 'eng-m1-l1', trackId: 'engineering', moduleId: 'eng-m1', order: 1, title: 'A' },
  'eng-m1-l2': { id: 'eng-m1-l2', trackId: 'engineering', moduleId: 'eng-m1', order: 2, title: 'B' },
}
const braided = ['eng-m1-l1', 'eng-m1-l2']

describe('buildCurriculum', () => {
  const c = buildCurriculum({ tracks, lessons, braided })
  it('looks up a lesson by id', () => expect(c.getLesson('eng-m1-l2').title).toBe('B'))
  it('finds the next lesson in braided order', () => expect(c.nextLesson('eng-m1-l1').id).toBe('eng-m1-l2'))
  it('returns null after the last lesson', () => expect(c.nextLesson('eng-m1-l2')).toBe(null))
  it('computes module progress from a completed-set', () => {
    expect(c.moduleProgress('eng-m1', { 'eng-m1-l1': 1 })).toBe(50)
  })
})
```

- [ ] **Step 2: Run test, verify fail.** Run: `npm test -- curriculum` → FAIL.

- [ ] **Step 3: Implement `src/lib/curriculum.js`**

```js
export function buildCurriculum({ tracks, lessons, braided }) {
  const lessonById = (id) => lessons[id] || null
  const allModules = tracks.flatMap(t => t.modules.map(m => ({ ...m, trackId: t.id })))
  const moduleById = (id) => allModules.find(m => m.id === id) || null
  return {
    tracks,
    getLesson: lessonById,
    getModule: moduleById,
    getTrack: (id) => tracks.find(t => t.id === id) || null,
    braided,
    nextLesson(id) { const i = braided.indexOf(id); return i >= 0 && i < braided.length - 1 ? lessonById(braided[i + 1]) : null },
    moduleProgress(moduleId, completed) {
      const m = moduleById(moduleId); if (!m?.lessonIds.length) return 0
      const done = m.lessonIds.filter(lid => completed[lid]).length
      return Math.round((done / m.lessonIds.length) * 100)
    },
    trackProgress(trackId, completed) {
      const ids = tracks.find(t => t.id === trackId)?.modules.flatMap(m => m.lessonIds) || []
      if (!ids.length) return 0
      return Math.round((ids.filter(lid => completed[lid]).length / ids.length) * 100)
    },
  }
}
```

- [ ] **Step 4: Create `src/content/index.js`** — the registry that the real content files populate. Starts with the structure and empty lesson map; content tasks fill it.

```js
// Track + module structure. lessonIds are filled as content modules are authored.
// Each content file default-exports an object keyed by lesson id.
export const tracks = [
  { id: 'engineering', title: 'AI Engineering',
    tagline: "From 'how does this work?' to 'I can design, ship, and govern AI products people trust.'",
    accent: 'accent', modules: [] },
  { id: 'product', title: 'Product Leadership',
    tagline: 'Think like a Silicon Valley product leader — and speak engineering fluently.',
    accent: 'blue', modules: [] },
]
export const lessons = {}   // id -> lesson object
export const braided = []    // recommended cross-track order
```

- [ ] **Step 5: Run test, verify pass.** Run: `npm test -- curriculum` → PASS.

- [ ] **Step 6: Commit**

```bash
git add src/lib/curriculum.js src/lib/curriculum.test.js src/content/index.js
git commit -m "feat: curriculum assembly, braided order, progress math (TDD)"
```

---

### Task 6: Two seed lessons (prove the content contract)

**Files:**
- Create: `src/content/engineering/m1.js`, `src/content/product/m1.js`
- Modify: `src/content/index.js` (register the two seed modules)

- [ ] **Step 1: Author one full lesson per track** as data objects conforming to the schema, using the template below (drawn from `docs/research/atlas-curriculum-research.json`). This is the **exemplar** every later content task must match for depth and shape:

```js
// src/content/engineering/m1.js
const lessons = {
  'eng-m1-l1': {
    id: 'eng-m1-l1', trackId: 'engineering', moduleId: 'eng-m1', order: 1, estMinutes: 8,
    title: 'The Improv Actor: Next-Token Prediction',
    coreIdea: 'A language model predicts the next chunk of text — nothing more.',
    plainEnglish: [
      'An LLM is not a thinking machine or a database of facts. It is a statistical engine that predicts the most likely next piece of text, one chunk at a time, over and over.',
      'Almost every strength (its fluency) and every flaw (inventing facts, giving different answers to the same question) follows from this single mechanism.',
    ],
    metaphor: { title: '🧭 Think of it like…', body: [
      'An immensely well-read improv actor who has speed-read most of the internet and now plays an endless game of "finish my sentence." It never looks anything up mid-sentence — it just produces the most plausible next few letters based on the rhythm of everything it has ever read.',
      'It is spectacular at sounding right because sounding right is literally the only thing it was trained to do.',
    ]},
    deepSections: [
      { title: 'The math without the math', teaser: 'rolling weighted dice, not looking up answers',
        body: ['At each step the model assigns a probability to every possible next chunk and samples from that distribution — like rolling dice weighted by everything it has read.'] },
      { title: 'Temperature: why the same prompt gives different answers', teaser: 'a creativity dial',
        body: ['"Temperature" controls how adventurously it samples. Low temperature picks the safest next chunk every time; high temperature takes more risks — which is why you can ask the same question twice and get two different answers.'] },
    ],
    pmAngle: { body: [
      'If you do not internalise that the model is a plausibility engine, not a truth engine, you will over-promise to customers and stakeholders.',
      'The single most common AI-product failure is treating fluent output as if it were verified output. Your entire roadmap of trust features — citations, review steps, guardrails — exists because of this one fact.',
    ]},
    caseStudy: { title: 'ChatGPT reaches 100M users in two months',
      body: ['A model whose ONLY training goal was "predict the next chunk of text" became the fastest-growing consumer app in history at the time (Nov 2022).'],
      bridge: 'Next-token prediction at scale produced something that feels like understanding — without ever being designed to be true.' },
    takeaways: [
      'Generating fluent text is mostly solved; being correct is a separate problem.',
      'Same question, different answers, is expected behaviour, not a bug.',
      '"It sounds confident" tells you nothing about whether it is right.',
    ],
    knowledgeCheck: [{
      q: 'What is a large language model fundamentally doing?',
      options: [
        { text: 'Looking up facts in a database', correct: false },
        { text: 'Predicting the most plausible next chunk of text', correct: true },
        { text: 'Reasoning from first principles like a person', correct: false },
      ],
      feedback: 'Exactly — it is a plausibility engine. Everything else follows from that.',
    }],
    glossaryTerms: ['token', 'temperature', 'inference'],
    sources: [
      { label: 'Karpathy — Deep Dive into LLMs', url: 'https://lawwu.github.io/posts/2025-02-24-karpathy-deep-dive-llms/index.html' },
    ],
  },
}
export default lessons
```

(Author `src/content/product/m1.js` the same way with `prod-m1-l1` "The Product Operating Model vs the Feature Factory" from the research artifact.)

- [ ] **Step 2: Register the seed modules in `src/content/index.js`**

```js
import engM1 from './engineering/m1.js'
import prodM1 from './product/m1.js'
Object.assign(lessons, engM1, prodM1)
tracks[0].modules.push({ id: 'eng-m1', title: 'Module 1 — What an LLM Actually Is', lessonIds: Object.keys(engM1) })
tracks[1].modules.push({ id: 'prod-m1', title: 'Module 1 — How Great Product Companies Work', lessonIds: Object.keys(prodM1) })
braided.push('eng-m1-l1', 'prod-m1-l1')
```

- [ ] **Step 3: Validate the seeds.** Add `src/content/content.test.js` that imports the registry and asserts `validateLesson` returns `[]` for every lesson. Run `npm test -- content` → PASS.

- [ ] **Step 4: Commit**

```bash
git add src/content/ ; git commit -m "feat: two seed lessons + content validation test"
```

---

### Task 7: Lesson section components

**Files:**
- Create: `src/components/lesson/CollapsibleSection.jsx`, `MetaphorBox.jsx`, `PMBox.jsx`, `CaseStudyBox.jsx`, `Takeaways.jsx`, `KnowledgeCheck.jsx`, `NotesPanel.jsx`

- [ ] **Step 1: Build `CollapsibleSection.jsx`** — accessible `<details>`-based disclosure with a title, optional teaser, and a tint variant (`neutral` | `metaphor` | `pm` | `case`). Matches the approved fidelity mockup (chevron `＋` rotates, tinted summary bar).

- [ ] **Step 2: Build `MetaphorBox`, `PMBox`, `CaseStudyBox`** as thin wrappers over `CollapsibleSection` with the right tint, label, and (for case study) the green "bridge back to the lesson" callout.

- [ ] **Step 3: Build `Takeaways.jsx`** — the white card with `→` bullets.

- [ ] **Step 4: Build `KnowledgeCheck.jsx`** — dark editorial card (hero gradient + radial glow). Renders questions; on option click, marks correct/incorrect, shows feedback, and calls `store.saveQuiz`.

- [ ] **Step 5: Build `NotesPanel.jsx`** — dashed-border textarea bound to `store.getNote/saveNote(lessonId)`, debounced save.

- [ ] **Step 6: Verify by import** — temporarily render each in `App.jsx`, `npm run dev`, confirm they match the mockup, then revert App. (No commit of the temporary render.)

- [ ] **Step 7: Commit**

```bash
git add src/components/lesson/ ; git commit -m "feat: lesson section components (collapsible, metaphor, PM, case study, check, notes)"
```

---

### Task 8: `LessonPage` renderer + `CourseGuide` + route

**Files:**
- Create: `src/components/lesson/LessonPage.jsx`, `src/components/CourseGuide.jsx`
- Modify: `src/App.jsx` (routes)

- [ ] **Step 1: Build `LessonPage.jsx`** — reads `:lessonId` from the route, looks up the lesson via curriculum, and renders the full 8-part anatomy in order: dark hero (breadcrumb + core idea + meta), then `In plain English` (open) → `MetaphorBox` (open) → `deepSections` as collapsed `CollapsibleSection`s → `PMBox` → `CaseStudyBox` → `Takeaways` → `KnowledgeCheck`, with `NotesPanel` and a "Go deeper" sources list, and a footer (prev / **Mark complete** → next via `nextLesson`). Calls `store.setResume(lessonId)` on mount and `store.setComplete` on the button.

- [ ] **Step 2: Build `CourseGuide.jsx`** — the floating sticky sidebar (layered shadow) showing a progress ring for the current module + a section table-of-contents that scroll-spies the lesson sections.

- [ ] **Step 3: Wire routes in `App.jsx`**: `/` Dashboard (stub for now), `/track/:trackId` (stub), `/lesson/:lessonId` → `LessonPage`, `/glossary` (stub). Include the `Header` once built.

- [ ] **Step 4: Verify** — `npm run dev`, navigate to `#/lesson/eng-m1-l1`, confirm it renders identically to the approved fidelity mockup, collapsibles open/close, the knowledge check works, notes persist across reload, and "Mark complete" updates progress.

- [ ] **Step 5: Commit**

```bash
git add src/components/ src/App.jsx ; git commit -m "feat: LessonPage renderer + CourseGuide + lesson route"
```

---

### Task 9: Shared components — ProgressRing, StatusBadge, ModuleCard

**Files:**
- Create: `src/components/ProgressRing.jsx`, `StatusBadge.jsx`, `ModuleCard.jsx`

- [ ] **Step 1: Port `ProgressRing` and `StatusBadge`** verbatim from the Lumen scaffold (`../export/src/App.jsx`).
- [ ] **Step 2: Build `ModuleCard.jsx`** — the white card with status badge, lesson count, progress bar, and an expandable lesson list (each lesson links to its `/lesson/:id` and shows a done check from `store`).
- [ ] **Step 3: Verify** rendering in a track stub; **Commit**: `git commit -am "feat: ProgressRing, StatusBadge, ModuleCard"`.

---

### Task 10: `TrackPage`

**Files:** Create `src/components/TrackPage.jsx`; Modify `src/App.jsx`.

- [ ] **Step 1: Build `TrackPage`** — track hero (tagline + overall progress ring) + the module list rendered as `ModuleCard`s, accent colour per track (terracotta engineering / blue product).
- [ ] **Step 2: Verify** `#/track/engineering` shows Module 1 with the seed lesson and live progress. **Commit.**

---

### Task 11: `Dashboard` (welcome + continue + progress + notes + recommended)

**Files:** Create `src/components/Dashboard.jsx`; Modify `src/App.jsx`.

- [ ] **Step 1: Build `Dashboard`** — warm welcome header; a "Continue where you left off" banner from `store.getResume()` (first-visit → "Start here" pointing at the first braided lesson); both track progress cards (`trackProgress`); a notes count from `store.allNotes()`; and a "Recommended next" card from the braided order. Dark gradient continue-banner per the approved mockup.
- [ ] **Step 2: Verify** `#/` reflects real progress and resumes correctly after visiting a lesson. **Commit.**

---

### Task 12: `Glossary`

**Files:** Create `src/content/glossary.js`, `src/components/Glossary.jsx`; Modify `src/App.jsx`.

- [ ] **Step 1: Seed `glossary.js`** — `{ termId: { term, plain, seeAlso: [lessonId] } }` for the seed lessons' terms (token, temperature, inference, etc.).
- [ ] **Step 2: Build `Glossary.jsx`** — searchable (filter as you type) list; each entry shows the plain-English definition and links to the lessons that teach it.
- [ ] **Step 3: Verify** `#/glossary` search works and links resolve. **Commit.**

---

### Task 13: `Header` + navigation + mobile

**Files:** Create `src/components/Header.jsx`; Modify `src/App.jsx`.

- [ ] **Step 1: Build `Header`** — Atlas wordmark (DM Serif), nav links (Dashboard / AI Engineering / Product Leadership / Glossary), active-route highlight; below 768px the track nav collapses into a slide-over drawer.
- [ ] **Step 2: Verify** nav + responsive drawer. **Commit.**

**Phase A done = a fully working portal with 2 seed lessons, all features live.**

---

## Phase B — Content authoring (module by module, from the research artifact)

> Each content task authors **every lesson in a module** as a data file matching the Task 6 exemplar, drafting full 8-part prose from the matching entry in `docs/research/atlas-curriculum-research.json` (its `metaphor_seed`, `case_study_seed`, `pm_angle`, `deep_sections`, `sources`). Acceptance for every task: (a) `validateLesson` returns `[]` for each lesson; (b) the module registers in `src/content/index.js` with ordered `lessonIds`; (c) every new term appears in `glossary.js`; (d) the module renders and reads cleanly in the running app. **At execution time these tasks are fanned out as parallel authoring workflows, one agent per lesson, each validated against the schema before commit.**

- [ ] **Task 14:** Engineering M1 (remaining 6 lessons: tokens/context, embeddings, training vs inference, hallucination, reasoning models, capabilities & limits) + the **Multimodal AI** closing lesson. Reorder so "capabilities & limits" lands as the gentle on-ramp.
- [ ] **Task 15:** Engineering M2 — Building Reliable AI Features (6 lessons).
- [ ] **Task 16:** Engineering M3 — Agents & Agentic SE (7 lessons; anchors the reading-list papers).
- [ ] **Task 17:** Engineering M4 — Proving It Works / evals & observability (6 lessons; canonical evals).
- [ ] **Task 18:** Engineering M5 — Safety, Security & Governance (4 lessons) + **Responsible AI** and **Regulation & Compliance** lessons.
- [ ] **Task 19:** Engineering M6 — Production AI & LLMOps (5 lessons).
- [ ] **Task 20:** Engineering M7 — The Product Owner's Edge (2 lessons; flywheel consolidated to Product, cross-referenced).
- [ ] **Task 21:** Product M1 — How Great Product Companies Work (remaining 4 lessons) + **Analytics literacy for PMs** lesson.
- [ ] **Task 22:** Product M2 — Product Discovery (6 lessons).
- [ ] **Task 23:** Product M3 — Vision, Strategy & Saying No (6 lessons).
- [ ] **Task 24:** Product M4 — Leading People (5 lessons).
- [ ] **Task 25:** Product M5 — Managing AI Products (5 lessons; evals as PM-ownership, cross-ref Eng M4).
- [ ] **Task 26:** Product M6 — Business & Engineering Edge of AI (5 lessons) + **Growth & Go-to-Market** lesson; the canonical **Data as the Moat** flywheel lesson lives here.
- [ ] **Task 27:** Define the full **braided order** in `src/content/index.js` (interleave the two tracks per the spec) and verify the dashboard "Recommended next" walks it sensibly.

---

## Phase C — Polish & verification

- [ ] **Task 28: Glossary completeness pass** — script-check that every `glossaryTerms` entry across all lessons exists in `glossary.js` (fail the test if not); fill gaps. Ensures "no unexplained jargon."
- [ ] **Task 29: Cross-reference pass** — wire the deliberate callbacks (flywheel, evals, RAG, hallucination, token economics) so duplicated concepts link to their canonical lesson instead of re-teaching.
- [ ] **Task 30: Accessibility & reduced-motion pass** — keyboard-operable collapsibles, semantic headings, `prefers-reduced-motion` respected, colour-contrast check on tinted boxes.
- [ ] **Task 31: Production build smoke test** — `npm run build` then `npm run preview`; click through Dashboard → both tracks → several lessons → glossary; confirm progress/notes persist. Fix any build issues.
- [ ] **Task 32: Final visual parity check** — compare a sample lesson against the approved fidelity mockup; confirm the Lumen look holds. Commit and finish the branch via the finishing-a-development-branch skill.

---

## Self-Review (completed by author)

- **Spec coverage:** Dashboard/Track/Lesson/Glossary (Tasks 8–13); 8-part lesson format (Tasks 6–8); progress/notes/checks (Tasks 4,7,8,11); glossary + no-unexplained-jargon (Tasks 12,28); both full tracks incl. the 4 additions (Tasks 14–26); braided order (Tasks 5,27); dedup/cross-refs (Tasks 20,26,29); Lumen design reuse (Tasks 2,7,8,32); localStorage persistence (Task 4); Phase-2 builder spine intentionally omitted from build (spec §10). All spec sections map to tasks.
- **Placeholder scan:** Scaffolding tasks (1–13) contain real code/commands. Content tasks (14–26) intentionally reference the research artifact + the Task 6 exemplar rather than inlining 70 lesson objects (that *is* the build, and the schema validator + exemplar make each unambiguous and checkable).
- **Type consistency:** `store.*` method names match across Tasks 4/7/8/11; `buildCurriculum` API (`getLesson`, `nextLesson`, `moduleProgress`, `trackProgress`) consistent across Tasks 5/8/10/11; lesson field names match the schema (Task 3) and exemplar (Task 6).
