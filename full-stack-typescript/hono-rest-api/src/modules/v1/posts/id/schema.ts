import { z } from '@hono/zod-openapi';

export const PutBodySchema = z.object({
  title: z.string(),
  content: z.string(),
});
