'use client'

import { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/app/components/ui/dialog'
import Image from "next/image"
import { motion } from 'framer-motion'
import { ShoppingCart, Plus, Minus, Eye } from 'lucide-react'
import { CartItem } from '@/types/cart'

const products = [
  {
    id: 1,
    name: "Suero Facial Nano Hialurónico",
    price: consultar,
    image: "/suero-facial-nano-hialuronico.webp",
    description: "Serum Nano Hialurónico concentrado antiage de hidratación y elasticidad. La exquisita combinación de Hialurónico de distinto peso molecular otorga a este Serum una cualidad específica y única, penetrando en los distintos niveles de nuestra piel ya que las moléculas pequeñas del Hialurónico BPM penetran más y más profundo en tu piel.  100 % Antiedad."
  },
  {
    id: 2,
    name: "Sérum Antiarrugas",
    price: 3999,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "Fórmula avanzada para reducir líneas de expresión y arrugas."
  },
  {
    id: 3,
    name: "Máscara Facial Purificante",
    price: 2499,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    description: "Limpieza profunda y purificación para todo tipo de piel."
  },
  {
    id: 4,
    name: "Aceite Corporal Nutritivo",
    price: 5999,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Nutrición intensa para una piel suave y sedosa."
  },
  {
    id: 5,
    name: "Exfoliante Facial",
    price: 3499,
    image: "https://images.unsplash.com/photo-1614859324967-1bd69062d0c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Elimina células muertas para una piel renovada y luminosa."
  },
  {
    id: 6,
    name: "Contorno de Ojos",
    price: 4499,
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "Reduce ojeras y líneas finas alrededor de los ojos."
  }
]

interface StoreProps {
  addToCart: (item: CartItem) => void;
}

export function Store({ addToCart }: StoreProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [quantity, setQuantity] = useState(1)

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`
  }

  const handleAddToCart = (product: typeof products[0], quantity: number) => {
    addToCart({ ...product, quantity })
    setSelectedProduct(null)
    setQuantity(1)
  }

  return (
    <section id="tienda" className="py-24 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 animate-fade-in">
            Tienda de Insumos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Productos profesionales para tu cuidado personal
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-3xl font-bold text-primary mb-4">
                  {formatPrice(product.price)}
                </p>
                <div className="flex justify-between">
                  <Button className="flex-1 mr-2" onClick={() => handleAddToCart(product, 1)}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Agregar
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedProduct(product)}>
                    <Eye className="mr-2 h-4 w-4" /> Ver más
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => {
        setSelectedProduct(null)
        setQuantity(1)
      }}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
            <DialogDescription>
              {selectedProduct?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 relative w-full h-[300px] rounded-lg overflow-hidden">
            {selectedProduct && (
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-primary">
              {selectedProduct && formatPrice(selectedProduct.price)}
            </span>
            <div className="flex items-center">
              <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-4 text-xl font-semibold">{quantity.toString()}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => {
              if (selectedProduct) {
                handleAddToCart(selectedProduct, quantity)
              }
            }}>
              Agregar al Carrito
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

