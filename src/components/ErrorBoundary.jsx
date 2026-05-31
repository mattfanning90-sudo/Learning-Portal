import { Component } from 'react'
import { captureError } from '../lib/observability.js'

/* Top-level guard: if any view throws while rendering, show a calm fallback instead
   of a blank white screen. Progress lives in localStorage, so a reload recovers. */
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Atlas render error:', error, info?.componentStack)
    captureError(error, info?.componentStack) // reports to Sentry when configured
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', padding: 24 }}>
        <div style={{ maxWidth: 440, textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '32px 28px', boxShadow: 'var(--shadow-float)' }}>
          <div style={{ fontSize: '2rem', marginBottom: 12 }} aria-hidden>🧭</div>
          <h1 className="serif" style={{ fontSize: '1.4rem', marginBottom: 10 }}>Something went off the map.</h1>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 20 }}>
            An unexpected error broke this view. Your progress is saved on this device — reloading usually fixes it.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{ background: 'var(--accent)', color: '#fff', border: 'none', fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 600, padding: '11px 24px', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
          >
            Reload
          </button>
        </div>
      </div>
    )
  }
}
