import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import React from 'react'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default function TagsPage() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <div className="mt-24 flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
      <div className="space-y-5 md:space-y-0 md:border-r-2 md:px-6">
        <h1 className="text-4xl font-bold leading-10 text-gray-900 dark:text-gray-100 md:text-6xl md:leading-14">
          태그
        </h1>
      </div>
      <div className="mt-6 flex max-w-lg flex-wrap md:mt-0">
        {tagKeys.length === 0 && <p>No tags found.</p>}
        {sortedTags.map((tag) => (
          <div key={tag} className="mb-2 mr-5">
            <Link
              href={`/tags/${slug(tag)}`}
              className="ml-2 inline-flex items-center rounded-md border border-transparent bg-gray-200 px-3 py-1 text-sm font-semibold uppercase text-gray-600 hover:bg-primary-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-400 dark:hover:text-white"
              aria-label={`View posts tagged ${tag}`}
            >
              {tag} ({tagCounts[tag]})
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
