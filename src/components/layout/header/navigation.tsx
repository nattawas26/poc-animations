'use client'

import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'

const items: { href: string; label: string }[] = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/news', label: 'NEWS' },
  { href: '/contact', label: 'CONTACT' },
]

const Navigation = () => {
  const router = useTransitionRouter()

  return (
    <nav className="flex gap-x-10">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="uppercase font-bold"
          onClick={(e) => {
            e.preventDefault()
            router.push(item.href)
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export { Navigation }
