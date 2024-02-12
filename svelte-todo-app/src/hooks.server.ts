import { type Handle, type RequestEvent, error, redirect } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';
import * as jose from 'jose';

type MiddlewareResult = true | Response;

const unauthPages = ['/login', '/register'];

export const handle: Handle = async ({ event, resolve }) => {
	console.log('middleware start');
	const response = await resolve(event);

	console.log('middleware userAuth start');
	const userAuthResult = await userAuth(event);

	console.log('middleware before if');
	if (userAuthResult !== true) {
		return userAuthResult;
	}

	console.log('middleware before response');
	return response;
};

async function userAuth(event: RequestEvent): Promise<MiddlewareResult> {
	console.log('middleware login start');
	if (event.url.pathname === '/login') {
		return true;
	}

	const jwtSecret = JWT_SECRET;
	if (!jwtSecret) {
		return error(500, { message: 'Missing JWT_SECRET' });
	}

	const token = event.cookies.get('todos-auth-token') || '';

	let obj: { userId: string };
	try {
		const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(jwtSecret));
		obj = payload as any;
		if (event.url.pathname === '/login') {
			return redirect(302, '/');
		}
	} catch (error) {
		if (unauthPages.includes(event.url.pathname)) {
			return true;
		}
		return redirect(302, '/login');
	}
	event.setHeaders({ 'auth-user-id': obj.userId });
	return true;
}
