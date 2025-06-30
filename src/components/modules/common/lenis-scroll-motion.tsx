'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { cancelFrame, frame } from 'motion/react'
import { useMergedRef } from '@/libs/hooks/use-merged-ref'

const LenisScrollMotion = ({
  wrapperRef,
  children,
}: {
  wrapperRef?: React.RefObject<HTMLDivElement | null>
  children?: React.ReactNode
}) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const mergedRef = useMergedRef(scrollAreaRef, wrapperRef)

  useEffect(() => {
    if (!scrollAreaRef.current || typeof window === 'undefined') return

    lenisRef.current = new Lenis({
      wrapper: scrollAreaRef.current,
      autoRaf: false,
    })

    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.raf(time)
    }

    frame.update(update, true)

    return () => {
      cancelFrame(update)
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <div
      ref={mergedRef}
      className="h-dvh overflow-y-auto scrollbar-hidden"
    >
      {children}
    </div>
  )
}

export { LenisScrollMotion }
