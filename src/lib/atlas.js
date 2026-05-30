// The single assembled curriculum instance, wired to the real content registry.
import { buildCurriculum } from './curriculum.js'
import { tracks, lessons, braided } from '../content/index.js'

export const atlas = buildCurriculum({ tracks, lessons, braided })

// A track's accent CSS variable, with a sensible default. Used wherever UI is themed
// to the current track (track cards, rings, lesson hero, diagrams).
export const accentOf = (track) => track?.accentVar || 'var(--accent)'
