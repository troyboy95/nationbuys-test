import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: 'NBR Realty — Prime Lands & Pre-Leased Yields',
  description: 'Elevate Ambitions with NBR: Expert facilitation of prime land transactions and pre-leased commercial portfolios across Pune, Mumbai, Goa and Dubai.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
