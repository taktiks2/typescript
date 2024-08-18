import { pgTable, serial, varchar, integer, pgEnum } from "drizzle-orm/pg-core";

const roleEnum = pgEnum("role", ["admin", "editor", "viewer"]);

// NOTE: テーブル定義
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  role: roleEnum("role").notNull(),
});

// NOTE: テーブルの型定義
export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
