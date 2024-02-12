import type { PageServerLoad } from './$types';
import { getAPIClient } from '$lib/apiClient';

const apiClient = getAPIClient();

export const load = (async () => {
	const posts = await apiClient.getPosts();
	console.log('postpostpost');
	return { posts };
}) satisfies PageServerLoad;
