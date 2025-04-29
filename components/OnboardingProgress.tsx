import { useRouter } from 'next/router'
import clsx from 'clsx'

const steps = [
  { label: 'Welcome', route: '/onboarding' },
  { label: 'Ideal Customer', route: '/onboarding/icp' },
  { label: 'About Company', route: '/onboarding/about-company' },
  { label: 'Dashboard', route: '/dashboard' }
]

export default function OnboardingProgress() {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 px-4">
      <div className="flex justify-between items-center text-sm font-medium text-gray-500">
        {steps.map((step, i) => {
          const isActive = currentPath === step.route
          const isCompleted = steps.findIndex(s => s.route === currentPath) > i

          return (
            <div key={step.label} className="flex-1 flex flex-col items-center">
              <div
                className={clsx(
                  'h-10 w-10 rounded-full flex items-center justify-center border-2',
                  {
                    'border-blue-600 text-blue-600 font-bold': isActive,
                    'bg-blue-600 text-white': isCompleted,
                    'border-gray-300': !isActive && !isCompleted
                  }
                )}
              >
                {i + 1}
              </div>
              <span className={clsx('mt-2', { 'text-blue-700': isActive })}>
                {step.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
