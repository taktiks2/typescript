import type { Cookies } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';
import * as jose from 'jose';

export async function getUserId(cookies: Cookies): Promise<number> {
	const token = cookies.get('todo-auth-token') || '';
	const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
	return Number(payload.userId);
}
