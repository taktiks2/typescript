import * as apiTypes from './apiTypes';
import { PUBLIC_API_ENDPOINT } from '$env/static/public';

class APIClient {
	private basePath = '';

	constructor(apiEndpoint: string) {
		this.basePath = apiEndpoint;
	}

	public async getUsers(): Promise<apiTypes.User[]> {
		return this.get('/users');
	}

	public async createUser(req: apiTypes.UserCreate): Promise<object> {
		return this.post('/users', req);
	}

	public async updateUser(req: apiTypes.User): Promise<object> {
		return this.put(`/users/${req.id}`, req);
	}

	public async deleteUser(id: number): Promise<object> {
		return this.delete(`/users/${id}`);
	}

	private async get<T>(path: string): Promise<T> {
		const res = await fetch(this.basePath + path, {
			method: 'GET',
			headers: this.createHeaders()
		});

		const json = await res.json();

		return json;
	}

	private async post<T>(path: string, body: any): Promise<T> {
		const res = await fetch(this.basePath + path, {
			method: 'POST',
			headers: this.createHeaders(),
			body: JSON.stringify(body)
		});

		const json = await res.json();

		return json;
	}

	private async put<T>(path: string, body: any): Promise<T> {
		const res = await fetch(this.basePath + path, {
			method: 'PUT',
			headers: this.createHeaders(),
			body: JSON.stringify(body)
		});

		const json = await res.json();

		return json;
	}

	private async delete<T>(path: string, body?: any): Promise<T> {
		const res = await fetch(this.basePath + path, {
			method: 'DELETE',
			headers: this.createHeaders(),
			body: JSON.stringify(body)
		});

		const json = await res.json();

		return json;
	}

	private createHeaders(): HeadersInit {
		const headers = {
			'Content-Type': 'application/json'
		};
		return headers as HeadersInit;
	}
}

const apiClient = new APIClient(PUBLIC_API_ENDPOINT);

export function getAPIClient(): APIClient {
	return apiClient;
}
