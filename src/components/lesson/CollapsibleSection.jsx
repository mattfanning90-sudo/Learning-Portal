import { useState } from 'react'

/* Accessible disclosure section. Tints: neutral | metaphor | pm | case.
   Open-by-default sections (plain English, metaphor) pass defaultOpen.        */

const TINT = {
  neutral: { border: 'var(--border)', summaryBg: 'var(--surface)', label: 'var(--text-muted)' },
  metaphor: { border: 'oklch(0.88 0.03 30)', summaryBg: 'var(--accent-light)', label: 'var(--accent)' },
  pm: { border: 'var(--blue-border)', summaryBg: 'var(--blue-bg)', label: 'var(--blue)' },
  case: { border: 'var(--green-border)', summaryBg: 'var(--green-bg)', label: 'var(--green)' },
}

export default function CollapsibleSection({
  variant = 'neutral', label, title, teaser, defaultOpen = false, children, id,
}) {
  const [open, setOpen] = useState(defaultOpen)
  const t = TINT[variant] || TINT.neutral
  return (
    <section
      id={id}
      style={{
        background: 'var(--surface)', border: `1px solid ${t.border}`,
        borderRadius: 'var(--radius-lg)', marginBottom: 14,
        boxShadow: 'var(--shadow-sm)', overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: '100%', textAlign: 'left', cursor: 'pointer', border: 'none',
          background: t.summaryBg, padding: '14px 18px', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}
      >
        <span style={{ minWidth: 0 }}>
          {label && (
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: t.label }}>
              {label}
            </span>
          )}
          {title && (
            <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {title}
            </span>
          )}
          {!open && teaser && (
            <span style={{ display: 'block', fontSize: '0.83rem', color: 'var(--text-muted)', marginTop: 3, fontWeight: 400 }}>
              {teaser}
            </span>
          )}
        </span>
        <span
          aria-hidden
          style={{
            flexShrink: 0, color: t.label, fontSize: '1.1rem', lineHeight: 1,
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease',
          }}
        >
          ＋
        </span>
      </button>
      {open && <div style={{ padding: '14px 18px 18px' }}>{children}</div>}
    </section>
  )
}

/* Shared paragraph renderer for lesson body arrays. */
export function Body({ paras }) {
  return (
    <>
      {paras.map((p, i) => (
        <p
          key={i}
          style={{
            fontSize: '0.97rem', color: 'var(--text-secondary)', lineHeight: 1.72,
            maxWidth: '64ch', marginBottom: i < paras.length - 1 ? 12 : 0,
          }}
          dangerouslySetInnerHTML={{ __html: inlineEmphasis(p) }}
        />
      ))}
    </>
  )
}

// Lightweight inline formatting for lesson prose: `code`, **strong**, *emphasis*.
// Code spans are split out first so their contents are never touched by emphasis.
const esc = (x) => x.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
function inlineEmphasis(s) {
  return s
    .split(/(`[^`]+`)/g)
    .map((part) => {
      if (part.startsWith('`') && part.endsWith('`') && part.length > 1) {
        return `<code style="font-family:ui-monospace,Menlo,Consolas,monospace;background:var(--surface-raised);border:1px solid var(--border);padding:1px 5px;border-radius:4px;font-size:0.88em">${esc(part.slice(1, -1))}</code>`
      }
      return esc(part)
        .replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text-primary);font-weight:600">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em style="color:var(--text-primary)">$1</em>')
    })
    .join('')
}
