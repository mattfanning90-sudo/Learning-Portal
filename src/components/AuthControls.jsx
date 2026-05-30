import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

// Sign-in button when signed out, Clerk user menu when signed in.
// Renders nothing when Clerk isn't configured (no publishable key), so the
// header is unchanged in local/no-auth builds.
const enabled = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

export default function AuthControls() {
  if (!enabled) return null
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <SignedOut>
        <SignInButton mode="modal">
          <button
            style={{
              background: 'var(--accent)', color: '#fff', border: 'none', fontFamily: 'inherit',
              fontSize: '0.8rem', fontWeight: 600, padding: '6px 14px', borderRadius: 'var(--radius-sm)', cursor: 'pointer',
            }}
          >
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </span>
  )
}
