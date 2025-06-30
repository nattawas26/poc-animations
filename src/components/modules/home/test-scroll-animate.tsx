'use client'

import { motion } from 'motion/react'
import { useScrollContext } from './context'

const TestScrollAnimate = () => {
  const { scrollYProgress } = useScrollContext()
  return (
    <motion.div
      style={{
        opacity: scrollYProgress,
      }}
      className="h-[400px] w-full fixed bottom-0 left-0 z-10 bg-red-500"
    />
  )
}

export { TestScrollAnimate }
