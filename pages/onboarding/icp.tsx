import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const industriesList = [
  "Agriculture", "Automotive", "Banking", "Biotechnology", "Construction",
  "Consumer Goods", "Cybersecurity", "Education", "Energy", "Entertainment",
  "Financial Services", "Food & Beverage", "Government", "Healthcare", "Hospitality",
  "Insurance", "Legal", "Logistics", "Manufacturing", "Media", "Mining", "Nonprofit",
  "Pharmaceuticals", "Professional Services", "Real Estate", "Retail", "Software / SaaS",
  "Telecommunications", "Transportation", "Utilities", "Wholesale", "Other"
]

const ownershipOptions = [
  "Publicly Traded", "Private Equity Owned", "Family Owned", "Privately Held",
  "Government / Municipal", "Nonprofit", "Franchise", "Other"
]

const businessTypes = [
  "Manufacturer", "Service Provider", "Distributor", "Retailer", "Software / SaaS",
  "Consulting", "Logistics / Transportation", "Construction / Trades", "Other"
]

export default function ICPOnboarding() {
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem('onboardingProgress', '/onboarding/icp')
  }, [])

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [formData, setFormData] = useState({
    subIndustry: '',
    subIndustryOther: '',
    minEmployees: '',
    maxEmployees: '',
    minRevenue: '',
    maxRevenue: '',
    geography: '',
    ownership: '',
    businessType: '',
    businessTypeOther: '',
    targetTitles: '',
    otherQualifiers: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleIndustryToggle = (industry: string) => {
    setSelectedIndustries(prev =>
      prev.includes(industry)
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('ICP Data:', {
      ...formData,
      selectedIndustries
    })
    router.push('/onboarding/about-company')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-gray-50 shadow-md rounded-xl p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Define Your Ideal Customer</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Target Industries</label>
          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto border rounded-md p-3 bg-white">
            {industriesList.map(ind => (
              <label key={ind} className="text-sm text-gray-700 flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedIndustries.includes(ind)}
                  onChange={() => handleIndustryToggle(ind)}
                />
                <span>{ind}</span>
              </label>
            ))}
          </div>

          <label className="block text-sm font-medium text-gray-700 mt-4">Sub-industry (Optional)</label>
          <select
            name="subIndustry"
            value={formData.subIndustry}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 py-3 px-4"
          >
            <option value="">Select Sub-industry...</option>
            <option value="B2B">B2B</option>
            <option value="B2C">B2C</option>
            <option value="SaaS">SaaS</option>
            <option value="Marketplace">Marketplace</option>
            <option value="Other">Other</option>
          </select>
          {formData.subIndustry === 'Other' && (
            <input
              type="text"
              name="subIndustryOther"
              placeholder="Type your sub-industry"
              value={formData.subIndustryOther}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-3 px-4 mt-2"
            />
          )}

          <div className="flex gap-4">
            <input
              type="number"
              name="minEmployees"
              placeholder="Min employees"
              value={formData.minEmployees}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-3 px-4"
            />
            <input
              type="number"
              name="maxEmployees"
              placeholder="Max employees"
              value={formData.maxEmployees}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-3 px-4"
            />
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              name="minRevenue"
              placeholder="Min revenue (e.g., 5M)"
              value={formData.minRevenue}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-3 px-4"
            />
            <input
              type="text"
              name="maxRevenue"
              placeholder="Max revenue (e.g., 100M)"
              value={formData.maxRevenue}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-3 px-4"
            />
          </div>

          <input
            type="text"
            name="geography"
            placeholder="Geographic focus"
            value={formData.geography}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 py-3 px-4"
            required
          />

          <label className="block text-sm font-medium text-gray-700">Ownership Type</label>
          <select
            name="ownership"
            value={formData.ownership}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 py-3 px-4"
          >
            <option value="">Select ownership...</option>
            {ownershipOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <label className="block text-sm font-medium text-gray-700">Business Type</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 py-3 px-4"
          >
            <option value="">Select type...</option>
            {businessTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {formData.businessType === 'Other' && (
            <input
              type="text"
              name="businessTypeOther"
              placeholder="Enter custom business type"
              value={formData.businessTypeOther}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-3 px-4 mt-2"
            />
          )}

          <textarea
            name="targetTitles"
            placeholder="Target job titles (comma separated)"
            value={formData.targetTitles}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 py-3 px-4 h-24"
            required
          />

          <textarea
            name="otherQualifiers"
            placeholder="Other qualifiers (optional)"
            value={formData.otherQualifiers}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 py-3 px-4 h-20"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  )
}
