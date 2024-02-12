export interface ApiResponse {
	message: string;
}

export interface Post {
	id: number;
	authorId: number;
	title: string;
	text: string;
	status: 'todo' | 'progress' | 'done';
	createdAd: Date;
	updatedAt: Date;
}

export interface PostCreate {
	authorId: number;
	title: string;
	text: string;
	status: 'todo' | 'progress' | 'done';
}

export interface User {
	id: number;
	username: string;
	email: string;
	password: string;
	createdAt: Date;
}

export interface UserCreate {
	username: string;
	email: string;
	password: string;
}
