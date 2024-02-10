export interface Post {
	id: number;
	title: string;
	text: string;
	status: 'todo' | 'progress' | 'done';
	postedAt: string;
}

export interface PostCreate {
	title: string;
	text: string;
	status: 'todo' | 'progress' | 'done';
	postedAt: string;
}

export interface User {
	id: number;
	name: string;
	age: number;
	email: string;
}

export interface UserCreate {
	name: string;
	age: number;
	email: string;
}
