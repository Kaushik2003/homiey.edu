"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-white">Homiey</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {/* <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/" ? "text-white" : "text-gray-400"
              }`}
            >
              Courses
            </Link> */}
            <Link
              href="/instructors"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/instructors" ? "text-white" : "text-gray-400"
              }`}
            >
              Instructors
            </Link>
            {/* <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/about" ? "text-white" : "text-gray-400"
              }`}
            >
              About
            </Link> */}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
              0
            </span>
          </Button>
          <Button variant="outline" className="hidden md:flex">
            Connect Wallet
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/instructors"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/instructors" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Instructors
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === "/about" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button variant="outline" className="w-full mt-2">
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

