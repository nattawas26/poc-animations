'use client'

import { motion } from 'motion/react'
import { useNewsDetailContext } from '@/components/modules/news-detail/root'

const TestScrollAnimate = () => {
  const { scrollYProgress } = useNewsDetailContext()
  console.log(scrollYProgress)
  return (
    <motion.div
      style={{
        opacity: scrollYProgress,
      }}
      className="h-[444px] w-full fixed bottom-0 left-0 z-10 bg-red-500"
    />
  )
}

export { TestScrollAnimate }
