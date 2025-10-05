import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Code Forge - Chaitanya 1.0 Hackathon',
  description: 'A 36-hour college hackathon — ideate, build, and pitch. November, 2025.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="font-sans bg-cyber-dark text-cyber-gray overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
