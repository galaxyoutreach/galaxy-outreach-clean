import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Company() {
  const router = useRouter()
  const [companyName, setCompanyName] = useState('')

  useEffect(() => {
    const progress = localStorage.getItem('onboardingProgress') || 'company'
    if (progress !== 'company') {
      router.push('/onboarding')
    }
  }, [router])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    localStorage.setItem('onboardingCompany', companyName)
    localStorage.setItem('onboardingProgress', 'icp')
    router.push('/onboarding/icp')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">What is Your Company Name?</h1>
        <input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          placeholder="Company Name"
        />
        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Next
        </button>
      </form>
    </div>
  )
}
