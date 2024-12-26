import type { Metadata } from 'next'
import { Bodoni_Moda, Montserrat } from 'next/font/google'
import './globals.css'

const bodoni = Bodoni_Moda({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bodoni',
  display: 'swap'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Nadiva's Estética e Insumos",
  description: 'Centro de estética integral e insumos de belleza en Villa Del Dique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${bodoni.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

