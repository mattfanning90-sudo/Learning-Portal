---
name: Atlas — AI Engineering & Product Leadership Learning Portal
status: draft (awaiting review)
date: 2026-05-30
owner: Matthew Fanning
---

# Atlas — Learning Portal Design

## 1. Overview

Atlas is a self-study learning portal that takes a **smart but non-technical learner**
from zero to confident across two roles at once: a **great AI engineer** and a **great
Silicon-Valley-style Product Owner / Manager**. It is a static, browser-based React app
(no backend, no login) that the learner runs locally or deploys as static files.

The defining quality is **plain-English teaching with metaphors and real case studies**.
Every lesson is written so a non-technical person never gets lost, but can "click down"
into as much depth as they want.

### Goals
- Make a non-technical person genuinely fluent in modern (2025–26) AI engineering and the
  Silicon Valley product operating model.
- Teach with a consistent, repeatable lesson rhythm that always orients the reader.
- Track progress, test understanding, and let the learner take notes — all persisted locally.
- Be beautiful and calm, reusing the existing "Lumen" editorial design system.

### Non-goals (v1)
- No accounts, server, database, or multi-user features.
- No video hosting or LMS-grade features (certificates, payments, cohorts).
- No actual coding environment in v1 (see Phasing — the builder spine is Phase 2).

## 2. Audience & Pedagogy

Audience: one learner (the user), non-technical, motivated, wants both depth and accessibility.

**The 8-part lesson format** (validated visually during brainstorming). Every lesson renders
the same anatomy; sections are collapsible so the reader controls depth:

1. **The core idea** — a serif headline stating the one thing.
2. **In plain English** — jargon-free framing (open by default).
3. **🧭 Think of it like…** — a concrete metaphor (open by default).
4. **Deeper sections** — 1–4 collapsible blocks (the study, why it happens, mechanics), collapsed by default with a one-line teaser.
5. **👔 Why this matters if you manage the product** — the PM-angle box (blue), in the Engineering track. In the Product track this box is the *technical-literacy angle* a PM needs.
6. **📌 Case study** — a real, named, 2025–26 story that brings the idea home, with a "bridge back to the lesson" line.
7. **Key takeaways** — scannable.
8. **✦ Knowledge check** — 1–3 quick questions with instant feedback; closes every lesson.

Plus, available throughout: **Your notes** (saved locally) and **Go deeper** (links to the
source papers/essays and glossary terms). Every new term links to a **running glossary**, and
each lesson ends with a plain-English recap of any term it introduced ("no unexplained jargon").

## 3. Scope Decisions (agreed during brainstorming)

| Decision | Choice |
|---|---|
| Name | **Atlas** |
| Structure | **Two parallel tracks** — AI Engineering + Product Leadership |
| Home page | **Welcome + dashboard** (continue-where-you-left-off, both track progress, notes, recommended next; first-visit shows a "start here" state) |
| Features | Progress tracking, knowledge checks, notes/highlights, glossary + resource links, metaphors throughout |
| Content depth | **Every lesson fully written** to the 8-part standard |
| Builder depth | **Fluency now, builder later** — v1 is the complete conceptual portal; the builder spine (Engineering Module 0 + a "build a tiny AI feature" thread) is designed in and marked **Phase 2** |
| Additions folded in | Responsible AI & Regulation; Multimodal AI; PM analytics literacy; Growth & Go-to-Market |
| Auto-applied fixes | De-duplicate cross-track concepts into canonical lessons with cross-references; running glossary + end-of-lesson recap; gentler Engineering M1 on-ramp; **braided** cross-track ordering |

Content is grounded in: the 8-paper reading list (`AI Engineering Papers Reading List.pdf`)
and a 9-domain web-research pass saved at `docs/research/atlas-curriculum-research.json`
(every lesson there carries a metaphor seed, a real case study, a PM angle, deep-section
titles, and primary sources).

## 4. Curriculum

Two tracks. The full per-lesson drafts (metaphor, case study, PM angle, deep sections,
sources) live in `docs/research/atlas-curriculum-research.json` and are the content source
for writing each lesson.

### Track 1 — AI Engineering (7 modules + cross-cutting additions)
*"From 'how does this thing actually work?' to 'I can design, ship, and govern AI products people trust.'"*

- **Module 0 — Foundations** *(Phase 2 builder spine; designed, not built in v1)*: what ML is; APIs/JSON/HTTP in plain English; your first guided model call.
- **Module 1 — What an LLM Actually Is**: Improv Actor (next-token); LEGO Bricks & the Desk (tokens/context); A City Where Ideas Have Addresses (embeddings); Culinary School vs Cooking to Order (training vs inference); The Student Who Never Leaves a Blank (hallucination); Stepping to the Whiteboard (reasoning models); The Jet-Lagged Consultant (capabilities & limits). *On-ramp reordered so the intuitive "capabilities & limits" framing comes early.*
- **Module 2 — Building Reliable AI Features**: Chief of Staff (prompt/context engineering); Open-Book Exam (RAG); Phone & Buttons (tool use / MCP); Form With Guide Rails (structured output); Desk & Filing Cabinet (memory); Assembly Line vs Handyman (chains & workflows).
- **Module 3 — Agents & Agentic SE** *(anchors the reading-list papers)*: Chef Who Cooks (agent loop / ReAct); Same Chef, Different Kitchen (ACI — SWE-agent); Whiteboard That Fills Up (context engineering at scale — SWE-AGI/MoonBit); Hiring Help for Your House (coding agents — Devin/Claude Code/Codex/Jules); Self-Driving Levels (autonomy dial); Hand-Drawn to CGI (A-SDLC six-layer architecture); Newsroom on a Breaking Story (multi-agent).
- **Module 4 — Proving It Works**: Tasting Routine (evals = new unit tests); Leaked Answer Key (SWE-bench vs SWE-Bench Pro); Flight Sim vs Live Cockpit (offline/online); Fast, Cheap, Quirky Grader (LLM-as-judge); Flight Data Recorder (observability/OpenTelemetry); Watching the Whole Operation (agent reliability — pass^k; Beyond Resolution Rates).
- **Module 5 — Safety, Security & Governance**: Eager Intern (prompt injection — OWASP #1); Airport Security Layers (guardrails / defense in depth); Hiring Bank Robbers (red-teaming); Cameras Without Locks (governance & trust boundaries). *Plus the canonical **Responsible AI** (bias/fairness) and **Regulation & Compliance** (EU AI Act, GDPR, copyright) lessons live here and are cross-referenced from Product M6.*
- **Module 6 — Production AI & LLMOps**: Sticky Note/Cabinet/Retraining (prompt vs RAG vs fine-tune); Triage Nurse (model routing); Toll Bridge vs Taxi Meter (economics); Open-Book Exam at Scale (production RAG — Air Canada); Body-Cam on a 30-Step Errand (agent reliability in prod).
- **Module 7 — The Product Owner's Edge**: New Teammate (human-AI collaboration — AIDev); Programming With Trust (synthesis). *The data-flywheel lesson is consolidated into the Product track (canonical) and cross-referenced here.*
- **Cross-cutting addition**: **Multimodal AI** (vision/document AI, voice agents, image/video generation) — added as the closing capability lesson of **Module 1**.

### Track 2 — Product Leadership (6 modules + additions)
*"Think like a Silicon Valley product leader — and speak engineering fluently enough to lead the people who build."*

- **Module 1 — How Great Product Companies Work**: Product Operating Model vs Feature Factory; Three Kinds of Product Team; Outcomes Over Output; The Product Trio; Real PM vs Theater. *Plus added **Analytics literacy for PMs** (A/B testing & significance, funnels, cohorts, retention, leading vs lagging, basic SQL/dashboards) early in the track.*
- **Module 2 — Product Discovery**: Discovery vs Delivery; Four Big Risks; Continuous Discovery (Torres); Opportunity Solution Tree; Assumption Mapping; Cheap Tests (fake door / Wizard of Oz / concierge).
- **Module 3 — Vision, Strategy & Saying No**: Product Vision; Insight-Driven Strategy; Ruthless Focus; OKRs; Prioritization (RICE); Roadmaps vs Outcomes (Now-Next-Later).
- **Module 4 — Leading People**: Leadership Layer (vision/strategy/topology/objectives); Influence Without Authority; Stakeholders & the Product Model; Product Culture; Leading the Transformation.
- **Module 5 — Managing AI Products**: Deterministic → Probabilistic; Evals as a PM Responsibility (PM-ownership framing, cross-referencing Eng M4); Probabilistic UX; Build-Measure-Learn with Models; AI-Accelerated Discovery.
- **Module 6 — Business & Engineering Edge of AI**: Data as the Moat (canonical flywheel lesson); Pricing AI Features; Trust & Safety as a Product Concern (Air Canada / liability); Leading Teams That Ship with Coding Agents; Capstone — the AI Product Leader's Operating Loop. *Plus added **Growth & Go-to-Market** (acquisition/activation/retention loops, positioning, product-led growth).*

### The braided path
A recommended interleaving so shared concepts are taught once and reinforced from the other
angle, e.g.: Eng M1 (what an LLM is) → Prod M1 (how product orgs work) → Eng M2 (building) →
Prod M2 (discovery) → Eng M4 (evals, canonical) → Prod M5 (evals as PM ownership) → … The
dashboard surfaces this order; each track is also fully browsable on its own.

## 5. Information Architecture

- **/ (Dashboard)** — welcome header; "continue where you left off"; both track progress rings;
  recent notes count; recommended next lesson (braided order). First visit → "start here".
- **/track/:trackId** — track hero + module list (ModuleCard with progress, expandable lessons).
- **/lesson/:lessonId** — the 8-part lesson page + floating CourseGuide (section ToC + place in module).
- **/glossary** — searchable list of terms; each term links back to the lessons that teach it.

Navigation: top Header (Atlas wordmark, Dashboard / AI Engineering / Product Leadership /
Glossary / Notes, progress avatar). Mobile: sidebar collapses to a slide-over.

## 6. Lesson Data Model

Each lesson is a plain object (content-as-data, decoupled from rendering):

```
{
  id, trackId, moduleId, order,
  title,                      // "The Improv Actor: Next-Token Prediction"
  coreIdea,                   // serif headline
  plainEnglish: [para, ...],
  metaphor: { title, body: [para, ...] },
  deepSections: [ { title, teaser, body: [para,...] }, ... ],
  pmAngle: { body: [para,...] },          // blue box
  caseStudy: { title, body: [para,...], bridge },   // green box
  takeaways: [str, ...],
  knowledgeCheck: [ { q, options:[{text,correct}], feedback }, ... ],
  glossaryTerms: [termId, ...],
  sources: [ {label, url}, ... ],
  estMinutes
}
```

Modules and tracks are objects referencing ordered lesson ids. A `curriculum.js` assembles
tracks → modules → lessons and exposes the braided order.

## 7. Features & Persistence

All state in `localStorage` via a `useProgress` hook (single source of truth, isolated):
- **Progress**: set of completed lesson ids; derived per-module and per-track %.
- **Knowledge checks**: stored answers + correct/incorrect per lesson.
- **Notes**: map of lessonId → text, plus a Notes overview surfaced on the dashboard.
- **Resume**: last-visited lesson id for "continue where you left off".

Storage is namespaced (`atlas:v1:*`) and tolerant of missing/old keys.

## 8. Design System

Reuse the **Lumen** system verbatim where possible (`src/index.css` `oklch` tokens, DM Serif
Display + DM Sans, `--shadow-float`, radii, 4px grid, fadeUp/fadeIn). Extensions:
- Tinted, bordered collapsible section cards: terracotta (intro/metaphor, open), neutral
  (deep sections), **blue** (PM angle), **green** (case study).
- Dark editorial cards (hero + knowledge check) reusing the gradient + grid texture + radial
  accent glow already in the scaffold.
- Reading measure ~64ch; serif for the core idea and case-study titles.

Accessibility: respects `prefers-reduced-motion`; semantic headings; keyboard-operable
collapsibles (`<details>`/`<summary>` or an accessible disclosure component).

## 9. Technical Architecture

- **React 18 + Vite**, ES modules — same toolchain as the existing scaffold.
- **react-router-dom** with `HashRouter` (deploys as static files anywhere).
- **Content-as-data**: `src/content/engineering/*.js`, `src/content/product/*.js`, `glossary.js`.
- **Isolated units** (each small, single-purpose, independently understandable):

```
Learning-Portal/
  index.html  vite.config.js  package.json
  src/
    main.jsx
    App.jsx                     # router + AppShell
    index.css                   # Lumen tokens (extended)
    lib/
      useProgress.js            # localStorage hooks
      curriculum.js             # assemble tracks/modules/lessons + braided order
    content/
      engineering/*.js          # lesson data per module
      product/*.js
      glossary.js
    components/
      Header.jsx  Dashboard.jsx  TrackPage.jsx  Glossary.jsx
      CourseGuide.jsx  ProgressRing.jsx  StatusBadge.jsx  ModuleCard.jsx
      lesson/LessonPage.jsx
      lesson/CollapsibleSection.jsx  MetaphorBox.jsx  PMBox.jsx
      lesson/CaseStudyBox.jsx  KnowledgeCheck.jsx  NotesPanel.jsx  Takeaways.jsx
```

The `LessonPage` renderer is the one component that maps a lesson object → the 8-part
anatomy; adding/expanding lessons is a pure data change.

## 10. Phasing

- **Phase 1 (this build)** — Complete conceptual portal: both tracks fully written to the
  8-part standard (incl. the four additions), all features (progress/checks/notes/glossary),
  dashboard, braided path, full Lumen styling. Usable end to end.
- **Phase 2 (designed, deferred)** — Builder spine: Engineering Module 0 (coding/ML floor) and
  a "build a tiny AI feature" thread. The data model and routing already accommodate it; no
  rework required.

## 11. Implementation Approach (high level)

Because v1 writes ~70+ rich lessons, content authoring will be orchestrated in parallel
(multi-agent workflows) during execution, each lesson drafted from its research entry and
validated against the 8-part schema, then committed module by module. App scaffolding,
components, and persistence are built and verified first against a couple of seed lessons so
the rendering contract is proven before mass content generation.

## 12. Success Criteria (verifiable)
- `npm run dev` serves the portal; `npm run build` produces a deployable `dist/`.
- Dashboard shows real progress that persists across reloads (localStorage).
- Every track → module → lesson route renders the full 8-part anatomy with working
  collapsibles, knowledge checks (with feedback), and notes that persist.
- Glossary is searchable and cross-links to lessons; no lesson contains an unexplained term.
- Every lesson has: plain English, a metaphor, ≥1 deep section, a PM/tech-literacy angle, a
  real named case study, takeaways, and ≥1 knowledge-check question.
- Visual parity with the approved Lumen fidelity mockup.

## 13. Open Questions
- None blocking. Deployment target (Vercel/Netlify/local only) can be decided at the end;
  the static build supports all.
