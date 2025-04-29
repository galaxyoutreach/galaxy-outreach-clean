export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Galaxy Outreach is Live
      </h1>
      <p className="text-center max-w-xl text-gray-700">
        Smarter Outreach. Less Headcount.
      </p>
      <a
        href="/sign-up"
        className="mt-8 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
      >
        Get Started
      </a>
    </main>
  )
}
