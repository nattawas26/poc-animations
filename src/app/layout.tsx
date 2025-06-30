import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/libs/utils/cn'
import { ViewTransitions } from 'next-view-transitions'
import { Header } from '@/components/layout/header'
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
        <body className={cn('antialiased flex flex-col min-h-dvh', geistSans.variable, geistMono.variable)}>
          <Header />
          {children}
          <ScrollToTop />
        </body>
      </html>
    </ViewTransitions>
  )
}
