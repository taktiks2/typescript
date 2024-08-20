import db from "../services/db";
import { SelectPost, InsertPost, posts } from "../services/db/schema";

export class Post {
  id: string;
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  constructor(post: SelectPost) {
    this.id = "" + post.id;
    this.userId = "" + post.userId;
    this.title = post.title;
    this.content = post.content;
    this.createdAt = post.createdAt;
    this.updatedAt = post.updatedAt;
  }

  params() {
    return {
      id: this.id,
      userId: this.userId,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  static async create(post: InsertPost) {
    const res = await db
      .insert(posts)
      .values(this.formatter(post))
      .returning()
      .execute();
    return new Post(res[0]).params();
  }

  private static formatter(post: InsertPost) {
    return {
      ...post,
      updatedAt: new Date(),
    };
  }

  static async getAll() {
    const res = await db.select().from(posts).execute();
    return res.map((data) => new Post(data).params());
  }
}
