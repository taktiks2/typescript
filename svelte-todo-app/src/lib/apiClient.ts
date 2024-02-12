import * as apiTypes from './apiTypes';
import { PUBLIC_API_ENDPOINT } from '$env/static/public';

class APIClient {
	private basePath = '';

	constructor(apiEndpoint: string) {
		this.basePath = apiEndpoint;
	}

	public async postPassword(email: string): Promise<apiTypes.User> {
		return this.post('/users/password', { email });
	}

	public async getUsers(): Promise<apiTypes.User[]> {
		return this.get('/users');
	}

	public async getUser(id: string): Promise<apiTypes.User> {
		return this.get(`/users/${id}`);
	}

	public async createUser(req: apiTypes.UserCreate): Promise<apiTypes.ApiResponse> {
		return this.post('/users', req);
	}

	public async updateUser(req: apiTypes.User): Promise<apiTypes.ApiResponse> {
		return this.put(`/users/${req.id}`, req);
	}

	public async deleteUser(id: string): Promise<apiTypes.ApiResponse> {
		return this.delete(`/users/${id}`);
	}

	public async getPosts(): Promise<apiTypes.Post[]> {
		return this.get('/posts');
	}

	public async getPost(id: string): Promise<apiTypes.Post> {
		return this.get(`/posts/${id}`);
	}

	public async createPost(req: apiTypes.PostCreate): Promise<apiTypes.ApiResponse> {
		return this.post('/posts', req);
	}

	public async updatePost(req: apiTypes.Post): Promise<apiTypes.ApiResponse> {
		return this.put(`/posts/${req.id}`, req);
	}

	public async deletePost(id: string): Promise<apiTypes.ApiResponse> {
		return this.delete(`/posts/${id}`);
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
