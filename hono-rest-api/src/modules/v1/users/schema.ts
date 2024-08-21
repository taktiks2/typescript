import { z } from "@hono/zod-openapi";

export const PostBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
  role: z.enum(["admin", "editor", "viewer"]),
});

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
  role: z.enum(["admin", "editor", "viewer"]),
});
