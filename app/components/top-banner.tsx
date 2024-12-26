'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const promotions = [
  "¡Nuevo servicio! Tratamiento facial rejuvenecedor",
  "20% de descuento en todos los masajes esta semana",
  "Compra 2 productos y llévate el tercero gratis"
]

export function TopBanner() {
  const [currentPromotion, setCurrentPromotion] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary text-secondary py-2 px-4 text-center text-sm overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentPromotion}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {promotions[currentPromotion]}
          <a href="#" className="ml-2 underline hover:text-white">
            Más info
          </a>
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

