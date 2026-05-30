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
  it('renders a newly-authored engineering lesson (Responsible AI addition)', () => {
    const html = renderAt('/lesson/eng-m5-l5')
    expect(html).toContain('The core idea')
    expect(html).toContain('Check your understanding')
  })
  it('renders a newly-authored product lesson (Growth & GTM addition)', () => {
    const html = renderAt('/lesson/prod-m6-l6')
    expect(html).toContain('The core idea')
    expect(html).toContain('Mark complete')
  })
  it('dashboard shows the settings toggle and progress-saved note', () => {
    const html = renderAt('/')
    expect(html).toContain('Require quiz answers before completing a lesson')
    expect(html).toContain('saved automatically on this device')
  })
  it('track page offers the module quiz', () => {
    const html = renderAt('/track/engineering')
    expect(html).toContain('Take the module quiz')
  })
  it('completion gate shows a hint when the setting is on and questions are unanswered', () => {
    localStorage.setItem('atlas:v1:settings', JSON.stringify({ gateComplete: true }))
    const html = renderAt('/lesson/eng-m1-l2')
    expect(html).toContain('to mark complete')
  })
  it('renders the Python track', () => {
    const html = renderAt('/track/python')
    expect(html).toContain('Python')
    expect(html).toContain('Getting Started')
  })
  it('renders a Python lesson with a runnable Try-it section', () => {
    const html = renderAt('/lesson/py-m1-l1')
    expect(html).toContain('Try it yourself')
    expect(html).toContain('Run')
    expect(html).toContain('print(')
  })
  it('renders a Java lesson with runnable code', () => {
    const html = renderAt('/lesson/java-m1-l1')
    expect(html).toContain('Try it yourself')
    expect(html).toContain('System.out.println')
  })
  it('formats inline code — no raw backticks leak into rendered prose', () => {
    expect(renderAt('/lesson/py-m1-l1')).not.toContain('`')
    expect(renderAt('/lesson/java-m1-l1')).not.toContain('`')
  })
  it('renders the coding challenge (blank terminal + expected outcome)', () => {
    const html = renderAt('/lesson/py-m1-l1')
    expect(html).toContain('Challenge — build it yourself')
    expect(html).toContain('Make your program print exactly')
    expect(html).toContain('Hello, world!')
  })
})
