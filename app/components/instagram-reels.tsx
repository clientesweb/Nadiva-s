'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { Button } from "@/app/components/ui/button"

const reels = [
  {
    id: 'DDt_MNbOjbC',
    url: 'https://www.instagram.com/reel/DDt_MNbOjbC/',
    description: 'Descubre nuestros tratamientos exclusivos',
    embedUrl: 'https://www.instagram.com/reel/DDt_MNbOjbC/embed'
  },
  {
    id: 'DDh7Kjaveg_',
    url: 'https://www.instagram.com/reel/DDh7Kjaveg_/',
    description: 'Resultados increíbles en nuestro centro',
    embedUrl: 'https://www.instagram.com/reel/DDh7Kjaveg_/embed'
  },
  {
    id: 'DDQpulKuiej',
    url: 'https://www.instagram.com/reel/DDQpulKuiej/',
    description: 'Conoce nuestros servicios premium',
    embedUrl: 'https://www.instagram.com/reel/DDQpulKuiej/embed'
  },
  {
    id: 'DDE4tu1OOyn',
    url: 'https://www.instagram.com/reel/DDE4tu1OOyn/',
    description: 'Transformaciones sorprendentes',
    embedUrl: 'https://www.instagram.com/reel/DDE4tu1OOyn/embed'
  }
]

export function InstagramReels() {
  const [selectedReel, setSelectedReel] = useState<string | null>(null)

  return (
    <section id="instagram" className="py-24 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Síguenos en Instagram
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mantente al día con nuestros últimos tratamientos y resultados
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              className="aspect-[9/16] bg-secondary rounded-lg overflow-hidden relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full h-full relative">
                <iframe
                  src={reel.embedUrl}
                  className="w-full h-full absolute inset-0"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  title={`Instagram Reel - ${reel.description}`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm">{reel.description}</p>
                  <Button
                    variant="link"
                    className="mt-2 text-primary hover:text-primary/80 p-0 h-auto font-normal"
                    onClick={() => window.open(reel.url, '_blank', 'noopener,noreferrer')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Ver en Instagram
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

