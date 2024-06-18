'use client'
import { useEffect, useState } from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import CoverImage from '../components/CoverImage' // CoverImage 컴포넌트 임포트

const MAX_DISPLAY = 5

interface Post {
  slug: string
  date: string
  title: string
  summary?: string
  tags: string[]
  images: string[] // 변경: coverImage -> images로 수정
}

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const date = new Date()
      setCurrentTime(date.toLocaleTimeString())
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  const groupedPosts = posts.reduce((acc: Post[][], post, index) => {
    const groupIndex = Math.floor(index / 4)
    if (!acc[groupIndex]) {
      acc[groupIndex] = []
    }
    acc[groupIndex].push(post)
    return acc
  }, [])

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            최근 글
          </h1>
          <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            {currentTime}
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="space-y-12">
          {!posts.length && 'No posts found.'}
          {groupedPosts.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {group.map((post) => {
                const { slug, date, title, summary, tags, images } = post // coverImage -> images로 변경
                return (
                  <article
                    key={slug}
                    className="relative transform overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-md transition-all duration-300 ease-in-out hover:-rotate-2 hover:scale-105 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <CoverImage title={title} images={images} /> {/* CoverImage 컴포넌트 추가 */}
                    <div>
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-blue-400 dark:text-green-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-2">
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/blog/${slug}`}
                            className="transform text-gray-900 transition-transform duration-300 ease-in-out hover:scale-105 dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <p className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-start">
                      <Link
                        href={`/blog/${slug}`}
                        className="relative inline-block transform text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-600 dark:text-green-400 dark:hover:text-green-600"
                        aria-label={`Read more: "${title}"`}
                      >
                        자세히 보기 &rarr;
                        <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-blue-400 transition-transform duration-300 ease-in-out hover:scale-x-100 dark:bg-green-400"></span>
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          ))}
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="relative inline-block transform text-blue-400 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-600 dark:text-green-400 dark:hover:text-green-600"
            aria-label="All posts"
          >
            모든 노트 &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
