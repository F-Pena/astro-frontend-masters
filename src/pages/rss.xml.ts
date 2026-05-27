import rss from '@astrojs/rss';
import type { AstroConfig } from 'astro';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();

export async function GET(context: AstroConfig) {
	const posts = await getCollection('blog');

	return rss({
		title: 'The sndwch Blog',
		description: 'All sandwich news, all the time.',
		site: context.site ?? new URL('https://astro-frontend-masters.netlify.app'),
		items: posts.map((post) => {
			return {
				title: post.data.title,
				pubDate: post.data.date,
				description: post.data.description,
				link: `/blog/${post.data.slug}`,
				content: sanitizeHtml(parser.render(post.body ?? '')),
			};
		}),
	});
}
