'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/flogo.jpeg" alt="Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Al-Haq Khidmat Foundation</h1>
              <p className="text-xs text-gray-600">Serving Humanity with Compassion</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-green-600 transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">
              Donate Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="#home" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">
                Services
              </Link>
              <Link href="#gallery" className="text-gray-700 hover:text-green-600 transition-colors">
                Gallery
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
              <Button className="bg-green-600 hover:bg-green-700 w-fit">
                Donate Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
