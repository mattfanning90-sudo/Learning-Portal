import pg from 'pg'

const url = process.env.DATABASE_URL || ''
// Railway's private network (railway.internal) and localhost don't need SSL;
// any other (public) host gets relaxed SSL.
const ssl = !url || url.includes('railway.internal') || url.includes('localhost') ? false : { rejectUnauthorized: false }

export const pool = new pg.Pool({ connectionString: url, ssl })

export async function migrate() {
  await pool.query(`CREATE TABLE IF NOT EXISTS user_progress (
    user_id    TEXT PRIMARY KEY,
    data       JSONB NOT NULL DEFAULT '{}',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )`)
}
