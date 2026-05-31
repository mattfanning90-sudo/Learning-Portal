// Optional observability: Sentry (error tracking) + PostHog (product analytics).
// Both stay completely OFF unless their env var is set, so local dev and signed-out
// users pay nothing (the SDKs load as gated, lazy chunks). Turning them on is a
// dashboard/account step — see docs/CHECKLIST-production.md.
let sentry = null

export async function initObservability() {
  const dsn = import.meta.env.VITE_SENTRY_DSN
  if (dsn) {
    const Sentry = await import('@sentry/react')
    Sentry.init({ dsn, tracesSampleRate: 0.1, replaysSessionSampleRate: 0 })
    sentry = Sentry
  }
  const phKey = import.meta.env.VITE_POSTHOG_KEY
  if (phKey) {
    const { default: posthog } = await import('posthog-js')
    posthog.init(phKey, { api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com', capture_pageview: true })
  }
}

/** Report a caught error to Sentry when configured; no-op otherwise. */
export function captureError(error, componentStack) {
  if (sentry) sentry.captureException(error, componentStack ? { extra: { componentStack } } : undefined)
}
