import type { Actions } from './$types';
import { getAPIClient } from '$lib/apiClient';
import { JWT_SECRET } from '$env/static/private';
import { redirect, fail } from '@sveltejs/kit';
import * as jose from 'jose';
import bcrypt from 'bcrypt';

const apiClient = getAPIClient();

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email') as string | null;
		const password = data.get('password') as string | null;

		// TODO: zodによるバリデーションを追加
		if (!email || !password) return;

		const user = await apiClient.postPassword(email);

		if (!bcrypt.compare(password, user.password)) {
			return fail(401, { massage: 'failed' });
		}

		const iat = Math.floor(Date.now() / 1000);
		const token = await new jose.SignJWT({ userId: user.id })
			.setProtectedHeader({
				alg: 'HS256',
				typ: 'JWT'
			})
			.setIssuedAt(iat)
			.setNotBefore(iat)
			.setExpirationTime('1m')
			.sign(new TextEncoder().encode(JWT_SECRET));

		cookies.set('todo-auth-token', token, {
			secure: true,
			path: '/',
			httpOnly: false,
			maxAge: 60 * 60 * 24
		});

		return redirect(302, '/');
	}
} satisfies Actions;
