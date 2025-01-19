import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Chat from './components/Chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Tutor',
  description: 'Your personal AI tutor powered by Gemini',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Chat />
      </body>
    </html>
  )
}

