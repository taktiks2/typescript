import { createRoute } from '@hono/zod-openapi';
import { BodySchema, PostSchema } from './schema';

export const GET = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      description: 'List of posts',
      content: {
        'application/json': {
          schema: PostSchema.array(),
        },
      },
    },
  },
  tags: ['posts'],
});

export const POST = createRoute({
  method: 'post',
  path: '/',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Post created',
      content: {
        'application/json': {
          schema: PostSchema,
        },
      },
    },
  },
  tags: ['posts'],
});
