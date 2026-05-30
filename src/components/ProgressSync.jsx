import { useEffect, useRef } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { store, subscribe } from '../lib/useProgress.js'
import { pullProgress, pushProgress } from '../lib/sync.js'
import { mergeProgress } from '../lib/mergeProgress.js'

// When signed in: pull server progress, merge with local, write back both ways,
// then debounced-push on every change. Does nothing when signed out.
export default function ProgressSync() {
  const { isSignedIn, getToken } = useAuth()
  const timer = useRef(null)

  useEffect(() => {
    if (!isSignedIn) return
    let off = () => {}
    let cancelled = false
    ;(async () => {
      try {
        const server = await pullProgress(getToken)
        if (cancelled) return
        const merged = mergeProgress(store.exportAll(), server)
        store.importAll(merged)
        await pushProgress(getToken, merged)
      } catch (e) {
        console.warn('progress sync init failed:', e.message)
      }
      off = subscribe(() => {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
          pushProgress(getToken, store.exportAll()).catch((e) => console.warn('progress push failed:', e.message))
        }, 1000)
      })
    })()
    return () => { cancelled = true; clearTimeout(timer.current); off() }
  }, [isSignedIn]) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}
