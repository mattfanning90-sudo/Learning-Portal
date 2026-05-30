# Atlas — AI Engineering & Product Leadership

A self-study learning portal that takes a **smart but non-technical** learner from
zero to confident across two roles: a great **AI engineer** and a great
**Silicon-Valley-style Product Owner / Manager**.

Every lesson is taught in plain English with a concrete **metaphor**, a real **case
study**, a **👔 product/technical-literacy angle**, collapsible deep-dives, and a
**✦ knowledge check** — so you can skim in 2 minutes or go deep in 12.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static bundle in ./dist
npm test         # unit + content-validation + render smoke tests
```

No backend, no login. Progress, notes, and quiz results persist in your browser
(`localStorage`).

## What's inside

- **AI Engineering** — 7 modules, 40 lessons: how LLMs really work, building reliable
  features (RAG, tools, structured output), agents & the agentic SDLC, evals &
  observability, safety/security/governance (incl. Responsible AI & regulation),
  LLMOps & economics, and the product-owner's edge. Anchored by a curated reading list.
- **Product Leadership** — 6 modules, 34 lessons: the product operating model,
  discovery (Cagan/Torres), vision & strategy, leading people, managing AI products,
  and the business/engineering edge (moats, pricing, growth & GTM).
- A searchable **glossary** (no term left unexplained) and a **braided** path that
  interleaves the two tracks so shared ideas reinforce each other.

## How the content is built

Content is **data, not markup**: each lesson is an object (the 8-part format as
fields) under `src/content/`, rendered by one `LessonPage` component. The curriculum
was researched from 2025–26 primary sources (`docs/research/`) and authored from
per-module briefs:

```bash
node scripts/build-jobs.mjs          # research artifact -> per-module authoring briefs
# (lessons authored from the briefs, then:)
node scripts/assemble-content.mjs <workflow-output.json>   # briefs -> content tree
```

A schema validator (`src/lib/schema.js`) guards every lesson, and the test suite
fails if any lesson is malformed or references an undefined glossary term.

## Design

Reuses the **Lumen** editorial design system — `oklch` palette, DM Serif Display +
DM Sans, layered shadows. See `docs/superpowers/specs/` for the full design and plan.

## Project structure

```
src/
  App.jsx                 # router + shell
  index.css               # Lumen tokens + Atlas extensions
  lib/                    # schema, useProgress (localStorage), curriculum assembly
  content/                # lesson data per module + glossary + registry
  components/             # Header, Dashboard, TrackPage, LessonPage + section blocks
docs/
  superpowers/specs/      # design spec
  superpowers/plans/      # implementation plan
  research/               # curriculum research + per-module briefs
```
