import { BlogPosts } from 'app/components/posts'
import { LocalPosts } from '../components/local-posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <>
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
        <BlogPosts />
      </section>
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">External Articles</h1>
        <LocalPosts />
      </section>
    </>
  )
}
