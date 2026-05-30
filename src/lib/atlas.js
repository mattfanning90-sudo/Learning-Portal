// The single assembled curriculum instance, wired to the real content registry.
import { buildCurriculum } from './curriculum.js'
import { tracks, lessons, braided } from '../content/index.js'

export const atlas = buildCurriculum({ tracks, lessons, braided })
