// Assembles tracks -> modules -> lessons and exposes lookups, the braided
// cross-track order, and progress math. Pure: takes data in, returns helpers.
export function buildCurriculum({ tracks, lessons, braided }) {
  const getLesson = (id) => lessons[id] || null
  const allModules = tracks.flatMap((t) => t.modules.map((m) => ({ ...m, trackId: t.id })))
  const getModule = (id) => allModules.find((m) => m.id === id) || null

  const lessonIdsForTrack = (trackId) =>
    tracks.find((t) => t.id === trackId)?.modules.flatMap((m) => m.lessonIds) || []

  return {
    tracks,
    braided,
    getLesson,
    getModule,
    getTrack: (id) => tracks.find((t) => t.id === id) || null,
    nextLesson(id) {
      const i = braided.indexOf(id)
      return i >= 0 && i < braided.length - 1 ? getLesson(braided[i + 1]) : null
    },
    prevLesson(id) {
      const i = braided.indexOf(id)
      return i > 0 ? getLesson(braided[i - 1]) : null
    },
    moduleProgress(moduleId, completed) {
      const m = getModule(moduleId)
      if (!m?.lessonIds.length) return 0
      const done = m.lessonIds.filter((lid) => completed[lid]).length
      return Math.round((done / m.lessonIds.length) * 100)
    },
    trackProgress(trackId, completed) {
      const ids = lessonIdsForTrack(trackId)
      if (!ids.length) return 0
      return Math.round((ids.filter((lid) => completed[lid]).length / ids.length) * 100)
    },
    firstLesson: () => getLesson(braided[0]) || null,
  }
}
