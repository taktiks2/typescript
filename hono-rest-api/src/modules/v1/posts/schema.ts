import { z } from "@hono/zod-openapi";

export const BodySchema = z.object({
  userId: z.string(),
  title: z.string(),
  content: z.string(),
});

export const PostSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
