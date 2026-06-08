import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import {
  Space_Mono,
  VT323,
  Gloria_Hallelujah,
  Anton,
} from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
})
const vt323 = VT323({
  variable: '--font-vt323',
  subsets: ['latin'],
  weight: '400',
})
const gloria = Gloria_Hallelujah({
  variable: '--font-gloria',
  subsets: ['latin'],
  weight: '400',
})
const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'JCBV // CORRUPTED_ARCHIVE [seen this angel]',
  description:
    'An experimental post-internet portfolio of Juan Carlos B Valenzuela. A corrupted archive recovered from an abandoned server.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${vt323.variable} ${gloria.variable} ${anton.variable} bg-background`}
    >
      <body className="font-mono antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
