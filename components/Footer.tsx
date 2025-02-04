import Link from "next/link"
import { Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" >
      <div className="border-t border-gray-700  py-4 ">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <span>&copy; 2025 googlesolution.ai</span>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white">Contact</Link>
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">Github</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

