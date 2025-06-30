import { Navigation } from '@/components/layout/header/navigation'

const Header = () => {
  return (
    <header className="flex sticky top-0 z-20 justify-center h-14 items-center border-b border-gray-950 bg-white shrink-0">
      <Navigation />
    </header>
  )
}

export { Header }
