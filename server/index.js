import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { mountAuth, requireUser } from './auth.js'
import { pool, migrate } from './db.js'
import { getProgress, saveProgress } from './progress.js'

const app = express()
const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')

const origins = (process.env.CORS_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean)
app.use(cors({ origin: origins.length ? origins : true }))
app.use(express.json({ limit: '1mb' }))
mountAuth(app)

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.get('/api/progress', requireUser, async (req, res) => {
  res.json({ data: await getProgress(pool, req.userId) })
})
app.put('/api/progress', requireUser, async (req, res) => {
  const data = req.body?.data
  if (typeof data !== 'object' || data === null) return res.status(400).json({ error: 'bad data' })
  res.json({ ok: true, ...(await saveProgress(pool, req.userId, data)) })
})

app.use(express.static(dist))

// SPA fallback (Express 5: use a final middleware, not app.get('*')).
// Unknown /api paths get a JSON 404; everything else returns index.html.
app.use((req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'not found' })
  res.sendFile(path.join(dist, 'index.html'))
})

migrate().catch((e) => console.warn('migrate skipped:', e.message))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Atlas server on :${port}`))
