import { createRoute } from '@hono/zod-openapi';
import { ParamsSchema } from '@/modules/v1/schema';
import { PostSchema } from '@/modules/v1/posts/schema';
import { PutBodySchema } from '@/modules/v1/posts/id/schema';

export const GET = createRoute({
  method: 'get',
  path: '/',
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      description: 'Post found',
      content: {
        'application/json': {
          schema: PostSchema,
        },
      },
    },
  },
  tags: ['posts'],
});

export const PUT = createRoute({
  method: 'put',
  path: '/',
  request: {
    params: ParamsSchema,
    body: {
      content: {
        'application/json': {
          schema: PutBodySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Post updated',
      content: {
        'application/json': {
          schema: PostSchema,
        },
      },
    },
  },
  tags: ['posts'],
});

export const DELETE = createRoute({
  method: 'delete',
  path: '/',
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      description: 'Post deleted',
    },
  },
  tags: ['posts'],
});
