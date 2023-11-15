import { blogPages  } from './data.js';
const db_blog = blogPages()

export function load() {
	return {
		blogPage: db_blog.map((post) => ({
      		slug: post.slug,
			title: post.title,
			mode: post.mode,
			titleVisual: post.titleVisual,
			date: post.date,
			text: post.text
		})),
	};
}