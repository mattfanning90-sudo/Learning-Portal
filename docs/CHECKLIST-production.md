# Production readiness — your checklist

The **code** for everything below is already wired and ships dormant; each item turns on
only when you complete the dashboard/account step and set the matching env var. None of
this is needed for the app to run — it's the "A+ security & observability" layer.

---

## 1. Promote Clerk dev → production instance (security)
The live site currently uses a Clerk **development** instance (you'll see a "Development
mode" badge on the sign-in modal; dev instances have user caps + shared OAuth creds).

- [ ] In the **Clerk dashboard**, create a **Production** instance for the app.
- [ ] Add your domain to the production instance (Clerk gives you DNS records — CNAMEs for
      `clerk.`, `accounts.`, etc.). Add them at your DNS provider and wait for verification.
- [ ] Copy the **production** keys (`pk_live_…`, `sk_live_…`).
- [ ] Set on **Railway** (`atlas-portal` service): `VITE_CLERK_PUBLISHABLE_KEY=pk_live_…`,
      `CLERK_PUBLISHABLE_KEY=pk_live_…`, `CLERK_SECRET_KEY=sk_live_…`.
- [ ] Set on **Netlify**: `VITE_CLERK_PUBLISHABLE_KEY=pk_live_…` (publishable only — never the secret).
- [ ] Redeploy both. Verify sign-in shows no "Development mode" badge.

## 2. Custom domain (optional, pairs with #1)
- [ ] Point a custom domain at Railway (Railway → service → Settings → Domains; it issues TLS).
      Update `CORS_ORIGINS` + Clerk allowed origins to match.

## 3. Error tracking — Sentry (resilience/observability)
Code is wired (`src/lib/observability.js`; the ErrorBoundary already reports to it).

- [ ] Create a **Sentry** project (React).
- [ ] Set `VITE_SENTRY_DSN=…` on **Netlify** and **Railway**, then redeploy.
- [ ] Trigger a test error; confirm it appears in Sentry.

## 4. Product analytics — PostHog (the measurement Gordon wanted)
Code is wired (`src/lib/observability.js`).

- [ ] Create a **PostHog** project; copy the project API key (`phc_…`).
- [ ] Set `VITE_POSTHOG_KEY=phc_…` (and `VITE_POSTHOG_HOST` if EU) on **Netlify** + **Railway**, redeploy.
- [ ] Confirm pageviews land in PostHog. Then instrument the North-Star event
      (e.g. `lesson_completed`) — that's the data the backlog's "where do learners drop off" needs.

---

### Already done in code (no action needed)
CI (lint → typecheck → test → build), ESLint/Prettier, ErrorBoundary, helmet + rate-limiting,
JSON API error handler, route code-splitting, WCAG-AA accessibility, JSDoc + `checkJs`,
build chunking, `.env` gitignored. See `AGENTS.md`.
