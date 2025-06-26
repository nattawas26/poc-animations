'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type NewsDetailContextType = {
  isNavigated: boolean
  setIsNavigated: (value: boolean) => void
  amountY: number
  setAmountY: (value: number) => void
  isHovered: boolean
  setIsHovered: (value: boolean) => void
}

const NewsDetailContext = createContext<NewsDetailContextType | undefined>(undefined)

export function NewsDetailProvider({ children }: { children: ReactNode }) {
  const [isNavigated, setIsNavigated] = useState<boolean>(false)
  const [amountY, setAmountY] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <NewsDetailContext.Provider value={{ isNavigated, setIsNavigated, amountY, setAmountY, isHovered, setIsHovered }}>
      {children}
    </NewsDetailContext.Provider>
  )
}

export function useNewsDetailContext() {
  const context = useContext(NewsDetailContext)
  if (context === undefined) {
    throw new Error('useNewsDetailContext must be used within a NewsDetailProvider')
  }
  return context
}
