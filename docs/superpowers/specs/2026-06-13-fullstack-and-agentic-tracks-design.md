# Two New Tracks — Full-Stack Engineering & Agentic Engineering (Design)

**Date:** 2026-06-13 · **Status:** syllabus approved, in build.

## Why
Atlas covers AI fluency (Engineering, Product), language basics (Python, Java), and
Cloud/FinOps. These two tracks are the "builder later" half of the North Star: understand how
real software is built and shipped (**Full-Stack**), and how to build and work alongside AI
agents (**Agentic**).

## Audience & voice
Same as the rest of Atlas: a smart, non-technical learner. **Concept-first** — no runnable
code; each lesson assessed by a 3-question `knowledgeCheck`. Lesson format is identical to the
Cloud track: `coreIdea → plainEnglish → metaphor → 3 deepSections → keyTerms → pmAngle →
caseStudy → takeaways → knowledgeCheck`. The bar is `src/content/cloud.js` (lesson `cloud-m1-l1`).
Full authoring rules: [`docs/research/AUTHORING-BRIEF.md`](../../research/AUTHORING-BRIEF.md).

## Track 1 — Full-Stack Engineering (`fullstack`, accent `--stack`)
Concept-first / stack-light: understand *every layer* of a real app end to end, well enough to
design it and lead the people who build it. **8 modules, 44 lessons.**
- M1 How the Web Actually Works (6) · M2 The Frontend (6) · M3 The Backend (6) ·
  M4 Data & Databases (6) · M5 Connecting It All (5) · M6 Shipping It / DevOps (5) ·
  M7 Quality & Craft (5) · M8 Thinking Like an Engineer / system design (5)

## Track 2 — Agentic Engineering & Coding (`agentic`, accent `--agent`)
Use AND build: get 10× from Claude / ChatGPT / Gemini and coding agents, then the engineering
underneath (tool calling, MCP, multi-agent, evals). **7 modules, 36 lessons.**
- M1 Foundations: Working with LLMs (4) · M2 Prompting & Context Engineering (6) ·
  M3 Coding with AI Agents (7) · M4 How Agents Actually Work (5) · M5 Building Agentic Systems (5) ·
  M6 Trust, Evals & Production (5) · M7 The Agentic Engineer (4)

The authoritative per-lesson manifest (ids + titles) lives in `scripts/assemble-fullstack.mjs`
and `scripts/assemble-agentic.mjs`.

## Build pipeline (mirrors Cloud + coding)
1. Author one JSON per lesson under `docs/research/fullstack-jobs/` and `docs/research/agentic-jobs/`,
   following `docs/research/AUTHORING-BRIEF.md`.
2. `node scripts/assemble-fullstack.mjs` / `assemble-agentic.mjs` re-stamps
   `id/trackId/moduleId/order/title`, validates every lesson with the real `validateLesson`,
   **skips un-authored lessons** (so partial/incremental builds work), drops empty modules, and
   writes `src/content/fullstack.js` / `agentic.js` as a self-contained `{ tracks, lessons, <glossary> }`.
3. `src/content/index.js` merges both via `mergeTrack` and folds their glossaries in.
4. `npm test` (schema + smoke) green; verify on the prod preview.

## Accents (added to `src/index.css`)
`--stack: oklch(0.52 0.16 285)` (indigo-violet) · `--agent: oklch(0.55 0.20 330)` (magenta),
each with a `-light` tint. Consumed via each track's `accentVar`; nothing hard-codes hex.

## Rollout
Pilot **M1 of each track** first (10 lessons) to lock voice/format, review, then fan out the
remaining ~70 the same way. End state: **7 tracks, ~230 lessons.**

## Out of scope (for now)
Runnable code for these tracks (concept-first by design); per-lesson animated diagrams (added
later via the `diagrams.js` overlay where they genuinely aid comprehension — see the backlog).
