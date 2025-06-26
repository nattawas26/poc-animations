import { cn } from '@/libs/utils/cn'
import Image, { type ImageProps } from 'next/image'
import parse from 'html-react-parser'

type NewsCardLayoutProps = { info: React.ReactElement; image: React.ReactElement } & React.ComponentProps<'div'>

const NewsCardLayout = ({ info, image, className }: NewsCardLayoutProps) => {
  return (
    <div className={cn('flex gap-x-10', className)}>
      <div className="flex-1 space-y-10">{info}</div>
      <div className="shrink-0 w-40 aspect-square relative bg-gray-100">{image}</div>
    </div>
  )
}

type NewsCardInfoProps = {
  title: string
  description: string
  date: string
}

const NewsCardInfo = ({ title, description, date }: NewsCardInfoProps) => {
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold line-clamp-2">{title}</h2>
        <p className="text-gray-500 line-clamp-2">{parse(description)}</p>
      </div>
      <div className="mt-auto">
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </>
  )
}

type NewsCardImageProps = Omit<ImageProps, 'fill' | 'sizes'>

const NewsCardImage = ({ src, alt, className, ...props }: NewsCardImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="160px"
      className={cn('object-cover object-center', className)}
      {...props}
    />
  )
}

export { NewsCardLayout, NewsCardInfo, NewsCardImage }
