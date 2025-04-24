import { formatShortDate } from 'app/blog/utils'
import { externalPosts } from '../data/external-posts'

export function LocalPosts() {
    return (
        <div>

            {externalPosts
                .sort((a, b) => {
                    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                        return -1
                    }
                    return 1
                })
                .map((post) => (
                    <a
                        key={post.url}
                        className="flex flex-col space-y-1 mb-4"
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                            <p className="text-neutral-600 dark:text-neutral-400 min-w-[100px] tabular-nums">
                                {formatShortDate(post.publishedAt)}
                            </p>
                            <p className="text-neutral-900 dark:text-neutral-100 tracking-tightflex-1">
                                {post.title}
                            </p>
                        </div>
                    </a>
                ))}
        </div>
    )
}