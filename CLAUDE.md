# CLAUDE.md

**Full project context lives in [AGENTS.md](AGENTS.md) — read it first.** It covers the
architecture, the lesson data model, the content/authoring pipeline, the Wandbox code runner,
testing, and the gotchas.

The essentials, so you don't trip over them:

1. **Content is data.** Lessons are plain objects under `src/content/`, rendered by one
   `LessonPage`. To add/change content, edit data — not markup.
2. **Keep `npm test` green** before claiming anything works. For "does it actually run in a
   browser?", verify against `npm run preview` (production build), not the dev server.
3. **Don't restart the dev server out of habit.** HMR updates live; restarting strands the
   user's open tab and *looks* broken when it isn't — hard-refresh instead. (See Gotchas.)
4. **Writing style is the bar**: short one-idea sentences, each new term on its own line via
   `keyTerms`, `` `backticks` `` for code, a concrete metaphor + a real case study, no
   unexplained jargon. Copy the seed lessons.
5. **Reuse Lumen design tokens** (`oklch` CSS variables in `src/index.css`) — don't hard-code hex.
