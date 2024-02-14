import type { PageServerLoad, Actions } from './$types';
import { getAPIClient } from '$lib/apiClient';
import { getUserId } from '$lib/cookie';

const apiClient = getAPIClient();

export const load = (async ({ cookies }) => {
	const userId = await getUserId(cookies);
	const posts = await apiClient.getPostsByAuthorId(userId);
	return { posts };
}) satisfies PageServerLoad;

export const actions = {
	create: async ({ request, cookies }) => {
		const authorId = await getUserId(cookies);
		const data = await request.formData();
		const title = data.get('title') as string | null;
		const text = data.get('text') as string | null;
		const status = data.get('status') as 'todo' | 'progress' | 'done' | null;

		// TODO: zodによるバリデーションを追加
		if (!title || !text || !status) return;

		await apiClient.createPost({ authorId, title, text, status });
	},
	edit: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id')) as number | null;
		const authorId = Number(data.get('authorId')) as number | null;
		const title = data.get('title') as string | null;
		const text = data.get('text') as string | null;
		const status = data.get('status') as 'todo' | 'progress' | 'done' | null;

		// TODO: zodによるバリデーションを追加
		if (!id || !authorId || !title || !text || !status) return;

		await apiClient.updatePost({ id, authorId, title, text, status });
		return;
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string | null;

		// TODO: zodによるバリデーションを追加
		if (!id) return;

		await apiClient.deletePost(id);
	}
} satisfies Actions;
