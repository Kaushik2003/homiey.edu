import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from 'next-themes'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ["400"], subsets: ['latin'] , variable: '--font-poppins'})

export const metadata: Metadata = {
  title: 'Homiey',
  description: 'AI-powered exam prep & assessments.',
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
          
        </body>
      </html>
    </ClerkProvider>
  )
}
