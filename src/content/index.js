// The content registry. Track + module structure lives here; lesson data is
// authored in src/content/{engineering,product}/*.js and registered below.
// Each content file default-exports an object keyed by lesson id.

export const tracks = [
  {
    id: 'engineering',
    title: 'AI Engineering',
    tagline: "From 'how does this thing actually work?' to 'I can design, ship, and govern AI products people trust.'",
    accent: 'accent',
    modules: [],
  },
  {
    id: 'product',
    title: 'Product Leadership',
    tagline: 'Think like a Silicon Valley product leader — and speak engineering fluently enough to lead the people who build.',
    accent: 'blue',
    modules: [],
  },
]

export const lessons = {} // id -> lesson object
export const braided = [] // recommended cross-track order of lesson ids

const trackById = (id) => tracks.find((t) => t.id === id)

// Helper used by each content module to register itself.
export function registerModule({ trackId, id, title, goal, lessonMap }) {
  Object.assign(lessons, lessonMap)
  trackById(trackId).modules.push({ id, title, goal, lessonIds: Object.keys(lessonMap) })
}

// ─── Seed content (Task 6) ───
import engM1 from './engineering/m1.js'
import prodM1 from './product/m1.js'

registerModule({ trackId: 'engineering', id: 'eng-m1', title: 'Module 1 — What an LLM Actually Is', lessonMap: engM1 })
registerModule({ trackId: 'product', id: 'prod-m1', title: 'Module 1 — How Great Product Companies Work', lessonMap: prodM1 })

braided.push('eng-m1-l1', 'prod-m1-l1')
