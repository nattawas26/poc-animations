'use client'

import { ReactLenis, type LenisRef } from 'lenis/react'
import { useEffect, useRef } from 'react'

const LenisScrollRaf = ({
  root = false,
  className,
  children,
}: {
  root?: boolean
  className?: string
  children?: React.ReactNode
}) => {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time)
    }

    const rafId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <ReactLenis
      root={root}
      options={{ autoRaf: false }}
      ref={lenisRef}
      className={className}
    >
      {children}
    </ReactLenis>
  )
}

export { LenisScrollRaf }
