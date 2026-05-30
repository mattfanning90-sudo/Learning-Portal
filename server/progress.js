// Data access for per-user progress. Pure over the pg pool (pool injected for testability).
export async function getProgress(pool, userId) {
  const { rows } = await pool.query('SELECT data FROM user_progress WHERE user_id = $1', [userId])
  return rows[0]?.data || {}
}

export async function saveProgress(pool, userId, data) {
  const { rows } = await pool.query(
    `INSERT INTO user_progress (user_id, data, updated_at) VALUES ($1, $2, now())
     ON CONFLICT (user_id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()
     RETURNING updated_at`,
    [userId, JSON.stringify(data)]
  )
  return { updatedAt: rows[0]?.updated_at }
}
