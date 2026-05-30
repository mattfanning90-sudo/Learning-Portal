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
export const subscribe = (l) => { listeners.add(l); return () => listeners.delete(l) }
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
  getChallenge: (id) => read('challenge', {})[id] || null,
  saveChallenge(id, result) { const c = read('challenge', {}); c[id] = result; write('challenge', c) },
  getSetting: (key, fallback) => { const s = read('settings', {}); return key in s ? s[key] : fallback },
  setSetting(key, val) { const s = read('settings', {}); s[key] = val; write('settings', s) },
  // True when every question index 0..count-1 has a saved answer (count 0 = trivially answered).
  lessonAnswered(id, count) {
    const q = read('quiz', {})[id] || {}
    for (let i = 0; i < count; i++) if (q[i] === undefined) return false
    return true
  },
  // Snapshot/apply the whole progress blob (used by cross-device sync).
  exportAll: () => ({ completed: read('completed', {}), notes: read('notes', {}), quiz: read('quiz', {}), challenge: read('challenge', {}), settings: read('settings', {}) }),
  importAll(blob) { for (const k of ['completed', 'notes', 'quiz', 'challenge', 'settings']) if (blob && blob[k]) write(k, blob[k]) },
}

// React hook: re-renders subscribed components whenever the store changes.
const snapshot = () =>
  ['completed', 'notes', 'quiz', 'resume', 'settings', 'challenge'].map((k) => localStorage.getItem(K(k)) || '').join('|')

export function useProgress() {
  useSyncExternalStore(subscribe, snapshot, snapshot)
  return store
}
