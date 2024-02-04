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
