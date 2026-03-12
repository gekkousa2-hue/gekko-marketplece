import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gekko Marketplace | Ultra-Modern Tech Store',
  description: 'Futuristic tech marketplace with premium products, incredible performance, and cutting-edge design',
  keywords: ['tech store', 'gekko', 'marketplace', 'futuristic', 'premium'],
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
