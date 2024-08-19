import { createRoute, z } from "@hono/zod-openapi";
import { BodySchema, PostSchema } from "./schema";

export const getPosts = createRoute({
  method: "get",
  path: "/v1/posts",
  responses: {
    200: {
      description: "List of posts",
      content: {
        "application/json": {
          schema: PostSchema.array(),
        },
      },
    },
  },
  tags: ["posts"],
});

export const postPosts = createRoute({
  method: "post",
  path: "/v1/posts",
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
      description: "Post created",
      content: {
        "text/plain": {
          schema: z.string(),
        },
      },
    },
  },
  tags: ["posts"],
});
