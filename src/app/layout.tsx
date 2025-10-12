import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Code Forge | HPTU Hackathon - Chaitanya 1.0',
  description:
    'Join Code Forge HPTU — a 36-hour hackathon to ideate, build, and pitch innovative solutions. Organized by HPTU in November 2025.',
  keywords: [
    'Code Forge',
    'Code Forge HPTU',
    'HPTU',
    'hptu',
    'HPTU Hackathon',
    'Hackathon',
    'Chaitanya 1.0',
    'College Students',
    'College Event',
    'College Hackathon',
    'College Hackathon HPTU',
    'Hackathon Chaitanya 1.0',
    'College Hackathon HPTU Chaitanya',
    'Innovation',
    'HPTU Event',
  ],
  authors: [{ name: 'Code Forge HPTU Team' }],
  openGraph: {
    title: 'Code Forge | HPTU Hackathon - Chaitanya 1.0',
    description:
      'A 36-hour hackathon at HPTU for college students. Build projects, collaborate, and compete.',
    url: 'https://codeforge-hptu.vercel.app',
    siteName: 'Code Forge HPTU',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Code Forge HPTU Banner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://codeforge-hptu.vercel.app'),
  alternates: {
    canonical: 'https://codeforge-hptu.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <head>
        <meta
            name="google-site-verification"
            content="D3cWhFAW7mK0otrY9teKfrx2_sX4dqYYUhRw3_v29zc"
          />
      </head>
      <body className="font-sans bg-cyber-dark text-cyber-gray overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
