# Atlas Auth + Progress Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add optional Google + Apple sign-in (via Clerk) and sync each user's progress to a Railway Postgres database through a small Express API, while anonymous localStorage use keeps working.

**Architecture:** The existing Vite SPA gains Clerk for auth and a sync layer over `useProgress`. A new Express service (`server/`) on Railway serves the built `dist/` and an `/api` that verifies the Clerk JWT (Bearer) and reads/writes `user_progress` in Railway Postgres. Auth is token-based so it works cross-origin from Netlify too.

**Tech Stack:** Express, `pg`, `@clerk/express`, `cors` (backend); `@clerk/clerk-react` (frontend); Railway Postgres; vitest.

**Spec:** `docs/superpowers/specs/2026-05-30-auth-progress-sync-design.md`

---

## Phase 1 — Railway Postgres + API skeleton (no user input needed)

### Task 1: Backend dependencies + Express skeleton serving dist + /api/health

**Files:**
- Modify: `package.json` (deps + `start` script)
- Create: `server/index.js`

- [ ] **Step 1: Add backend deps and switch the start script**

In `package.json`, add to `dependencies` (remove `serve`):
```json
"express": "^4.21.2",
"cors": "^2.8.5",
"pg": "^8.13.1",
"@clerk/express": "^1.3.4"
```
Set the script: `"start": "node server/index.js"` (replacing the `serve` start).

- [ ] **Step 2: `npm install`** — Run: `npm install` · Expected: lockfile updates, no errors.

- [ ] **Step 3: Write `server/index.js`** (serves dist + health; routes added later)

```js
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const app = express()
const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')

const origins = (process.env.CORS_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean)
app.use(cors({ origin: origins.length ? origins : true }))
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => res.json({ ok: true }))

// API routes mounted here in Phase 3:
// app.use('/api/progress', progressRouter)

app.use(express.static(dist))
app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html'))) // SPA fallback

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Atlas server on :${port}`))
```

- [ ] **Step 4: Build + run locally, verify**

Run: `npm run build && PORT=3000 node server/index.js &` then
`curl -s localhost:3000/api/health` (expect `{"ok":true}`) and
`curl -s localhost:3000/ | grep -o '<title>[^<]*</title>'` (expect the Atlas title). Kill the server.

- [ ] **Step 5: Commit**
```bash
git add package.json package-lock.json server/index.js
git commit -m "feat: Express server serving dist + /api/health (replaces static serve)"
```

### Task 2: Provision Railway Postgres + deploy the API skeleton

**Files:** none (Railway config).

- [ ] **Step 1: Add Postgres to the Railway project**
Run: `railway add --database postgres` (creates a Postgres service in `atlas-portal`).
Expected: a Postgres service appears; it exposes `DATABASE_URL`.

- [ ] **Step 2: Reference DATABASE_URL + set CORS into the app service**
Run (from the linked repo dir):
```bash
railway variables --set "CORS_ORIGINS=https://learningatlas.netlify.app,https://atlas-portal-production-302b.up.railway.app" --set "NODE_ENV=production"
```
For `DATABASE_URL`, reference the Postgres service variable in the Railway dashboard (Service → Variables → add reference `DATABASE_URL = ${{Postgres.DATABASE_URL}}`), or via `railway variables --set "DATABASE_URL=${{Postgres.DATABASE_URL}}"`.

- [ ] **Step 3: Deploy + verify**
Run: `railway up --detach`, then poll `curl -s https://atlas-portal-production-302b.up.railway.app/api/health` until `{"ok":true}`. Confirm `/` still serves Atlas.

- [ ] **Step 4: Commit** (none — config only; note the change in the spec's status if needed.)

---

## Phase 2 — Clerk auth (frontend login + backend verify)

### Task 3: Clerk provider + login UI in the SPA

**Files:**
- Modify: `src/main.jsx`, `src/components/Header.jsx`
- Create: `src/components/AuthControls.jsx`

- [ ] **Step 1: Add the frontend dep** — `npm install @clerk/clerk-react@^5`

- [ ] **Step 2: Wrap the app in `ClerkProvider`** (`src/main.jsx`)
```jsx
import { ClerkProvider } from '@clerk/clerk-react'
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// ...
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkKey} afterSignOutUrl="/">
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </HashRouter>
    </ClerkProvider>
  </StrictMode>,
)
```
If `clerkKey` is undefined (e.g. local dev without a key), render without `ClerkProvider` so the app still boots — guard:
```jsx
const Tree = (
  <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><App /></HashRouter>
)
createRoot(document.getElementById('root')).render(
  <StrictMode>{clerkKey ? <ClerkProvider publishableKey={clerkKey} afterSignOutUrl="/">{Tree}</ClerkProvider> : Tree}</StrictMode>,
)
```

- [ ] **Step 3: Create `src/components/AuthControls.jsx`** — sign-in button when out, user menu when in. Uses Clerk's `<SignedIn>/<SignedOut>/<SignInButton>/<UserButton>`. No-ops gracefully if Clerk isn't configured (wrap in a try/`useClerk` presence check via `import.meta.env.VITE_CLERK_PUBLISHABLE_KEY`).

```jsx
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
const enabled = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
export default function AuthControls() {
  if (!enabled) return null
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <SignedOut>
        <SignInButton mode="modal">
          <button style={{ background: 'var(--accent)', color: '#fff', border: 'none', fontFamily: 'inherit', fontSize: '0.8rem', fontWeight: 600, padding: '6px 14px', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>Sign in</button>
        </SignInButton>
      </SignedOut>
      <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
    </span>
  )
}
```

- [ ] **Step 4: Render `<AuthControls/>` in the Header** (replace the static `MF` avatar area). Verify with `npm run dev` + a temporary test key, or that it renders nothing when no key (no crash).

- [ ] **Step 5: Commit** — `git commit -am "feat: Clerk provider + sign-in/user-button in header (no-op without key)"`

### Task 4: Backend Clerk verification middleware

**Files:**
- Create: `server/auth.js`
- Modify: `server/index.js`

- [ ] **Step 1: Write `server/auth.js`**
```js
import { clerkMiddleware, getAuth } from '@clerk/express'
export const clerk = clerkMiddleware() // reads CLERK_SECRET_KEY / CLERK_PUBLISHABLE_KEY from env
// requireUser: 401 unless a valid Clerk session; attaches req.userId
export function requireUser(req, res, next) {
  const { userId } = getAuth(req)
  if (!userId) return res.status(401).json({ error: 'unauthenticated' })
  req.userId = userId
  next()
}
```

- [ ] **Step 2: Mount `clerk` middleware in `server/index.js`** before the `/api` routes:
```js
import { clerk } from './auth.js'
app.use(clerk)
```

- [ ] **Step 3: Verify** the server still boots and `/api/health` works without auth. (Full auth verified in Phase 5 with a real Clerk key.)

- [ ] **Step 4: Commit** — `git commit -am "feat: Clerk JWT verification middleware on the API"`

---

## Phase 3 — Progress sync (DB, endpoints, merge)

### Task 5: Postgres access + migration (TDD on data-access)

**Files:**
- Create: `server/db.js`, `server/progress.js`, `server/progress.test.js`

- [ ] **Step 1: Write the failing test `server/progress.test.js`** (fake pool records the query + returns canned rows)
```js
import { describe, it, expect } from 'vitest'
import { getProgress, saveProgress } from './progress.js'

const fakePool = (rows = []) => { const calls = []; return { calls, query: async (text, params) => { calls.push({ text, params }); return { rows } } } }

describe('progress data access', () => {
  it('returns {} when the user has no row', async () => {
    expect(await getProgress(fakePool([]), 'u1')).toEqual({})
  })
  it('returns the stored data blob', async () => {
    expect(await getProgress(fakePool([{ data: { completed: { a: 1 } } }]), 'u1')).toEqual({ completed: { a: 1 } })
  })
  it('upserts by user_id and passes the data', async () => {
    const pool = fakePool([{ updated_at: 't' }])
    const r = await saveProgress(pool, 'u1', { completed: { a: 1 } })
    expect(pool.calls[0].params[0]).toBe('u1')
    expect(JSON.parse(pool.calls[0].params[1])).toEqual({ completed: { a: 1 } })
    expect(r.updatedAt).toBe('t')
  })
})
```

- [ ] **Step 2: Run, verify fail** — `npm test -- server/progress` → FAIL.

- [ ] **Step 3: Implement `server/progress.js`**
```js
export async function getProgress(pool, userId) {
  const { rows } = await pool.query('SELECT data FROM user_progress WHERE user_id = $1', [userId])
  return rows[0]?.data || {}
}
export async function saveProgress(pool, userId, data) {
  const { rows } = await pool.query(
    `INSERT INTO user_progress (user_id, data, updated_at) VALUES ($1, $2, now())
     ON CONFLICT (user_id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()
     RETURNING updated_at`,
    [userId, JSON.stringify(data)]
  )
  return { updatedAt: rows[0]?.updated_at }
}
```

- [ ] **Step 4: Implement `server/db.js`** (pool + idempotent migration)
```js
import pg from 'pg'
export const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false } })
export async function migrate() {
  await pool.query(`CREATE TABLE IF NOT EXISTS user_progress (
    user_id TEXT PRIMARY KEY, data JSONB NOT NULL DEFAULT '{}', updated_at TIMESTAMPTZ NOT NULL DEFAULT now())`)
}
```

- [ ] **Step 5: Run, verify pass** — `npm test -- server/progress` → PASS. **Commit.**

### Task 6: Progress routes + wire into the server

**Files:**
- Modify: `server/index.js`

- [ ] **Step 1: Add the routes in `server/index.js`** (after `app.use(clerk)`)
```js
import { pool, migrate } from './db.js'
import { requireUser } from './auth.js'
import { getProgress, saveProgress } from './progress.js'

app.get('/api/progress', requireUser, async (req, res) => {
  res.json({ data: await getProgress(pool, req.userId) })
})
app.put('/api/progress', requireUser, async (req, res) => {
  const data = req.body?.data
  if (typeof data !== 'object' || data === null) return res.status(400).json({ error: 'bad data' })
  res.json({ ok: true, ...(await saveProgress(pool, req.userId, data)) })
})
```
And run `migrate()` on boot (before `app.listen`), tolerating no-DB in local dev:
```js
migrate().catch((e) => console.warn('migrate skipped:', e.message))
```

- [ ] **Step 2: Verify** server boots; `/api/progress` returns 401 without auth (`curl -s -o /dev/null -w "%{http_code}" localhost:3000/api/progress` → 401). **Commit.**

### Task 7: `mergeProgress` (pure, TDD)

**Files:**
- Create: `src/lib/mergeProgress.js`, `src/lib/mergeProgress.test.js`

- [ ] **Step 1: Write the failing test**
```js
import { describe, it, expect } from 'vitest'
import { mergeProgress } from './mergeProgress.js'

describe('mergeProgress', () => {
  it('unions completed, keeping the earliest timestamp', () => {
    const m = mergeProgress({ completed: { a: 5 } }, { completed: { a: 9, b: 2 } })
    expect(m.completed).toEqual({ a: 5, b: 2 })
  })
  it('keeps the longer note on conflict', () => {
    const m = mergeProgress({ notes: { l1: 'short' } }, { notes: { l1: 'a much longer note' } })
    expect(m.notes.l1).toBe('a much longer note')
  })
  it('lets a passed challenge/quiz win over absent', () => {
    const m = mergeProgress({ challenge: { l1: { passed: true } } }, {})
    expect(m.challenge.l1).toEqual({ passed: true })
  })
  it('prefers server settings, falling back to local', () => {
    expect(mergeProgress({ settings: { gateComplete: true } }, {}).settings.gateComplete).toBe(true)
    expect(mergeProgress({ settings: { gateComplete: false } }, { settings: { gateComplete: true } }).settings.gateComplete).toBe(true)
  })
})
```

- [ ] **Step 2: Run, verify fail** — `npm test -- mergeProgress` → FAIL.

- [ ] **Step 3: Implement `src/lib/mergeProgress.js`**
```js
// Merge two progress blobs favouring "more progress". Both shapes:
// { completed:{id:ts}, notes:{id:text}, quiz:{id:obj}, challenge:{id:obj}, settings:{...} }
export function mergeProgress(local = {}, server = {}) {
  const minTs = (a, b) => (a == null ? b : b == null ? a : Math.min(a, b))
  const completed = { ...server.completed }
  for (const [k, v] of Object.entries(local.completed || {})) completed[k] = minTs(completed[k], v)

  const notes = { ...server.notes }
  for (const [k, v] of Object.entries(local.notes || {})) {
    if (!notes[k] || (v || '').length > (notes[k] || '').length) notes[k] = v
  }
  const unionObj = (a = {}, b = {}) => ({ ...a, ...b }) // server wins on conflict; presence wins over absence
  return {
    completed,
    notes,
    quiz: unionObj(local.quiz, server.quiz),
    challenge: unionObj(local.challenge, server.challenge),
    settings: { ...(local.settings || {}), ...(server.settings || {}) },
  }
}
```

- [ ] **Step 4: Run, verify pass.** **Commit.**

### Task 8: Sync layer + `useProgress` integration

**Files:**
- Create: `src/lib/sync.js`
- Modify: `src/lib/useProgress.js`, `src/App.jsx` (mount a `<ProgressSync/>` effect component)

- [ ] **Step 1: `src/lib/sync.js`** — pull/push helpers
```js
const API = import.meta.env.VITE_API_URL || ''
export async function pullProgress(getToken) {
  const token = await getToken()
  const r = await fetch(`${API}/api/progress`, { headers: { Authorization: `Bearer ${token}` } })
  if (!r.ok) throw new Error(`pull ${r.status}`)
  return (await r.json()).data || {}
}
export async function pushProgress(getToken, data) {
  const token = await getToken()
  await fetch(`${API}/api/progress`, { method: 'PUT', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ data }) })
}
```

- [ ] **Step 2: Add `store.exportAll()` / `store.importAll(blob)`** to `src/lib/useProgress.js` (read/write all namespaced keys at once) so sync can snapshot and apply merged progress:
```js
exportAll: () => ({ completed: read('completed', {}), notes: read('notes', {}), quiz: read('quiz', {}), challenge: read('challenge', {}), settings: read('settings', {}) }),
importAll(blob) { for (const k of ['completed', 'notes', 'quiz', 'challenge', 'settings']) if (blob[k]) write(k, blob[k]) },
```

- [ ] **Step 3: `<ProgressSync/>` effect component** (e.g. in `src/App.jsx` or a new `src/components/ProgressSync.jsx`): when Clerk `isSignedIn`, on mount pull → `mergeProgress(store.exportAll(), server)` → `store.importAll(merged)` + `pushProgress(merged)`; then subscribe to store changes and debounced-push. Guard so it does nothing when Clerk is disabled/signed out.
```jsx
import { useEffect, useRef } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { store } from '../lib/useProgress.js'
import { pullProgress, pushProgress } from '../lib/sync.js'
import { mergeProgress } from '../lib/mergeProgress.js'
export default function ProgressSync() {
  const { isSignedIn, getToken } = useAuth()
  const timer = useRef(null)
  useEffect(() => {
    if (!isSignedIn) return
    let off
    ;(async () => {
      try {
        const server = await pullProgress(getToken)
        const merged = mergeProgress(store.exportAll(), server)
        store.importAll(merged)
        await pushProgress(getToken, merged)
      } catch (e) { console.warn('sync init failed', e) }
      off = store.subscribe?.(() => {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => pushProgress(getToken, store.exportAll()).catch(() => {}), 1000)
      })
    })()
    return () => { clearTimeout(timer.current); off && off() }
  }, [isSignedIn]) // eslint-disable-line
  return null
}
```
(Expose `store.subscribe` from `useProgress.js` if not already exported.)

- [ ] **Step 4: Render `<ProgressSync/>`** once inside `App` (only when Clerk enabled). Verify build + the full test suite stays green: `npm test` (expect prior 62 + new tests). **Commit.**

---

## Phase 4 — Variable configuration + provider setup (with you)

> These steps need values only the user can create. The agent prepares everything and walks the user through each console.

- [ ] **Task 9: Create the Clerk application** (user, guided): sign in to Clerk → create app "Atlas" → copy the **Publishable** + **Secret** keys.
- [ ] **Task 10: Enable Google** in Clerk → SSO Connections → Google. For production, create a Google OAuth client in the GCP project (`gcloud`/Console) with Clerk's redirect URL; paste client id/secret into Clerk.
- [ ] **Task 11: Enable Apple** in Clerk → SSO Connections → Apple. In the Apple Developer portal create a Services ID + Sign-in key (`.p8`) + note Team/Key IDs; paste into Clerk; add the domains.
- [ ] **Task 12: Set Clerk allowed origins/redirects** to `https://learningatlas.netlify.app` and `https://atlas-portal-production-302b.up.railway.app`.
- [ ] **Task 13: Set env vars** (agent does this once keys are provided):
  - Railway: `railway variables --set "VITE_CLERK_PUBLISHABLE_KEY=pk_..." --set "CLERK_SECRET_KEY=sk_..." --set "VITE_API_URL=https://atlas-portal-production-302b.up.railway.app"`
  - Netlify: `netlify env:set VITE_CLERK_PUBLISHABLE_KEY pk_...` ; `netlify env:set VITE_API_URL https://atlas-portal-production-302b.up.railway.app`

---

## Phase 5 — Test + deploy + verify

- [ ] **Task 14: Redeploy** — `railway up --detach` (full-stack) ; `netlify deploy --prod --build` (or git push). Poll `/api/health`.
- [ ] **Task 15: Verify auth + sync end-to-end** — sign in with Google (and Apple) on the deployed site; complete a lesson; confirm a `user_progress` row exists (`railway connect Postgres` → `SELECT user_id, updated_at FROM user_progress;`); sign in on another browser and confirm progress appears.
- [ ] **Task 16: Finish** — full `npm test` green, then finish the branch via the finishing-a-development-branch skill.

---

## Self-Review (author)

- **Spec coverage:** Clerk login UI (Task 3) · backend JWT verify (Task 4) · Railway Postgres (Task 2) · schema/migration (Task 5) · `GET/PUT /api/progress` (Task 6) · `mergeProgress` rules (Task 7) · `useProgress` sync layer (Task 8) · all env vars (Task 13) · provider setup (Tasks 9–12) · Express-serves-dist + token-auth cross-origin (Task 1) · deploy + verify (Tasks 14–15) · tests incl. existing 62 (Tasks 5,7,8,16). All spec sections mapped.
- **Placeholder scan:** Pure/testable units (server data-access, `mergeProgress`, server skeleton, sync) have full code. Phase-4 tasks are console steps requiring user-created secrets — described precisely, no code to inline.
- **Type consistency:** `getProgress(pool,userId)`/`saveProgress(pool,userId,data)` signatures match Task 5↔6; progress blob shape (`completed/notes/quiz/challenge/settings`) consistent across `useProgress.exportAll`, `mergeProgress`, and the DB `data` column; `pullProgress/pushProgress(getToken,...)` consistent Task 8.
