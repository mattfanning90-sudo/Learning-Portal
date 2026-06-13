import { useState, useRef, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { atlas } from '../lib/atlas.js'
import AuthControls from './AuthControls.jsx'

// Tracks live behind a "Courses ▾" dropdown so the bar doesn't overflow as the
// catalogue grows. Dashboard + Glossary stay as top-level links.
const TRACKS = atlas.tracks.map((t) => ({ to: `/track/${t.id}`, label: t.title, accent: t.accentVar || 'var(--accent)' }))
const MOBILE_LINKS = [
  { to: '/', label: 'Dashboard', end: true },
  ...TRACKS.map(({ to, label }) => ({ to, label })),
  { to: '/glossary', label: 'Glossary' },
]

const linkStyle = ({ isActive }) => ({
  padding: '6px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.83rem', textDecoration: 'none',
  fontFamily: 'inherit', color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
  background: isActive ? 'var(--accent-light)' : 'transparent', fontWeight: isActive ? 600 : 400,
})

export default function Header() {
  const [open, setOpen] = useState(false) // mobile menu
  const [coursesOpen, setCoursesOpen] = useState(false) // desktop dropdown
  const coursesRef = useRef(null)
  const location = useLocation()
  const onTrack = location.pathname.startsWith('/track/')

  // Close the dropdown on click-outside or Escape.
  useEffect(() => {
    if (!coursesOpen) return
    const onDoc = (e) => { if (coursesRef.current && !coursesRef.current.contains(e.target)) setCoursesOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') setCoursesOpen(false) }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey) }
  }, [coursesOpen])

  return (
    <header style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 32px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect width="22" height="22" rx="6" fill="oklch(0.52 0.19 30)" /><path d="M7 7h4.5a3 3 0 0 1 0 6H7V7z" fill="#fff" opacity="0.9" /><path d="M11 13h.5a2.5 2.5 0 0 1 0 5H7v-5h4z" fill="#fff" opacity="0.6" /></svg>
          <span className="serif" style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}>Atlas</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <nav aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="atlas-nav-desktop">
            <NavLink to="/" end style={linkStyle}>Dashboard</NavLink>

            <div ref={coursesRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setCoursesOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={coursesOpen}
                style={{
                  display: 'flex', alignItems: 'center', gap: 5, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  padding: '6px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.83rem',
                  color: onTrack ? 'var(--accent)' : 'var(--text-secondary)',
                  background: onTrack || coursesOpen ? 'var(--accent-light)' : 'transparent',
                  fontWeight: onTrack ? 600 : 400,
                }}
              >
                Courses
                <span aria-hidden style={{ fontSize: '0.7em', transform: coursesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s ease' }}>▾</span>
              </button>

              {coursesOpen && (
                <div
                  role="menu"
                  aria-label="Courses"
                  style={{
                    position: 'absolute', top: 'calc(100% + 6px)', right: 0, minWidth: 232,
                    background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-float)', padding: 6, zIndex: 200,
                  }}
                >
                  {TRACKS.map((t) => (
                    <NavLink
                      key={t.to}
                      to={t.to}
                      role="menuitem"
                      className="atlas-course-item"
                      onClick={() => setCoursesOpen(false)}
                      style={({ isActive }) => ({
                        display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'inherit', whiteSpace: 'nowrap',
                        color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                        background: isActive ? 'var(--accent-light)' : 'transparent',
                        fontWeight: isActive ? 600 : 400,
                      })}
                    >
                      <span aria-hidden style={{ width: 8, height: 8, borderRadius: '50%', background: t.accent, flexShrink: 0 }} />
                      {t.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/glossary" style={linkStyle}>Glossary</NavLink>
          </nav>
          <AuthControls />
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open} aria-controls="mobile-nav" className="atlas-nav-toggle" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem' }}>≡</button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="atlas-nav-mobile" style={{ borderTop: '1px solid var(--border)', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {MOBILE_LINKS.map((l) => <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)} style={linkStyle}>{l.label}</NavLink>)}
        </nav>
      )}

      <style>{`
        .atlas-course-item:hover { background: var(--tag-bg) !important; }
        @media (max-width: 768px) {
          .atlas-nav-desktop { display: none !important; }
          .atlas-nav-toggle { display: block !important; }
        }
        @media (min-width: 769px) {
          .atlas-nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
