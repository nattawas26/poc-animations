'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/libs/utils/cn'
import Image from 'next/image'
import { useNewsDetailContext } from '@/components/modules/news-detail/context'

type NextNewsArticleProps = {
  title: string
  date: string
  cover: string
}

const NextArticle = ({ title, date, cover }: NextNewsArticleProps) => {
  const { isNavigated, amountY, isHovered } = useNewsDetailContext()
  const [windowHeight, setWindowHeight] = useState<number>(2000)

  useEffect(() => {
    const thisWindowHeight = window.innerHeight
    setWindowHeight(thisWindowHeight)
  }, [])

  return (
    <div
      className={cn('fixed left-0 top-0 w-full transition-transform duration-100')}
      style={{
        transform: `translateY(${isNavigated ? 0 : windowHeight - amountY}px)`,
      }}
    >
      <div
        className={cn(
          'bg-white duration-500 transition-all mx-auto',
          isNavigated ? 'max-w-full h-auto' : 'max-w-[80rem] h-[27.75rem]',
          isHovered ? 'scale-105' : ''
        )}
      >
        <div
          className={cn(
            'relative transition-[height] duration-500 ease-in-out',
            isNavigated ? 'h-[calc(100svh)]' : 'h-60'
          )}
        >
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="10vw"
          />
        </div>
        <div
          className={cn(
            'transition-opacity duration-500 ease-in-out bg-black/5',
            isNavigated ? 'opacity-0' : 'opacity-100'
          )}
        >
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

export { NextArticle }
