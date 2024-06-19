import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { CoreContent } from '../types' // 새로 만든 타입 정의 파일에서 CoreContent 타입 임포트

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts: CoreContent<(typeof allBlogs)[0]>[] = allCoreContent(sortedPosts)

  return <Main posts={posts} />
}
