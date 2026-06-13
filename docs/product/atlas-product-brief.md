# Atlas — Product Brief

> A learning portal that turns a smart, non-technical person into someone who can hold their
> own as both an AI engineer and a Silicon-Valley-style product leader.

## Vision

In a few years, "can you work fluently with AI?" will be table stakes for builders and product
leaders alike. Atlas is the on-ramp: it takes someone with no technical background and gives
them genuine, durable understanding — not buzzword fluency — of how modern AI is built and how
great products are made, taught in plain English they actually retain.

## The learner

One primary user: **smart, motivated, non-technical**, deliberately upskilling into two roles
at once — a **great AI engineer** and a **great Product Owner/Manager** (the Cagan/SVPG model).
They learn best from plain language, concrete metaphors, and real stories — and they want depth
available when they reach for it, without being drowned in it up front.

## What the product is

A **static-first, browser-based portal** (React + Vite). Progress lives in the learner's
browser by default; an **optional sign-in** syncs it across devices (see *Static-first,
optionally connected*). Seven tracks, 230 lessons:

| Track | Scope |
|---|---|
| **AI Engineering** | 7 modules · 40 lessons — how LLMs work → building features (RAG, tools, structured output) → agents & the agentic SDLC → evals/observability → safety & governance → LLMOps → the product-owner's edge |
| **Product Leadership** | 6 modules · 34 lessons — the product operating model, discovery (Cagan/Torres), vision & strategy, leading people, managing AI products, the business/engineering edge |
| **Python** | 6 modules · 25 lessons — from zero to "Python for data & AI", fully runnable |
| **Java** | 2 modules · 8 lessons — a from-scratch starter |
| **Cloud, AWS & FinOps** | 7 modules · 43 lessons — cloud foundations, security, the AWS platform & core services, how the bill works, and FinOps; cert-mapped to AWS Cloud Practitioner + FinOps Certified Practitioner |
| **Full-Stack Engineering** | 8 modules · 44 lessons — concept-first, stack-light: how the web works → frontend → backend → data → integration → DevOps → quality → system design |
| **Agentic Engineering & Coding** | 7 modules · 36 lessons — using Claude/ChatGPT/Gemini & coding agents well, then how agents work, building agentic systems, evals, and the craft |

**Every lesson follows one rhythm** so the reader is never lost: plain-English core idea →
🧭 metaphor → (where a process or architecture is clearer *seen*) an animated step-through
diagram → collapsible deep-dives → real 📌 case study → key takeaways → an assessment.
- AI/Product lessons end in a **✦ knowledge check** (with a per-module 5-question quiz).
- Coding lessons have **runnable examples** and a **blank-terminal challenge**: the learner
  writes code, runs it, and it's auto-marked against an expected output — with coaching on
  wrong attempts (a diagnosis + the lesson's hint). Code executes via the public Wandbox API.

Supporting features: progress tracking (with **optional sign-in for cross-device sync**),
personal notes, an in-lesson navigation menu, animated diagrams, a searchable glossary (no term
left unexplained), an optional setting to require assessments before marking a lesson complete,
and a Dashboard that recommends what to do next along a "braided" path (AI⇄Product interleaved,
with the coding and cloud tracks following).

## Principles & key decisions

- **Plain English + a metaphor + a real case study, every time.** This is the product's edge
  and its quality bar. Short, one-idea sentences; each new term on its own line.
- **Depth on demand.** Collapsible sections let a learner skim in 2 minutes or go deep in 12.
- **Fluency now, builder later.** v1 makes the learner deeply fluent; a hands-on "builder spine"
  (Module 0 coding + a build-a-feature thread) is designed but deferred — the Python/Java tracks
  now partly deliver the hands-on side.
- **Learn by doing, for code.** Coding is assessed by *building*, not multiple choice — a blank
  terminal marked against a real outcome.
- **Static-first, optionally connected.** Works with zero backend (progress in the browser);
  an optional sign-in (Clerk) syncs progress across devices via a small API + Postgres. Deployed
  as a single full-stack service on Railway (one Express app serves the SPA + the API + Postgres).
- **Faithful design system.** One editorial look (Lumen) reused throughout.

## Success metrics

- **Completion**: % of lessons/modules a learner finishes; track-level progress.
- **Active learning**: knowledge-check answer rate; challenge **pass rate** and attempts-to-pass.
- **Comprehension signal**: challenges passed without revealing hints; notes written.
- **Coverage/quality**: 100% of lessons schema-valid, every glossary term defined, every coding
  challenge verified solvable (enforced in CI/tests).

## Roadmap (candidate next steps)

The **living list is `docs/product/backlog.md`** (prioritised, with effort). Headlines:
- **AI "explain-it-back" tutor** — the learner explains a concept, an LLM grades it and probes
  (open-model, swappable). The feature that actually *measures* fluency.
- **Fan animated diagrams** out across more lessons; **interactive sims** (e.g. a FinOps cost calculator).
- **Full-text search**; **guided onboarding pathway**; **interactive sims** (e.g. FinOps cost calculator).
- **Production-harden auth** (promote Clerk dev→prod instance) + privacy policy / data-deletion.
- _Shipped since v1:_ optional accounts + cross-device sync; the Cloud/AWS/FinOps track; animated
  diagrams; build chunking + route code-splitting; **engineering hardening** (CI, ESLint, JSDoc+checkJs,
  WCAG-AA, helmet/rate-limit, ErrorBoundary); **enriched coding lessons**; env-gated observability.

## Out of scope (for now)

Video hosting, payments, multi-user cohorts, and a self-hosted code runner (the public Wandbox
service is sufficient). _(Accounts/auth + a sync database were originally out of scope but are
now shipped as an **optional** layer — the app still works fully signed-out.)_
