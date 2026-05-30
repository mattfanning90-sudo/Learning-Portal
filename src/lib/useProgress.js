import { useSyncExternalStore } from 'react'

// All Atlas state lives in localStorage under a versioned namespace.
const K = (s) => `atlas:v1:${s}`
const read = (s, d) => {
  try {
    const v = JSON.parse(localStorage.getItem(K(s)))
    return v ?? d
  } catch {
    return d
  }
}

const listeners = new Set()
const emit = () => listeners.forEach((l) => l())
const subscribe = (l) => { listeners.add(l); return () => listeners.delete(l) }
const write = (s, v) => { localStorage.setItem(K(s), JSON.stringify(v)); emit() }

// Plain, fully-testable store over localStorage.
export const store = {
  getCompleted: () => read('completed', {}),
  isComplete: (id) => !!read('completed', {})[id],
  toggleComplete(id) {
    const c = read('completed', {})
    if (c[id]) delete c[id]
    else c[id] = Date.now()
    write('completed', c)
  },
  setComplete(id, v) {
    const c = read('completed', {})
    if (v) c[id] = Date.now()
    else delete c[id]
    write('completed', c)
  },
  getNote: (id) => read('notes', {})[id] || '',
  saveNote(id, text) {
    const n = read('notes', {})
    if (text) n[id] = text
    else delete n[id]
    write('notes', n)
  },
  allNotes: () => read('notes', {}),
  getQuiz: (id) => read('quiz', {})[id] || null,
  saveQuiz(id, result) {
    const q = read('quiz', {})
    q[id] = result
    write('quiz', q)
  },
  getResume: () => read('resume', null),
  setResume(id) { write('resume', id) },
  getSetting: (key, fallback) => { const s = read('settings', {}); return key in s ? s[key] : fallback },
  setSetting(key, val) { const s = read('settings', {}); s[key] = val; write('settings', s) },
  // True when every question index 0..count-1 has a saved answer (count 0 = trivially answered).
  lessonAnswered(id, count) {
    const q = read('quiz', {})[id] || {}
    for (let i = 0; i < count; i++) if (q[i] === undefined) return false
    return true
  },
}

// React hook: re-renders subscribed components whenever the store changes.
const snapshot = () =>
  `${localStorage.getItem(K('completed')) || ''}|${localStorage.getItem(K('notes')) || ''}|${localStorage.getItem(K('quiz')) || ''}|${localStorage.getItem(K('resume')) || ''}|${localStorage.getItem(K('settings')) || ''}`

export function useProgress() {
  useSyncExternalStore(subscribe, snapshot, snapshot)
  return store
}
