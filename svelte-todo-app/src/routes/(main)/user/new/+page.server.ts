import type { Actions } from './$types';
import { getAPIClient } from '$lib/apiClient';
import { redirect } from '@sveltejs/kit';

const apiClient = getAPIClient();

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string | null;
		const age = Number(data.get('age')) as number | null;
		const email = data.get('email') as string | null;

		// TODO: zodによるバリデーションを追加
		if (!name || !age || !email) return;

		// NOTE: 同一ユーザーを作成しようとしたら、クラッシュしたらDBがクラッシュした
		await apiClient.createUser({ name, age, email });
		redirect(303, '/user');
	}
} satisfies Actions;
