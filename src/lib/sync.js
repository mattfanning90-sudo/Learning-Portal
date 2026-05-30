// Talks to the Atlas API, authenticating with a Clerk session token (Bearer).
const API = import.meta.env.VITE_API_URL || ''

export async function pullProgress(getToken) {
  const token = await getToken()
  const r = await fetch(`${API}/api/progress`, { headers: { Authorization: `Bearer ${token}` } })
  if (!r.ok) throw new Error(`pull ${r.status}`)
  return (await r.json()).data || {}
}

export async function pushProgress(getToken, data) {
  const token = await getToken()
  const r = await fetch(`${API}/api/progress`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  })
  if (!r.ok) throw new Error(`push ${r.status}`)
}
