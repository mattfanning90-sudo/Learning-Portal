import { describe, it, expect, beforeAll, beforeEach, afterEach } from 'vitest'
import { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'

// Tell React this is a proper act() environment (silences the act warning).
globalThis.IS_REACT_ACT_ENVIRONMENT = true

// Warm the lazy route chunks so React.lazy resolves promptly under jsdom.
beforeAll(async () => {
  await Promise.all([
    import('./components/Dashboard.jsx'),
    import('./components/TrackPage.jsx'),
    import('./components/lesson/LessonPage.jsx'),
    import('./components/Glossary.jsx'),
  ])
})

// Renders the whole app tree client-side (the real path) into jsdom and returns the
// resulting HTML. Routes are lazy-loaded, so render must be async: await act() flushes
// the dynamic imports + Suspense so the page content is present before we assert.
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

const renderAt = async (path) => {
  await act(async () => {
    root.render(
      <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </MemoryRouter>,
    )
  })
  // Routes are React.lazy — flush the dynamic import + Suspense commit until the page mounts.
  for (let i = 0; i < 20 && container.innerHTML.includes('Loading…'); i++) {
    await act(async () => { await new Promise((r) => setTimeout(r)) })
  }
  return container.innerHTML
}

describe('app smoke test (whole tree mounts client-side)', () => {
  it('renders the dashboard', async () => {
    const html = await renderAt('/')
    expect(html).toContain('genuinely fluent')
    expect(html).toContain('Atlas')
  })
  it('renders a track page', async () => {
    const html = await renderAt('/track/engineering')
    expect(html).toContain('AI Engineering')
    expect(html).toContain('What an LLM Actually Is')
  })
  it('renders a lesson page with its 8 parts', async () => {
    const html = await renderAt('/lesson/eng-m1-l1')
    expect(html).toContain('The core idea')
    expect(html).toContain('In plain English')
    expect(html).toContain('Think of it like')
    expect(html).toContain('Case study')
    expect(html).toContain('Check your understanding')
    expect(html).toContain('Mark complete')
  })
  it('renders the glossary', async () => {
    const html = await renderAt('/glossary')
    expect(html).toContain('Token')
  })
  it('renders a newly-authored engineering lesson (Responsible AI addition)', async () => {
    const html = await renderAt('/lesson/eng-m5-l5')
    expect(html).toContain('The core idea')
    expect(html).toContain('Check your understanding')
  })
  it('renders a newly-authored product lesson (Growth & GTM addition)', async () => {
    const html = await renderAt('/lesson/prod-m6-l6')
    expect(html).toContain('The core idea')
    expect(html).toContain('Mark complete')
  })
  it('dashboard shows the settings toggle and progress-saved note', async () => {
    const html = await renderAt('/')
    expect(html).toContain('Require quiz answers before completing a lesson')
    expect(html).toContain('saved automatically on this device')
  })
  it('track page offers the module quiz', async () => {
    const html = await renderAt('/track/engineering')
    expect(html).toContain('Take the module quiz')
  })
  it('completion gate shows a hint when the setting is on and questions are unanswered', async () => {
    localStorage.setItem('atlas:v1:settings', JSON.stringify({ gateComplete: true }))
    const html = await renderAt('/lesson/eng-m1-l2')
    expect(html).toContain('to mark complete')
  })
  it('renders the Python track', async () => {
    const html = await renderAt('/track/python')
    expect(html).toContain('Python')
    expect(html).toContain('Getting Started')
  })
  it('renders a Python lesson with a runnable Try-it section', async () => {
    const html = await renderAt('/lesson/py-m1-l1')
    expect(html).toContain('Try it yourself')
    expect(html).toContain('Run')
    expect(html).toContain('print(')
  })
  it('renders a Java lesson with runnable code', async () => {
    const html = await renderAt('/lesson/java-m1-l1')
    expect(html).toContain('Try it yourself')
    expect(html).toContain('System.out.println')
  })
  it('formats inline code — no raw backticks leak into rendered prose', async () => {
    expect(await renderAt('/lesson/py-m1-l1')).not.toContain('`')
    expect(await renderAt('/lesson/java-m1-l1')).not.toContain('`')
  })
  it('renders the coding challenge (blank terminal + expected outcome)', async () => {
    const html = await renderAt('/lesson/py-m1-l1')
    expect(html).toContain('Challenge — build it yourself')
    expect(html).toContain('Make your program print exactly')
    expect(html).toContain('Hello, world!')
  })
  it('renders the Full-Stack Engineering track', async () => {
    const html = await renderAt('/track/fullstack')
    expect(html).toContain('Full-Stack Engineering')
    expect(html).toContain('How the Web Actually Works')
  })
  it('renders a Full-Stack lesson with its core parts', async () => {
    const html = await renderAt('/lesson/fs-m1-l1')
    expect(html).toContain('The core idea')
    expect(html).toContain('Check your understanding')
    expect(html).toContain('Mark complete')
  })
  it('renders the Agentic Engineering track', async () => {
    const html = await renderAt('/track/agentic')
    expect(html).toContain('Agentic Engineering')
    expect(html).toContain('Working with LLMs')
  })
  it('renders an Agentic lesson with its core parts', async () => {
    const html = await renderAt('/lesson/ag-m1-l1')
    expect(html).toContain('The core idea')
    expect(html).toContain('Check your understanding')
  })
})
