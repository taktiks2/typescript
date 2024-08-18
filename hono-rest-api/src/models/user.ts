import db from "../services/db";
import { SelectUser, InsertUser, users } from "../services/db/schema";

export class User {
  id: string;
  name: string;
  email: string;
  age: number;
  role: "admin" | "editor" | "viewer";
  constructor(user: SelectUser) {
    this.id = "" + user.id;
    this.name = user.name;
    this.email = user.email;
    this.age = user.age;
    this.role = user.role;
  }

  params() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      age: this.age,
      role: this.role,
    };
  }

  static async create(user: InsertUser) {
    const res = await db.insert(users).values(user).returning().execute();
    return new User(res[0]).params();
  }

  static async getAll() {
    const res = await db.select().from(users).execute();
    return res.map((data) => new User(data).params());
  }
}
