import type { PageServerLoad } from './$types';
import { getAPIClient } from '$lib/apiClient';

const apiClient = getAPIClient();

export const load = (async () => {
	const users = await apiClient.getUsers();
	return { users };
}) satisfies PageServerLoad;
