import DojeData7 from '@/data/DojeData7'
import DojeCard from '@/components/DojeCard'
import { genPageMetadata } from 'app/seo'
import React from 'react'

export const metadata = genPageMetadata({ title: '도제 7기' })

export default function Doje7() {
  const socialLinks = [
    { kind: 'github', href: 'https://github.com/username' },
    { kind: 'instagram', href: 'https://www.instagram.com/username' },
  ]

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          도제 7기
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          상일미디어고등학교 도제 7기 졸업생들입니다.
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {DojeData7.map((d) => (
            <DojeCard
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              github={d.github}
              instar={d.instar}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
