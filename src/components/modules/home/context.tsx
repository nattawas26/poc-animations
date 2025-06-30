'use client'

import { createContext, useContext, useRef, ReactNode, RefObject } from 'react'
import { useScroll, MotionValue } from 'motion/react'

type ScrollContextType = {
  scrollRef: RefObject<HTMLDivElement | null>
  scrollYProgress: MotionValue<number>
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end end'],
  })

  return <ScrollContext.Provider value={{ scrollRef, scrollYProgress }}>{children}</ScrollContext.Provider>
}

export function useScrollContext() {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider')
  }
  return context
}
