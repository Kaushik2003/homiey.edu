import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from 'next-themes'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ["400"], subsets: ['latin'] })

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
    <ClerkProvider>
      
      <html lang="en">
        <body className={` ${poppins.className}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
            {children}
          </ThemeProvider>
          
        </body>
      </html>
    </ClerkProvider>
  )
}
