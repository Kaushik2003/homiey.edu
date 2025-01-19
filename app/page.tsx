import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">AI Tutor</h1>
      <nav className="flex flex-col space-y-4">
        <Link href="/doubt" className="text-blue-500 hover:underline">Ask a Doubt</Link>
        <Link href="/quiz" className="text-blue-500 hover:underline">Take a Quiz</Link>
        <Link href="/paper-gen" className="text-blue-500 hover:underline">Generate Question Paper</Link>
      </nav>
      <p className="mt-8 text-center text-gray-600">
        Need help? Click the chat icon in the bottom right corner to talk with our AI tutor!
      </p>
    </main>
  )
}

