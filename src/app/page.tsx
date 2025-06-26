import Image from 'next/image'
import { Link } from 'next-view-transitions'

export default function Home() {
  return (
    <div className="c-container space-y-10 py-12">
      <h1 className="text-4xl font-bold">Home</h1>
      <div className="relative aspect-video">
        <Image
          src="/test-images/test-1.jpg"
          alt="Home"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="space-y-5">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      {/* <Link
        href="/about"
        className="bg-fuchsia-100 size-40 mx-auto mt-20 hover:scale-105 transition-all duration-300 p-4 rounded-2xl flex justify-center items-center text-gray-950 font-bold text-xl about-transition"
      >
        About
      </Link> */}
    </div>
  )
}
