import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bowen AI Strategy Group | The Future of Business Intelligence',
  description: 'Leverage autonomous agents and predictive synthesis to dominate your market. Deploy intelligence at scale.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased text-zinc-100 bg-black selection:bg-cyan-500/30`}>
        {children}
      </body>
    </html>
  )
}
