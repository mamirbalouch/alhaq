'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, BookOpen, Home, Utensils, Building } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Al-Haq Khidmat Foundation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established with the vision of creating a just and compassionate society, Al-Haq Khidmat Foundation 
            is committed to serving humanity regardless of race, religion, or social status.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              To provide essential services at affordable rates to underprivileged communities across Pakistan, 
              including discounted food and medicines, quality healthcare through our medical center, and 
              immediate disaster relief support during natural calamities such as floods and earthquakes.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our work is guided by the principles of justice (Al-Haq) and service (Khidmat), ensuring that 
              basic necessities like food, healthcare, and emergency support are accessible to all, regardless 
              of their economic status.
            </p>
            <p className="text-lg text-gray-700 mb-6">
Our mission is to serve humanity with compassion and commitment. We are dedicated to supporting the poor and needy by providing essential relief, especially in times of crisis. Our teams work tirelessly in remote and underserved areas to deliver emergency aid to flood victims and disaster-affected communities.
            </p>
            <p className="text-lg text-gray-700 mb-6">
In the city of Karachi, we offer low-cost food and medicines to underprivileged families, operate a charitable medical center for accessible healthcare, and manage water points to serve clean drinking water to travelers and daily wage earners.
            </p>
            <p className="text-lg text-gray-700 mb-6">
We strive to uplift lives through practical support, driven by the principles of dignity, service, and equity for all.              
            </p>
          </div>
          <div className="relative">
            <img 
              src="/pakistani-charity-team.png"
              alt="Pakistani foundation team working together"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Utensils className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Food Support</h4>
              <p className="text-gray-600">
                Discounted essential food items for families in need
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Medical Care</h4>
              <p className="text-gray-600">
                Medical center and discounted medicines for healthcare access
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Disaster Relief</h4>
              <p className="text-gray-600">
                Emergency support for flood and earthquake victims
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Building className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Community Support</h4>
              <p className="text-gray-600">
                Reaching vulnerable communities across Pakistan
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
