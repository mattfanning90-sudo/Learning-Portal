---
name: Atlas — Auth (Google + Apple via Clerk) + Postgres progress sync
status: approved design
date: 2026-05-30
---

# Atlas Auth + Progress Sync — Design

Turn Atlas from a static SPA into a full-stack app: optional sign-in with **Google + Apple**
(via **Clerk**), a **Railway Postgres** database storing each user's progress, and a small
**backend API** that ties them together. Anonymous use still works; signing in syncs progress
across devices.

## Architecture

```
Atlas SPA  (Netlify static  +  Railway)
  ├─ @clerk/clerk-react → hosted Google/Apple sign-in → session JWT
  └─ fetch  →  Atlas API  (new Railway service, Express)
                 ├─ verifies the Clerk JWT (Bearer) on every request
                 └─ pg → Railway Postgres  (user_progress)
```

Auth is **token-based** (the SPA sends Clerk's session JWT as `Authorization: Bearer`), so the
API works cross-origin from both the Netlify and Railway frontends. The Railway service also
serves the built `dist/`, so Railway is a self-contained full-stack deployment.

## Components

1. **Frontend (existing Vite SPA, additive changes)**
   - `<ClerkProvider>` in `main.jsx` (publishable key from `VITE_CLERK_PUBLISHABLE_KEY`).
   - A **login page** + header controls: Clerk `<SignIn>` / `<SignInButton>` and `<UserButton>`,
     Google + Apple enabled.
   - `src/lib/sync.js` — pull/push progress to `${VITE_API_URL}/api/progress` using Clerk's
     `getToken()`. Pure `mergeProgress(local, server)` for the merge.
   - `useProgress` gains a sync layer: signed-in → pull+merge on login, debounced push on change;
     signed-out → unchanged (localStorage only).

2. **Backend API — new Railway service (`server/`)**
   - Express app. Files: `server/index.js` (serve `dist` + mount `/api` + SPA fallback),
     `server/db.js` (pg pool + idempotent migration), `server/auth.js` (Clerk verify middleware),
     `server/progress.js` (routes).
   - Endpoints:
     - `GET  /api/health` — no auth; for deploy checks.
     - `GET  /api/progress` — auth; returns `{ data, updatedAt }` (empty `{}` if none).
     - `PUT  /api/progress` — auth; body `{ data }`; upserts; returns `{ ok, updatedAt }`.
   - Auth: `@clerk/express` (or `@clerk/backend`) verifies the JWT and yields `userId`. The API
     **never trusts a client-supplied user id** — only the verified one.
   - CORS: explicit allowlist (Netlify + Railway origins) from `CORS_ORIGINS`.
   - `start` script becomes `node server/index.js`; Vite still builds `dist` in the build phase.
     (`serve` is dropped.)

3. **Database — Railway Postgres**
   ```sql
   CREATE TABLE IF NOT EXISTS user_progress (
     user_id    TEXT PRIMARY KEY,
     data       JSONB NOT NULL DEFAULT '{}',
     updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
   );
   ```
   One row per user; `data` is the existing progress blob (`completed`, `notes`, `quiz`,
   `challenge`, `settings`). Matches today's localStorage shape — simplest correct model (YAGNI).
   Migration runs on server start (`CREATE TABLE IF NOT EXISTS`).

## Progress sync (optional login)

- **Anonymous:** `useProgress` works exactly as now (localStorage only).
- **On sign-in:** pull server `data`, compute `mergeProgress(local, server)`, write merged to both
  localStorage and the server. `mergeProgress` rules:
  - `completed`: union of ids (keep earliest timestamp on conflict).
  - `quiz` / `challenge`: union; a `passed:true` / answered result wins over absent.
  - `notes`: per lesson, keep the **longer** text (proxy for "more work"); ties → server.
  - `settings`: prefer server (most recently chosen device), fall back to local.
- **On change while signed in:** debounced (~1s) `PUT /api/progress`.
- **On sign-out:** stop syncing; localStorage remains.

## Variable configuration (I do all of this)

| Variable | Where | Notes |
|---|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Railway service + Netlify build | public (safe in frontend) |
| `VITE_API_URL` | Railway service + Netlify build | the Railway API origin |
| `CLERK_SECRET_KEY` | Railway service (backend only) | secret — provided via env/file, never chat |
| `DATABASE_URL` | Railway service (backend only) | referenced from the Railway Postgres plugin |
| `CORS_ORIGINS` | Railway service | comma-list of allowed frontend origins |
| `NODE_ENV` | Railway service | `production` |

**You create (I guide you step by step):**
1. A **Clerk application** (free tier).
2. In Clerk, enable **Google** (using a Google OAuth client — creatable in your GCP project) and
   **Apple** (Services ID + `.p8` key + Team/Key IDs from your Apple Developer portal).
3. Set Clerk **allowed origins / redirect URLs** to the Netlify + Railway domains.
   You paste these into the Clerk dashboard and hand me the publishable + secret keys via a file/env.

## Deployment

- **Railway** `atlas-portal` service becomes the full-stack app (build Vite → run Express). Add a
  **Postgres** database to the project; reference `DATABASE_URL` into the service; set the Clerk +
  CORS + node vars.
- **Netlify** stays a static frontend; set `VITE_CLERK_PUBLISHABLE_KEY` + `VITE_API_URL` (→ Railway
  API). It signs in via Clerk and calls the Railway API (allowed via CORS).

## Testing

- **Backend (TDD):** progress routes with a mocked `pg` + injected fake `userId` (get returns
  empty then the upserted blob; auth rejects missing/invalid token). `GET /api/health` returns ok.
- **Frontend:** `mergeProgress` is pure → unit-tested (union completed, passed-wins, longer-note,
  settings precedence). Sync trigger tested with a mocked token/fetch.
- The existing **62 tests stay green**.
- **Manual/headless:** login page renders; health endpoint live; a signed-in pull→push round-trips
  (using a Clerk test session where feasible).

## Build order (phased, each shippable)

1. Railway **Postgres** + **API skeleton** (Express serves `dist` + `/api/health`) → deploy + verify.
2. **Clerk** in the SPA — login page + Google/Apple; backend JWT verification middleware.
3. **Progress sync** — schema/migration, `GET/PUT /api/progress`, `mergeProgress`, `useProgress` layer.
4. **Variable configuration** across Railway + Netlify, and the Clerk/Google/Apple console setup (with you).
5. **Test + deploy + verify** a real sign-in and cross-device sync.

## Security

- Clerk **secret** key and `DATABASE_URL` live only on the backend service. Publishable key is public.
- Every `/api` data request is authorized by the **verified** Clerk `userId`; progress is row-scoped to it.
- CORS is an explicit origin allowlist. Secrets are set as service vars / `.env` (gitignored), never committed.

## Out of scope (now)

Email/password auth, multi-table normalized progress, admin dashboards, account deletion UI
(Clerk provides a user profile), and social providers beyond Google/Apple.
