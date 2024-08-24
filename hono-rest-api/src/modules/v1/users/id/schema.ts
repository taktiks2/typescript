import { z } from '@hono/zod-openapi';

export const PutBodySchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  age: z.number().optional(),
  role: z.enum(['admin', 'editor', 'viewer']).optional(),
});
