'use client'

import { useRouter } from 'next/navigation'
import { cn } from '@/libs/utils/cn'
import Image from 'next/image'
import { useNewsDetailContext } from '@/components/modules/news-detail/context'
import { motion, useTransform } from 'motion/react'

type NextArticleCardProps = {
  title: string
  date: string
  cover: string
  slug: string
}

const NextArticleCard = ({ title, date, cover, slug }: NextArticleCardProps) => {
  const { isNavigated, isHovered, scrollYProgress, windowHeight, breakpointTop } = useNewsDetailContext()
  const y = useTransform(scrollYProgress, [0, 1], [windowHeight, breakpointTop - 56])

  const router = useRouter()

  console.log('breakpointTop: ', breakpointTop)

  return (
    <motion.div
      className={cn(
        'fixed left-0 top-14 w-full bg-black/5',
        isNavigated ? 'duration-1000 z-10 ease-cs-1 transition-transform' : ''
      )}
      style={{
        translateY: y,
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
        <div className={cn('relative ease-cs-1 duration-1000', isNavigated ? 'h-[calc(100dvh-3.5rem)]' : 'h-60')}>
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div>
          <div className="max-w-[80rem] w-full mx-auto lg:p-20 p-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="text-gray-500">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export { NextArticleCard }
