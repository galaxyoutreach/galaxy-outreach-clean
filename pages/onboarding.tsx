import Image from 'next/image'
import Link from 'next/link'

export default function Onboarding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-6">
      <div className="flex flex-col items-center">
        <Image src="/g-icon-final.png" alt="Galaxy Outreach" width={80} height={80} />
        <h1 className="text-3xl font-bold mt-6 mb-2">Onboarding</h1>
        <p className="text-center text-gray-600 max-w-md">
          Welcome to Galaxy Outreach. Complete your setup to start reaching prospects intelligently.
        </p>
        <Link href="/">
          <span className="mt-6 inline-block text-blue-600 hover:underline">Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
