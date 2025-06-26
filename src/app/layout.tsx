import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import { ViewTransitions } from 'next-view-transitions'
import { Header } from '@/components/layout/header'
import { LenisScroll } from '@/components/layout/lenis-scroll'
import { ScrollToTop } from '@/components/layout/scroll-to-top'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'POC Animations',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <LenisScroll />
          <ScrollToTop />
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ViewTransitions>
  )
}
