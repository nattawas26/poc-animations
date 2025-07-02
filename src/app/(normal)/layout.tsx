import { LenisScrollRoot } from '@/components/modules/common/lenis-scroll-root'
import { Footer } from '@/components/layout/footer'

export default function NormalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <LenisScrollRoot />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
