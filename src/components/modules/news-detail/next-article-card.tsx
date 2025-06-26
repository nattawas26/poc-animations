'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/libs/utils/cn'
import Image from 'next/image'
import { useNewsDetailContext } from '@/components/modules/news-detail/context'

type NextArticleCardProps = {
  title: string
  date: string
  cover: string
  slug: string
}

const HEADER_HEIGHT = 56

const NextArticleCard = ({ title, date, cover, slug }: NextArticleCardProps) => {
  const { isNavigated, amountY, isHovered } = useNewsDetailContext()
  const [windowHeight, setWindowHeight] = useState<number>(2000)

  const router = useRouter()

  useEffect(() => {
    const thisWindowHeight = window.innerHeight
    setWindowHeight(thisWindowHeight)
  }, [])

  return (
    <div
      className={cn(
        'fixed left-0 top-14 w-full transition-transform duration-100',
        isNavigated ? 'duration-1000 z-10 ease-cs-1' : ''
      )}
      style={{
        transform: `translateY(${isNavigated ? 0 : windowHeight - amountY - HEADER_HEIGHT}px)`,
      }}
      onTransitionEnd={() => {
        if (isNavigated) {
          router.push(`/news/${slug}`)
        }
      }}
    >
      <div
        className={cn(
          'bg-white transition-all w-full mx-auto ease-cs-1 duration-500',
          isNavigated ? 'max-w-full duration-1000' : 'max-w-[80rem]',
          isHovered ? 'scale-105' : ''
        )}
      >
        <div className={cn('relative ease-cs-1 duration-1000', isNavigated ? 'h-[calc(100svh-3.5rem)]' : 'h-60')}>
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="bg-black/5">
          <div className="max-w-[80rem] w-full mx-auto p-20">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-gray-500">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { NextArticleCard }
