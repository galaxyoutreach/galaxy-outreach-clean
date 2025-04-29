import { useEffect } from 'react'
import { useRouter } from 'next/router'

// TEMP: Simulated "auth" value (real logic later)
const isAuthenticated = true // Toggle this to false to test redirection

export function withAuth<P>(WrappedComponent: React.ComponentType<P>) {
  return function ProtectedComponent(props: P) {
    const router = useRouter()

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace('/sign-in')
      }
    }, [])

    return isAuthenticated ? <WrappedComponent {...props} /> : null
  }
}
