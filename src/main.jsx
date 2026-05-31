import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { initObservability } from './lib/observability.js'

// Error tracking + analytics — no-ops unless their env vars are set (see CHECKLIST).
initObservability()

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const tree = (
  <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App />
  </HashRouter>
)

// Without a Clerk key (e.g. local dev), boot the app unauthenticated so nothing breaks.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      {clerkKey
        ? <ClerkProvider publishableKey={clerkKey} afterSignOutUrl="/">{tree}</ClerkProvider>
        : tree}
    </ErrorBoundary>
  </StrictMode>,
)
