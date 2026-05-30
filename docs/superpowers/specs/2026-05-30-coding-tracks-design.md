---
name: Atlas — Python & Java coding tracks with a live code runner
status: approved design
date: 2026-05-30
---

# Coding Tracks (Python + Java) Design

## Goal
Add two new learner tracks — **Python** (full beginner curriculum) and **Java** (starter) —
that teach a non-technical learner to code, with **runnable code** in the browser.

## Architecture

**Runner (the "service"):** the public **Wandbox API** (`https://wandbox.org/api/compile.json`)
— free, CORS-open (`Access-Control-Allow-Origin: *`), sandboxed, supports Python and Java, no API
key, no backend for us to run. (We originally specced Piston, but its public API went whitelist-only
on 2026-02-15, so Wandbox is the working equivalent.)
- `src/lib/runCode.js` → `runCode(language, source)`; POSTs `{ compiler, code }`, returns
  `{ ok, stdout, stderr, output }`. Maps `python`→cpython-3.12.7, `java`→openjdk-jdk-21. Java's
  `public class` is stripped to `class` for execution only (Wandbox compiles to prog.java), leaving
  the learner's displayed code untouched. Timeout + friendly failure handling. One swappable
  `RUNNER_URL`/`RUNTIME` (self-host later by changing it).

**UI:**
- `CodeRunner.jsx` — editable monospace `<textarea>` seeded with `starter`, a **Run** button
  (spinner while running), and an output panel (stdout / stderr, error-tinted on failure).
- `CodeBlock.jsx` — read-only formatted snippet (monospace); a `runnable` one renders a CodeRunner.

**Lesson format:** reuse the 8-part lesson + `LessonPage`. Add ONE optional field:
`codeExamples: [{ language, caption, source, runnable }]`, rendered as a "🧪 Try it" section.
Schema validator stays backward-compatible (field optional; if present, each entry needs
`language` + `source`). Programming lessons flow: plain-English → 🧭 metaphor → concept
deep-dives → 🧪 runnable code → 📌 real-world usage → takeaways → ✦ knowledge check.

**Tracks:** add `python` and `java` to the content registry, each with its own accent token,
shown beside the existing tracks on the Dashboard and in the Header nav. Curriculum is authored
from per-module briefs (programming fundamentals are stable knowledge — no web-research pass
needed), one agent per module, validated against the schema, assembled deterministically.

## Content scope
- **Python (full, ~6 modules):** Getting Started · Control Flow · Data Structures · Functions ·
  Working with Data & Files · Python for AI. Runnable examples throughout.
- **Java (starter, ~2 modules):** Java Basics · Control Flow & Objects. Runnable examples.

## Testing
- `runCode` request/response mapping unit-tested with a **mocked `fetch`** (no network in CI):
  success → stdout; compile/runtime error → stderr; network failure → friendly `ok:false`.
- Render-smoke: a code lesson renders its "Try it" section; CodeRunner mounts.
- Content validation (every lesson + every codeExample valid); full `npm run build`.
- The live Piston round-trip verified manually once at the checkpoint.

## Out of scope (YAGNI)
No accounts, no syntax-highlight editor library (textarea first), no self-hosted runner,
no per-keystroke autosave of code. Java stays a starter this round.

## Build order
1. Infra (TDD): runCode, CodeRunner, CodeBlock, schema field, LessonPage "Try it", track/accent support.
2. Two seed lessons (1 Python, 1 Java) + register tracks → **checkpoint** (user runs code live).
3. Author full Python + Java starter via workflow; assemble; validate; build.
4. Finish branch.
