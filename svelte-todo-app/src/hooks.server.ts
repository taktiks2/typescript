import { type Handle, type RequestEvent, error, redirect } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';
import * as jose from 'jose';

type MiddlewareResult = true | Response;

const unauthPages = ['/login', '/register'];

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	const userAuthResult = await userAuth(event);
	if (userAuthResult !== true) {
		return userAuthResult;
	}
	return response;
};

async function userAuth(event: RequestEvent): Promise<MiddlewareResult> {
	const jwtSecret = JWT_SECRET;
	if (!jwtSecret) {
		return error(500, { message: 'Missing JWT_SECRET' });
	}

	const token = event.cookies.get('todo-auth-token') || '';

	try {
		await jose.jwtVerify(token, new TextEncoder().encode(jwtSecret));
	} catch (error) {
		if (unauthPages.includes(event.url.pathname)) {
			return true;
		}
		return redirect(302, '/login');
	}
	if (unauthPages.includes(event.url.pathname)) {
		return redirect(302, '/');
	}
	return true;
}
