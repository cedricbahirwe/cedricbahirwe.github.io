import Link from 'next/link'
import { getAllBlogPosts, type BlogPost } from 'app/blog/posts'
import { formatShortDate } from 'app/blog/utils'

function PostLink({ post }: { post: BlogPost }) {
  return (
    <Link className="flex flex-col space-y-1 mb-4" href={post.href}>
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <p className="text-neutral-600 dark:text-neutral-400 min-w-[100px] tabular-nums">
          {formatShortDate(post.publishedAt)}
        </p>
        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight underline underline-offset-2 transition-colors hover:text-red-700 dark:hover:text-red-400">
          {post.title}
        </p>
      </div>
    </Link>
  )
}

export function BlogPosts() {
  let allBlogs = getAllBlogPosts()

  return (
    <div>
      {allBlogs.map((post) => (
        <PostLink key={post.href} post={post} />
      ))}
    </div>
  )
}
