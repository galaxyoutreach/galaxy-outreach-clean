import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Onboarding() {
  const router = useRouter()

  useEffect(() => {
    router.push('/onboarding/icp')
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-6">
      <div className="flex flex-col items-center">
        <Image
          src="/g-icon-final.png"
          alt="Galaxy Outreach"
          width={80}
          height={80}
          unoptimized
        />
        <h1 className="text-3xl font-bold mt-6 mb-2">Welcome to Onboarding</h1>
        <p className="text-center text-gray-600 max-w-md">
          Getting you set up for outreach success.
        </p>
      </div>
    </div>
  )
}
