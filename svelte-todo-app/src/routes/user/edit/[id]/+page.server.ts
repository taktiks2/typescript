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
		const name = data.get('name') as string | null;
		const age = Number(data.get('age')) as number | null;
		const email = data.get('email') as string | null;

		// TODO: zodによるバリデーションを追加
		if (!name || !age || !email) return;

		await apiClient.updateUser({ id, name, age, email });
		redirect(303, '/user');
	}
} satisfies Actions;
