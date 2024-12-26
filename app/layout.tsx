import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Nadiva's Estética e Insumos",
  description: 'Centro de estética integral e insumos de belleza en Villa Del Dique',
  keywords: ['estética', 'belleza', 'tratamientos', 'Villa Del Dique', 'Córdoba'],
  authors: [{ name: "Nadiva's" }],
  creator: "Nadiva's",
  publisher: "Nadiva's",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#F9D5C5', // Color primario de tu tema
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.nadivas.com/',
    siteName: "Nadiva's Estética e Insumos",
    title: "Nadiva's Estética e Insumos",
    description: 'Centro de estética integral e insumos de belleza en Villa Del Dique',
    images: [
      {
        url: 'https://www.nadivas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Nadiva's Estética e Insumos",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nadiva's Estética e Insumos",
    description: 'Centro de estética integral e insumos de belleza en Villa Del Dique',
    images: ['https://www.nadivas.com/twitter-image.jpg'],
    creator: '@nadivas',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

