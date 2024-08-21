import { createRoute } from "@hono/zod-openapi";
import { ParamsSchema, PutBodySchema } from "./schema";
import { UserSchema } from "../schema";

export const getUserById = createRoute({
  method: "get",
  path: "/v1/users/{id}",
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

export const putUser = createRoute({
  method: "put",
  path: "/v1/users/{id}",
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

export const deleteUser = createRoute({
  method: "delete",
  path: "/v1/users/{id}",
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
