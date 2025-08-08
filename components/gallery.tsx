'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, ImageIcon } from 'lucide-react'

export function Gallery() {
  const [activeTab, setActiveTab] = useState('images')

  const images = [
    {
      src: "/pakistani-medical-camp.png",
      alt: "Medical camp serving Pakistani community",
      title: "Free Medical Camp in Rural Pakistan"
    },
    {
      src: "/pakistani-children-education.png",
      alt: "Pakistani children receiving education support",
      title: "Educational Support Program"
    },
    {
      src: "/pakistan-food-distribution.png",
      alt: "Food distribution in Pakistani community",
      title: "Discounted Food Distribution"
    },
    {
      src: "/pakistan-flood-relief.png",
      alt: "Flood relief operations in Pakistan",
      title: "Flood Relief Operations"
    },
    {
      src: "/pakistan-earthquake-relief.png",
      alt: "Earthquake relief support in Pakistan",
      title: "Earthquake Relief Support"
    },
    {
      src: "/pakistani-medical-center.png",
      alt: "Medical center serving Pakistani patients",
      title: "Al-Haq Medical Center"
    }
  ]

  const videos = [
    {
      thumbnail: "/pakistan-foundation-overview.png",
      title: "Al-Haq Khidmat Foundation - Serving Pakistan",
      duration: "3:45"
    },
    {
      thumbnail: "/pakistan-medical-services.png",
      title: "Medical Services in Pakistani Communities",
      duration: "2:30"
    },
    {
      thumbnail: "/pakistan-disaster-relief.png",
      title: "Disaster Relief Across Pakistan",
      duration: "4:15"
    },
    {
      thumbnail: "/pakistan-community-impact.png",
      title: "Community Impact Stories",
      duration: "5:20"
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our work in action through photos and videos documenting our impact in communities across the region.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1">
            <Button
              variant={activeTab === 'images' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('images')}
              className="rounded-md"
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Images
            </Button>
            <Button
              variant={activeTab === 'videos' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('videos')}
              className="rounded-md"
            >
              <Play className="h-4 w-4 mr-2" />
              Videos
            </Button>
          </div>
        </div>

        {activeTab === 'images' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <h3 className="text-white text-lg font-semibold text-center px-4">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/50">
                        <Play className="h-6 w-6 mr-2" />
                        Play Video
                      </Button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{video.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
