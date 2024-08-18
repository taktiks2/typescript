import { z } from "@hono/zod-openapi";

export const BodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["admin", "editor", "viewer"]),
});

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["admin", "editor", "viewer"]),
});
