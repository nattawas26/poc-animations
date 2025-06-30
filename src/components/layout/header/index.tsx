import { Navigation } from '@/components/layout/header/navigation'

const Header = () => {
  return (
    <header className="flex fixed top-0 left-0 w-full z-20 justify-center h-14 items-center border-b border-gray-950 bg-white shrink-0">
      <Navigation />
    </header>
  )
}

export { Header }
