'use client'

import { useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import { CartSidebar } from './cart-sidebar'
import { CartItem } from '@/types/cart'

export function CartButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>([])

  return (
    <>
      <motion.button
        className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <ShoppingBag className="w-6 h-6 text-secondary" />
        {items.length > 0 && (
          <motion.span
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-primary text-xs flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            {items.reduce((sum, item) => sum + item.quantity, 0)}
          </motion.span>
        )}
      </motion.button>
      <CartSidebar 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
        items={items}
        setItems={setItems}
      />
    </>
  )
}

