import { eq } from 'drizzle-orm';
import db from '@/services/db';
import { SelectUser, InsertUser, users } from '@/services/db/schema';

export class User {
  id: string;
  name: string;
  email: string;
  age: number;
  role: 'admin' | 'editor' | 'viewer';
  constructor(user: SelectUser) {
    this.id = '' + user.id;
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

  static async getById(id: number) {
    const res = await db.select().from(users).where(eq(users.id, id)).execute();
    return new User(res[0]).params();
  }

  static async update(id: number, user: Partial<InsertUser>) {
    const res = await db.update(users).set(user).where(eq(users.id, id)).returning().execute();
    return new User(res[0]).params();
  }

  static async delete(id: number) {
    await db.delete(users).where(eq(users.id, id)).execute();
  }
}
