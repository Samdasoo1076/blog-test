// DojeCard.tsx

import React from 'react'
import Image from './Image'
import Link from './Link'
import SocialIcon from '@/components/social-icons'

const DojeCard = ({ title, description, imgSrc, href, github, instar }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-b-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="flex justify-center">
              <Image
                alt={title}
                src={imgSrc}
                className="rounded-full object-cover object-center md:h-36 lg:h-48"
                width={200}
                height={350}
              />
            </div>
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={200}
            height={350}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          ></Link>
        )}{' '}
        <div className="flex items-center space-x-2">
          {href && <SocialIcon kind="github" href={github} size={6} />}
          {href && <SocialIcon kind="instagram" href={instar} size={6} />}
        </div>
      </div>
    </div>
  </div>
)

export default DojeCard
