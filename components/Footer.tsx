import Link from "next/link"
import { Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: support@aitutor.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Linkedin />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Youtube />
              </Link>
            </div>
          </div>
          <div>
            <p>&copy; 2025 AI Tutor. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

