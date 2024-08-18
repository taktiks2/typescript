import { createRoute, z } from "@hono/zod-openapi";
import { BodySchema, UserSchema } from "./schemas";

export const getUsers = createRoute({
  method: "get",
  path: "/v1/users",
  responses: {
    200: {
      description: "List of users",
      content: {
        "application/json": {
          schema: UserSchema.array(),
        },
      },
    },
  },
});

export const postUsers = createRoute({
  method: "post",
  path: "/v1/users",
  request: {
    body: {
      content: {
        "application/json": {
          schema: BodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "User created",
      content: {
        "text/plain": {
          schema: z.string(),
        },
      },
    },
  },
});
