import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: any) {
  const [hydrated, setHydrated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
