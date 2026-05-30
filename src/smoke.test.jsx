import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'

// Tell React this is a proper act() environment (silences the act warning).
globalThis.IS_REACT_ACT_ENVIRONMENT = true

// Renders the whole app tree client-side (the real path) into jsdom and
// returns the resulting HTML, so effects, the store, and routing all run.
let container, root
beforeEach(() => {
  localStorage.clear()
  window.scrollTo = () => {} // jsdom doesn't implement it
  container = document.createElement('div')
  document.body.appendChild(container)
  root = createRoot(container)
})
afterEach(() => {
  act(() => root.unmount())
  container.remove()
})

const renderAt = (path) => {
  act(() => {
    root.render(
      <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>
    )
  })
  return container.innerHTML
}

describe('app smoke test (whole tree mounts client-side)', () => {
  it('renders the dashboard', () => {
    const html = renderAt('/')
    expect(html).toContain('Become a great AI engineer')
    expect(html).toContain('Atlas')
  })
  it('renders a track page', () => {
    const html = renderAt('/track/engineering')
    expect(html).toContain('AI Engineering')
    expect(html).toContain('What an LLM Actually Is')
  })
  it('renders a lesson page with its 8 parts', () => {
    const html = renderAt('/lesson/eng-m1-l1')
    expect(html).toContain('The core idea')
    expect(html).toContain('In plain English')
    expect(html).toContain('Think of it like')
    expect(html).toContain('Case study')
    expect(html).toContain('Check your understanding')
    expect(html).toContain('Mark complete')
  })
  it('renders the glossary', () => {
    const html = renderAt('/glossary')
    expect(html).toContain('Token')
  })
})
