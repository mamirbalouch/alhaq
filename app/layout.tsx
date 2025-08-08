import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Al-Haq Khidmat Foundation - Serving Humanity with Compassion',
  description: 'Al-Haq Khidmat Foundation is dedicated to serving humanity through healthcare, education, community development, and emergency relief services.',
  keywords: 'charity, foundation, humanitarian, healthcare, education, community development, Pakistan',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
