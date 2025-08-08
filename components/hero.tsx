'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Users, Globe } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pakistan-charity-hero.png')`
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-emerald-500 text-border-b-4 bg-black/40 rounded-lg shadow-lg p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Al-Haq Khidmat Foundation
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Providing discounted food, affordable medicines, quality healthcare, and emergency disaster relief to communities across Pakistan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              Make a Donation
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-amber-600 border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-2">25,000+</h3>
              <p className="text-lg opacity-90">Families Served</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-red-400" />
              <h3 className="text-2xl font-bold mb-2">3</h3>
              <p className="text-lg opacity-90">Core Services</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">All</h3>
              <p className="text-lg opacity-90">Pakistan Regions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
