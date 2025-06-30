import { LenisScrollRaf } from '@/components/modules/common/lenis-scroll-raf'
import { Footer } from '@/components/layout/footer'

export default function NormalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <LenisScrollRaf root />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
