import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={8} />
          <SocialIcon kind="github" href={siteMetadata.github} size={8} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={8} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={8} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={8} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={8} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.copy}</div>
        </div>
      </div>
    </footer>
  )
}
