import { error } from '@sveltejs/kit';
import { blogPages, blogPage, postComment, addComment } from '../data.ts';

const db = blogPages()
export function load({ params }) {
	const page = db.find((page) => page.slug === params.slug);
	if (!page) throw error(404);
	return {
		page,
		slug: params.slug,
		postPage: blogPage(params.slug),
		postComment: postComment(params.slug)
	};
}