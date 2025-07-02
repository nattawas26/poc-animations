'use client'

import { createContext, useContext, useRef, useState, ReactNode, RefObject, useEffect } from 'react'
import { useScroll, type MotionValue } from 'motion/react'
import { LenisScrollMotion } from '@/components/modules/common/lenis-scroll-motion'

type NewsDetailContextType = {
  isNavigated: boolean
  setIsNavigated: (value: boolean) => void
  isHovered: boolean
  setIsHovered: (value: boolean) => void
  breakpointRef: RefObject<HTMLAnchorElement | null>
  scrollYProgress: MotionValue<number>
  windowHeight: number
  breakpointTop: number
}

const NewsDetailContext = createContext<NewsDetailContextType | undefined>(undefined)

const NewsDetailRoot = ({ children }: { children: ReactNode }) => {
  const [isNavigated, setIsNavigated] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [windowHeight, setWindowHeight] = useState<number>(0)
  const [breakpointTop, setBreakpointTop] = useState<number>(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const breakpointRef = useRef<HTMLAnchorElement | null>(null)

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: breakpointRef,
    offset: ['start end', 'end end'],
  })

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight)

      // Update breakpointTop based on windowHeight - breakpointRef's height
      if (breakpointRef.current) {
        const rect = breakpointRef.current.getBoundingClientRect()
        setBreakpointTop(window.innerHeight - rect.height)
      }
    }

    // Initial update
    updateDimensions()

    // Only update on resize, not on scroll
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  return (
    <NewsDetailContext.Provider
      value={{
        isNavigated,
        setIsNavigated,
        isHovered,
        setIsHovered,
        breakpointRef,
        scrollYProgress,
        windowHeight,
        breakpointTop,
      }}
    >
      <LenisScrollMotion
        ref={containerRef}
        className="h-dvh overflow-y-auto scrollbar-hidden"
      >
        {children}
      </LenisScrollMotion>
    </NewsDetailContext.Provider>
  )
}

const useNewsDetailContext = () => {
  const context = useContext(NewsDetailContext)
  if (context === undefined) {
    throw new Error('useNewsDetailContext must be used within a NewsDetailProvider')
  }
  return context
}

export { NewsDetailRoot, useNewsDetailContext }
