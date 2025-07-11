import { notFound } from 'next/navigation'
import { newsItems } from '@/libs/data'
import parse from 'html-react-parser'
import Image from 'next/image'
import { NewsDetailProvider } from '@/components/modules/news-detail/context'
import { NextArticle } from '@/components/modules/news-detail/next-article'
import { NextArticleLink } from '@/components/modules/news-detail/next-article-link'

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function NewsDetail({ params }: PageProps) {
  const { slug } = await params

  const thisItemIndex = newsItems.findIndex((item) => item.slug === slug)

  if (thisItemIndex < 0) notFound()

  const data = newsItems[thisItemIndex]

  const nextItemData = newsItems[thisItemIndex + 1]

  return (
    <NewsDetailProvider>
      <article>
        <section className="fixed size-full h-[calc(100svh-3.5rem)]">
          <Image
            src={data.cover}
            alt={data.title}
            fill
            className="object-cover object-center"
          />
        </section>
        <div className="h-[calc(100svh-3.5rem)] relative" />
        <div className="relative bg-white min-h-[calc(100svh-3.5rem)] pb-[27.75rem]">
          <section className="py-20">
            <div className="c-container">
              <div className="space-y-2 mb-10">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <p className="text-gray-500">{data.category}</p>
              </div>
              <div>{parse(data.description)}</div>
            </div>
          </section>
          {nextItemData ? <NextArticleLink slug={nextItemData.slug} /> : null}
        </div>
      </article>
      {nextItemData ? (
        <NextArticle
          title={nextItemData.title}
          date={nextItemData.date}
          cover={nextItemData.cover}
        />
      ) : null}
    </NewsDetailProvider>
  )
}
