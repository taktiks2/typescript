import type { PageServerLoad, Actions } from './$types';
import { getAPIClient } from '$lib/apiClient';
import { redirect } from '@sveltejs/kit';

const apiClient = getAPIClient();

export const load = (async ({ params }) => {
	const id = params.id;
	const user = await apiClient.getUser(id);
	return { user };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, params }) => {
		const id = Number(params.id);
		const data = await request.formData();
		const username = data.get('username') as string | null;
		const email = data.get('email') as string | null;
		const password = data.get('password') as string | null;

		// TODO: zodによるバリデーションを追加
		if (!username || !email || !password) return;

		await apiClient.updateUser({ id, username, email, password });
		redirect(303, '/user');
	}
} satisfies Actions;
