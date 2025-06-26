'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { useNewsDetailContext } from '@/components/modules/news-detail/context'
import { useScroll, useMotionValueEvent } from 'motion/react'

const NextArticleLink = ({ slug }: { slug: string }) => {
  const { setIsNavigated, setAmountY, setIsHovered } = useNewsDetailContext()

  const linkRef = useRef<HTMLAnchorElement>(null)

  const { scrollY } = useScroll()

  const updateDistance = () => {
    const el = linkRef.current
    if (!el) return
    setAmountY(window.innerHeight - el.getBoundingClientRect().top)
  }

  useEffect(updateDistance, [setAmountY])
  useMotionValueEvent(scrollY, 'change', updateDistance)

  return (
    <Link
      ref={linkRef}
      href={`/news/${slug}`}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 max-w-[80rem] w-full h-[27.75rem] block"
      onClick={(e) => {
        e.preventDefault()
        setIsNavigated(true)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}

export { NextArticleLink }
