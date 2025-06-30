'use client'

import { useScrollContext } from './context'

const TestScrollRef = () => {
  const { scrollRef } = useScrollContext()

  return (
    <div
      ref={scrollRef}
      className="w-full h-[400px] absolute bottom-0 left-0 border-t border-green-500"
    />
  )
}

export { TestScrollRef }
