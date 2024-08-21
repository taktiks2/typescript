import { createRoute } from "@hono/zod-openapi";
import { PostBodySchema, UserSchema } from "./schema";

export const GET = createRoute({
  method: "get",
  path: "/users",
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
  tags: ["users"],
});

export const POST = createRoute({
  method: "post",
  path: "/users",
  request: {
    body: {
      content: {
        "application/json": {
          schema: PostBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "User created",
      content: {
        "application/json": {
          schema: UserSchema,
        },
      },
    },
  },
  tags: ["users"],
});
