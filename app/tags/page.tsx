import Link from '@/components/Link'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import React from 'react'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default function TagsPage() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  // 태그 카운트에 따라 배경색 클래스를 반환하는 함수
  const getColorClass = (count: number) => {
    const maxCount = Math.max(...Object.values(tagCounts))
    const minCount = Math.min(...Object.values(tagCounts))
    const range = maxCount - minCount

    // count가 클수록 진한 색, 작을수록 연한 색으로 계산
    const brightness = Math.round(((count - minCount) / range) * 100)

    if (brightness < 30) {
      return 'bg-sky-300 text-indigo-400 dark:bg-green-300 dark:text-gray-800'
    } else if (brightness < 60) {
      return 'bg-sky-400 text-indigo-700 dark:bg-green-400 dark:text-white-900'
    } else {
      return 'bg-sky-500 text-indigo-900 dark:bg-green-500 dark:text-white'
    }
  }

  return (
    <div className="mt-24 px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold leading-10 text-gray-900 dark:text-gray-100">태그</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {sortedTags.length === 0 && <p>No tags found.</p>}
        {sortedTags.map((tag) => (
          <div
            key={tag}
            className={`overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 ${getColorClass(tagCounts[tag])}`}
          >
            <Link
              href={`/tags/${slug(tag)}`}
              className="block transform px-4 py-3 text-base font-semibold uppercase transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 dark:text-gray-900 dark:hover:text-green-600"
              aria-label={`View posts tagged ${tag}`}
            >
              <div className="flex items-center justify-between">
                <span>{tag}</span>
                <span className="text-sm text-gray-900">({tagCounts[tag]})</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
