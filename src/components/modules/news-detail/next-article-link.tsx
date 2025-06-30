'use client'

import Link from 'next/link'
import { useNewsDetailContext } from '@/components/modules/news-detail/context'
import { cn } from '@/libs/utils/cn'

const NextArticleLink = ({ slug }: { slug: string }) => {
  const { setIsNavigated, setIsHovered, breakpointRef } = useNewsDetailContext()

  return (
    <Link
      ref={breakpointRef}
      aria-label={`Navigate to ${slug}`}
      href={`/news/${slug}`}
      className={cn(
        'absolute bottom-0 left-1/2 -translate-x-1/2 z-10',
        'max-w-[80rem] w-full h-[23.5rem] lg:h-[27.75rem] block border-t border-red-500'
      )}
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
