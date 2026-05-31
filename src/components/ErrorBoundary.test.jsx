import { describe, it, expect } from 'vitest'
import { act } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './ErrorBoundary.jsx'

function Boom() {
  throw new Error('boom')
}

describe('ErrorBoundary', () => {
  it('renders the fallback instead of crashing when a child throws', () => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    // React also logs the caught error to console — expected noise, the test still passes.
    act(() => root.render(<ErrorBoundary><Boom /></ErrorBoundary>))
    expect(container.innerHTML).toContain('Something went off the map')
    act(() => root.unmount())
    container.remove()
  })

  it('renders children normally when nothing throws', () => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true
    const container = document.createElement('div')
    document.body.appendChild(container)
    const root = createRoot(container)
    act(() => root.render(<ErrorBoundary><p>all good</p></ErrorBoundary>))
    expect(container.innerHTML).toContain('all good')
    act(() => root.unmount())
    container.remove()
  })
})
