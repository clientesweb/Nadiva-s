'use client'

import { useState, useEffect } from 'react'
import { TopBanner } from "./components/top-banner"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Store } from "./components/store"
import { Footer } from "./components/footer"
import { CartButton } from "./components/cart-button"
import { WhatsAppButton } from "./components/whatsapp-button"
import { Preloader } from "./components/preloader"
import { AdBanner } from "./components/ad-banner"
import { InstagramReels } from "./components/instagram-reels"
import { FAQ } from "./components/faq"
import { CartItem } from "@/types/cart"

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    // Wrap localStorage access in try-catch to handle SSR
    try {
      const storedItems = localStorage.getItem('cartItems')
      if (storedItems) {
        setCartItems(JSON.parse(storedItems))
      }
    } catch (error) {
      console.error('Error loading cart items:', error)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    } catch (error) {
      console.error('Error saving cart items:', error)
    }
  }, [cartItems])

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id)
      if (existingItem) {
        return prevItems.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      }
      return [...prevItems, item]
    })
  }

  return (
    <>
      <div className="min-h-screen">
        <Preloader />
        <TopBanner />
        <Header />
        <main>
          <Hero />
          <Services />
          <AdBanner />
          <Store addToCart={addToCart} />
          <InstagramReels />
          <FAQ />
        </main>
        <Footer />
        <CartButton items={cartItems} setItems={setCartItems} />
        <WhatsAppButton />
      </div>
    </>
  )
}

