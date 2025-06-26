import { newsItems } from '@/libs/data'
import { NewsCardLayout, NewsCardInfo, NewsCardImage } from '@/components/modules/news/news-card'
import { Link } from 'next-view-transitions'

export default function News() {
  return (
    <div className="c-container space-y-10 py-12">
      <h1 className="text-4xl font-bold mb-20">News</h1>
      <div className="space-y-10 lg:space-y-10">
        {newsItems.map((item, index) => (
          <div
            key={item.slug}
            className="pb-10 border-b border-gray-200"
          >
            <Link href={`/news/${item.slug}`}>
              <NewsCardLayout
                info={
                  <NewsCardInfo
                    title={item.title}
                    description={item.description}
                    date={item.date}
                  />
                }
                image={
                  <NewsCardImage
                    src={item.cover}
                    alt={item.title}
                    priority={index <= 2}
                  />
                }
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
