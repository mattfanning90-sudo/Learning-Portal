import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { atlas } from '../lib/atlas.js'

const LINKS = [
  { to: '/', label: 'Dashboard', end: true },
  ...atlas.tracks.map((t) => ({ to: `/track/${t.id}`, label: t.title })),
  { to: '/glossary', label: 'Glossary' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const linkStyle = ({ isActive }) => ({
    padding: '6px 14px', borderRadius: 'var(--radius-sm)', fontSize: '0.83rem', textDecoration: 'none',
    fontFamily: 'inherit', color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
    background: isActive ? 'var(--accent-light)' : 'transparent', fontWeight: isActive ? 600 : 400,
  })

  return (
    <header style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 32px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect width="22" height="22" rx="6" fill="oklch(0.52 0.19 30)" /><path d="M7 7h4.5a3 3 0 0 1 0 6H7V7z" fill="#fff" opacity="0.9" /><path d="M11 13h.5a2.5 2.5 0 0 1 0 5H7v-5h4z" fill="#fff" opacity="0.6" /></svg>
          <span className="serif" style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}>Atlas</span>
        </Link>

        <nav style={{ display: 'flex', gap: 4 }} className="atlas-nav-desktop">
          {LINKS.map((l) => <NavLink key={l.to} to={l.to} end={l.end} style={linkStyle}>{l.label}</NavLink>)}
        </nav>

        <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="atlas-nav-toggle" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem' }}>≡</button>
      </div>

      {open && (
        <nav className="atlas-nav-mobile" style={{ borderTop: '1px solid var(--border)', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {LINKS.map((l) => <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)} style={linkStyle}>{l.label}</NavLink>)}
        </nav>
      )}

      <style>{`
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
