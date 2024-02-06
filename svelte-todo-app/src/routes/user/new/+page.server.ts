import type { Actions } from './$types';
import { getAPIClient } from '$lib/apiClient';

const apiClient = getAPIClient();

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string | null;
		const age = Number(data.get('age')) as number | null;
		const email = data.get('email') as string | null;

		if (!name || !age || !email) return;

		try {
			await apiClient.createUser({ name, age, email });
			return { success: true };
		} catch (error) {
			console.error('エラーが発生しました', error);
		}
	}
} satisfies Actions;
