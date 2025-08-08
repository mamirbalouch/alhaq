'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Stethoscope, GraduationCap, Utensils, HandHeart, Building, Droplets, Users } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Utensils,
      title: "Discounted Food Program",
      description: "Providing essential food items at heavily discounted rates to low-income families and individuals, ensuring no one goes hungry in our communities.",
      color: "text-orange-500"
    },
    {
      icon: Stethoscope,
      title: "Discounted Medicines",
      description: "Making essential medications affordable and accessible by offering prescription drugs and over-the-counter medicines at significantly reduced prices.",
      color: "text-red-500"
    },
    {
      icon: Building,
      title: "Medical Center",
      description: "Operating a fully equipped medical center providing quality healthcare services, consultations, and treatments at affordable rates for the community.",
      color: "text-blue-500"
    },
    {
      icon: HandHeart,
      title: "Flood Relief Operations",
      description: "Immediate response and long-term support for flood-affected communities across Pakistan, including emergency supplies, shelter, and rehabilitation assistance.",
      color: "text-cyan-500"
    },
    {
      icon: Droplets,
      title: "Earthquake Relief Support",
      description: "Comprehensive disaster response for earthquake victims, providing emergency aid, medical assistance, temporary shelter, and community rebuilding support.",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Identifying and supporting vulnerable families and individuals in various regions of Pakistan through our network of volunteers and community partners.",
      color: "text-green-500"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive services to address the diverse needs of communities, 
            focusing on sustainable development and long-term impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Disaster Relief Operations</h3>
            <p className="text-lg text-gray-700 mb-6">
              Al-Haq Khidmat Foundation has been at the forefront of disaster response across Pakistan. 
              Our rapid response teams provide immediate relief during floods, earthquakes, and other natural disasters, 
              followed by long-term rehabilitation and community rebuilding efforts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-3xl font-bold text-green-600 mb-2">15+</h4>
                <p className="text-gray-600">Provinces Covered</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-green-600 mb-2">200+</h4>
                <p className="text-gray-600">Relief Operations</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-green-600 mb-2">25,000+</h4>
                <p className="text-gray-600">Families Assisted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
