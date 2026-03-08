import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bowen AI Strategy Group | The World Node Interface',
  description: 'Navigate the global digital landscape with integrated LLM intelligence. Deploy AI strategy at scale.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="antialiased text-slate-100 bg-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
