import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-6 px-6 bg-white shadow-sm">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          🤖 AI Tutor
        </Link>
        <ul className="flex space-x-1 bg-gray-100 rounded-full p-1">
          <li>
            <Link
              href="#features"
              className="inline-block px-4 py-2 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="inline-block px-4 py-2 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="inline-block px-4 py-2 rounded-full hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
       <Link href="/dashboard">
        <Button variant="default" className="rounded-full bg-primary text-white hover:bg-primary/90">
          Start Learning
        </Button></Link>
      </nav>
    </header>
  )
}

