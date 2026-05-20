import { getBlogPosts } from 'app/blog/utils'

export type BlogPost = {
  title: string
  publishedAt: string
  href: string
  summary?: string
}

const externalPosts: BlogPost[] = [
  {
    title: 'Using State Machines to Model USSD Flows in the Dial It iOS App',
    publishedAt: '2026-05-18',
    summary:
      'Using state machines in iOS to reliably detect user intent in USSD flows with partial system signals and safer event tracking.',
    href: 'https://blog.cedricbahirwe.com/using-state-machines-to-model-ussd-flows-in-the-dial-it-ios-app',
  },
]

export function getAllBlogPosts() {
  let internalPosts = getBlogPosts().map((post) => ({
    title: post.metadata.title,
    publishedAt: post.metadata.publishedAt,
    summary: post.metadata.summary,
    href: `/blog/${post.slug}`,
  }))

  return [...externalPosts, ...internalPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1
    }
    return 1
  })
}
