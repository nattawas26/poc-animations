'use client'

import { useEffect, useRef } from 'react'
import { cancelFrame, frame } from 'motion/react'
import Lenis from 'lenis'
import { useMergedRef } from '@/libs/hooks/use-merged-ref'
import { usePathname } from 'next/navigation'

const LenisScrollMotion = ({ ref, ...props }: React.ComponentProps<'div'>) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const mergedRef = useMergedRef(scrollAreaRef, ref)

  const pathname = usePathname()

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
    }
  }, [pathname])

  return (
    <div
      ref={mergedRef}
      className="h-dvh overflow-y-auto scrollbar-hidden"
      {...props}
    />
  )
}

export { LenisScrollMotion }
