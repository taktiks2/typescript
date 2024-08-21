import { createRoute } from "@hono/zod-openapi";
import { ParamsSchema, PutBodySchema } from "./schema";
import { UserSchema } from "../schema";

export const GET = createRoute({
  method: "get",
  path: "/",
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      description: "User found",
      content: {
        "application/json": {
          schema: UserSchema,
        },
      },
    },
  },
  tags: ["users"],
});

export const PUT = createRoute({
  method: "put",
  path: "/",
  request: {
    body: {
      content: {
        "application/json": {
          schema: PutBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "User updated",
      content: {
        "application/json": {
          schema: UserSchema,
        },
      },
    },
  },
  tags: ["users"],
});

export const DELETE = createRoute({
  method: "delete",
  path: "/",
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      description: "User deleted",
    },
  },
  tags: ["users"],
});
