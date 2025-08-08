'use client'

import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Gallery } from '@/components/gallery'
import { Donation } from '@/components/donation'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Donation />
      <Contact />
    </main>
  )
}
