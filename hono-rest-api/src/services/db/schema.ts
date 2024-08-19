import {
  pgTable,
  serial,
  varchar,
  integer,
  pgEnum,
  timestamp,
} from "drizzle-orm/pg-core";

const roleEnum = pgEnum("role", ["admin", "editor", "viewer"]);

// NOTE: テーブル定義
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  role: roleEnum("role").notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  content: varchar("content", { length: 1024 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

// NOTE: テーブルの型定義
export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type SelectPost = typeof posts.$inferSelect;
export type InsertPost = typeof posts.$inferInsert;
