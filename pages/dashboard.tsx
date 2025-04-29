import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Dashboard() {
  useEffect(() => {
    localStorage.removeItem('onboardingProgress')
  }, [])

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <aside className="w-64 bg-white border-r shadow-sm hidden md:flex flex-col">
        <div className="flex items-center justify-center h-20 border-b">
          <Image
            src="/g-icon-final.png"
            alt="GO Icon"
            width={40}
            height={40}
            unoptimized
          />
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4 text-sm">
          <Link href="#"><span className="block hover:text-blue-600 font-medium">Dashboard</span></Link>
          <Link href="#"><span className="block hover:text-blue-600">Campaigns</span></Link>
          <Link href="#"><span className="block hover:text-blue-600">Contacts</span></Link>
          <Link href="#"><span className="block hover:text-blue-600">Settings</span></Link>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow-sm px-6 flex items-center justify-between border-b">
          <h1 className="text-xl font-bold">Galaxy Outreach</h1>
          <Link href="/">
            <span className="text-sm text-blue-600 hover:underline">Logout</span>
          </Link>
        </header>

        <section className="p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome to your dashboard</h2>
          <p className="text-gray-600">This is your Galaxy Outreach control center.</p>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
