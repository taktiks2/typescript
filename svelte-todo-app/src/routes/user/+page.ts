import type { PageLoad } from './$types';
import { getAPIClient } from '$lib/apiClient';

const apiClient = getAPIClient();

export const load: PageLoad = async () => {
	const users = await apiClient.getUsers();
	return { users };
};
