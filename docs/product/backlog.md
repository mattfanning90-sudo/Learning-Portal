# Atlas — Product Backlog

Living list of opportunities, prioritised by a learning-PO lens (impact on the learning
outcome × effort). Not commitments — candidates. Update freely.

Effort key: **S** ≈ hours · **M** ≈ a focused build · **H** ≈ multi-step / bespoke.

---

## Recently shipped ✅
- **Engineering hardening:** CI (lint→typecheck→test→build), ESLint/Prettier, JSDoc + `checkJs`,
  top-level ErrorBoundary, `helmet` + rate-limiting, JSON API error handler, route code-splitting, WCAG-AA.
- **Content:** enriched all 33 coding lessons (Python + Java) — deeper explanations, key terms, practice Qs.
- **Observability wired** (env-gated Sentry + PostHog) — flip on via `docs/CHECKLIST-production.md`.
- **Repo moved out of iCloud** → `~/projects/Learning-Portal` (ended `node_modules` corruption + `" 2"` conflict copies).

## Next up
- [ ] **Fan diagrams out across more lessons** — _M_
  The `diagram` field + renderer + animation are proven on 6 pilot lessons. Extend via the
  authoring workflow: one agent per lesson proposes a `diagram` **only where it genuinely
  aids comprehension** (a process, architecture, or flow), schema-validated into the
  `diagrams.js` overlay. Don't force one on every lesson. _Why:_ dual-coding is the biggest
  comprehension lever and the foundation is built.

## High value
- [ ] **AI "explain-it-back" tutor** (North Star) — _M–H_
  Learner types an explanation of a concept; an LLM grades it against the lesson and asks
  2–3 follow-ups. The only feature that **measures** fluency. _Architecture:_ a server-side
  `/api/tutor` route (OpenAI-compatible), key stays on Railway like `CLERK_SECRET_KEY`,
  provider-agnostic via `MODEL` / `BASE_URL` / `API_KEY` env vars. **Use an open model on a
  free/cheap tier (Groq / OpenRouter / Cloudflare); prototype prompts locally with `ollama`
  (installed), then swap the URL for prod.** Frontier model only if a rubric eval shows gaps.
  _Why:_ serves "hold the room", and teaches AI by using AI.
- [ ] **"Ask about this lesson" AI Q&A** — _M_
  Scoped LLM Q&A on the current lesson for follow-ups. Reuses the `/api/tutor` infra + model.
- [ ] **Full-text search / command palette (⌘K)** — _M_
  Search all 150 lessons by title, term, or content. _Why:_ navigation at this scale.
- [ ] **Onboarding goal → guided pathway** — _M_
  "I want to be an AI-fluent PM" → a curated cross-track path instead of "start anywhere".
  _Why:_ kills the cold-start.
- [ ] **"Where am I weak" view** — _M (needs analytics)_
  Comprehension heatmap from quiz scores; surfaces what to review.
- [ ] **Analytics & instrumentation** (PostHog or similar) — _M_
  We currently can't answer "where do learners drop off / which lesson loses them." A
  learning product with no measurement is flying blind. Lightweight, privacy-respecting.
  _Why:_ turns "feels good" into a measured outcome; ironic to teach PM analytics with none.
- [ ] **Teach-back + spaced-retrieval** — _M_
  Build on existing `knowledgeCheck` + notes: a teach-back prompt per lesson and a spaced
  review queue (day-1 / week-1 / month-1). _Why:_ directly serves the "hold the room",
  mastery-paced North Star; recall MCQs alone don't prove transfer.
- [ ] **Interactive micro-sims** — _H (bespoke each)_
  A `widget` field keyed by type. Hero candidate: **FinOps cost calculator** (drag usage,
  compare On-Demand vs Spot vs Reserved vs Savings Plans). Others: tokenizer, temperature
  slider, embeddings 2-D map. _Why:_ learn-by-doing is the deepest engagement per concept.

## Production hardening (before real/wider users)
- [ ] **Promote Clerk dev → production instance** + custom domain — _M_
  The live sign-in still runs on a Clerk **development** instance ("Development mode" badge,
  user caps, shared OAuth). _Why:_ not production-grade auth.
- [ ] **Privacy policy + data-deletion route** — _M_
  We now store PII (email) + learning history in Postgres with no policy or delete path.
  _Why:_ legal/ethical baseline once accounts are real.
- [ ] **Mobile / responsive pass** — _S–M_
  Check the sticky sidebar, diagrams, and lesson layout at phone widths. _Why:_ people learn
  on phones; currently only desktop-verified.

## Habit, credential & access
- [ ] **Streaks + daily goal + reminders** — _M_ — the retention loop (currently missing).
- [ ] **Shareable certificates / badges** — _S–M_ — completion proof for LinkedIn; "land the role".
- [ ] **Audio / text-to-speech mode** — _M_ — commute learning + accessibility.
- [ ] **Per-module cheat-sheet / PDF export** — _S–M_ — a one-page revision sheet.

## Nice to have
- [ ] **Animated "Atlas" map dashboard** — _M_
  Replace track cards with a journey map of the curriculum (on-brand with the name).
  _Why:_ motivation/retention.
- [ ] **Expert/mentor content review** — _ongoing_
  Spot-check generated lessons against primary sources; have a real engineer/PM pressure-test
  explanations. _Why:_ content correctness is currently an unaudited bet.

---
_Context: see `docs/product/atlas-product-brief.md` and the spec under
`docs/superpowers/specs/`. The Cloud/AWS/FinOps syllabus spec is the template for new tracks._
