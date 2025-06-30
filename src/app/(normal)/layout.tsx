import { LenisScroll } from '@/components/layout/lenis-scroll'
import { Footer } from '@/components/layout/footer'

export default function NormalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <LenisScroll />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
