'use client'
import { useEffect, useState } from 'react'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import React from 'react'
import DonutChart from '@/components/DonutChart'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const date = new Date()
      setCurrentTime(date.toLocaleTimeString())
    }

    updateTime()
    const timer = setInterval(updateTime, 1000) // 매 초마다 시간 업데이트

    return () => clearInterval(timer)
  }, [])
  const data = {
    labels: ['이', '지', '민'],
    datasets: [
      {
        label: '# of Votes',
        data: [174, 72, 22],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  }

  const chunkArray = (array, size) => {
    const chunkedArr = []
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size))
    }
    return chunkedArr
  }

  const groupedPosts = chunkArray(posts, 4)

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
          <div className="h-48 w-48">
            <DonutChart data={data} />
          </div>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <div className="space-y-12">
          {!posts.length && 'No posts found.'}
          {groupedPosts.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {group.map((post) => {
                const { slug, date, title, summary, tags } = post
                return (
                  <article key={slug} className="space-y-4">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      <p className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</p>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read more: "${title}"`}
                      >
                        자세히 보기 &rarr;
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
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
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
