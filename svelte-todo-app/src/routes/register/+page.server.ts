import type { Actions } from './$types';
import { getAPIClient } from '$lib/apiClient';
import { redirect, fail } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

const apiClient = getAPIClient();

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username') as string | null;
		const email = data.get('email') as string | null;
		const password = data.get('password') as string | null;

		// TODO: zodによるバリデーションを追加
		if (!username || !email || !password) return;

		const hashedPassword = await bcrypt.hash(password, 10);
		const res = await apiClient.createUser({ username, email, password: hashedPassword });
		if (res.message === 'exists') {
			return fail(400, { message: res.message });
		}
		return redirect(303, '/login');
	}
} satisfies Actions;
