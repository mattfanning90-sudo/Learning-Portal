import { clerkMiddleware, getAuth } from '@clerk/express'

// Mount Clerk only when configured, so the server boots without keys (local dev).
export function mountAuth(app) {
  if (process.env.CLERK_SECRET_KEY) app.use(clerkMiddleware())
}

// 401 unless a valid Clerk session; attaches req.userId. 503 if auth isn't configured.
export function requireUser(req, res, next) {
  if (!process.env.CLERK_SECRET_KEY) return res.status(503).json({ error: 'auth not configured' })
  const { userId } = getAuth(req)
  if (!userId) return res.status(401).json({ error: 'unauthenticated' })
  req.userId = userId
  next()
}
