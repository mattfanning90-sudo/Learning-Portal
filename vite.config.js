import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Split the bundle so vendor and the large content registry cache independently of
  // app code (and from each other) — editing a component no longer busts the content
  // or vendor chunk. Same bytes, better caching.
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return id.includes('@clerk') ? 'clerk' : 'vendor'
          if (id.includes('/src/content/')) return 'content'
          return undefined
        },
      },
    },
  },
  // Tests run with Clerk auth disabled (it's optional): the smoke test mounts <App />
  // directly without a ClerkProvider, so force the publishable key empty regardless of
  // any local .env, exercising the unauthenticated path. Overrides .env for tests only.
  test: { environment: 'jsdom', globals: true, env: { VITE_CLERK_PUBLISHABLE_KEY: '' } },
})
