import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import ProgressSync from './components/ProgressSync.jsx'

// Route-level code-splitting: each page (and its heavy children — the diagram, the
// Wandbox runner, the challenge editor) loads on demand instead of in the initial bundle.
const Dashboard = lazy(() => import('./components/Dashboard.jsx'))
const TrackPage = lazy(() => import('./components/TrackPage.jsx'))
const LessonPage = lazy(() => import('./components/lesson/LessonPage.jsx'))
const Glossary = lazy(() => import('./components/Glossary.jsx'))

const clerkEnabled = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function RouteFallback() {
  return <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: 40, color: 'var(--text-muted)' }}>Loading…</div>
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Skip link: onClick (not raw href) so HashRouter doesn't treat #main as a route. */}
      <a href="#main" className="skip-link" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }}>
        Skip to content
      </a>
      {clerkEnabled && <ProgressSync />}
      <Header />
      <main id="main" tabIndex={-1} style={{ outline: 'none' }}>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/track/:trackId" element={<TrackPage />} />
            <Route path="/lesson/:lessonId" element={<LessonPage />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
