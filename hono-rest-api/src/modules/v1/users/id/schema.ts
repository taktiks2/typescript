import { z } from "@hono/zod-openapi";

export const ParamsSchema = z.object({
  id: z.string().openapi({
    param: {
      name: "id",
      in: "path",
    },
  }),
});

export const PutBodySchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  age: z.number().optional(),
  role: z.enum(["admin", "editor", "viewer"]).optional(),
});
