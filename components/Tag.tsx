import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mb-2 mr-3 inline-block rounded-full bg-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 dark:bg-green-400 dark:hover:bg-green-600"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
