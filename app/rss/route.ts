import { baseUrl } from "app/sitemap";
import { getAllBlogPosts } from "app/blog/posts";

function getAbsoluteUrl(href: string) {
	return new URL(href, baseUrl).toString();
}

export async function GET() {
	let allBlogs = getAllBlogPosts();

	const itemsXml = allBlogs
		.map(
			(post) =>
				`<item>
          <title>${post.title}</title>
          <link>${getAbsoluteUrl(post.href)}</link>
          <description>${post.summary || ""}</description>
          <pubDate>${new Date(
				post.publishedAt
			).toUTCString()}</pubDate>
        </item>`
		)
		.join("\n");

	const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Cedric's Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

	return new Response(rssFeed, {
		headers: {
			"Content-Type": "text/xml",
		},
	});
}
