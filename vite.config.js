import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Tests run with Clerk auth disabled (it's optional): the smoke test mounts <App />
  // directly without a ClerkProvider, so force the publishable key empty regardless of
  // any local .env, exercising the unauthenticated path. Overrides .env for tests only.
  test: { environment: 'jsdom', globals: true, env: { VITE_CLERK_PUBLISHABLE_KEY: '' } },
})
