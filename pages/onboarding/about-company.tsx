import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function AboutCompany() {
  const router = useRouter()
  const [about, setAbout] = useState('')

  useEffect(() => {
    const progress = localStorage.getItem('onboardingProgress') || 'about'
    if (progress !== 'about') {
      router.push('/onboarding')
    }
  }, [router])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    localStorage.setItem('onboardingAbout', about)
    localStorage.setItem('onboardingProgress', 'company')
    router.push('/onboarding/company')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Tell Us About Your Company</h1>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          placeholder="Enter a short description of your company"
          rows={5}
        />
        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Next
        </button>
      </form>
    </div>
  )
}
