import { createMiddleware } from 'hono/factory';

export const helloMiddleware = createMiddleware(async (_c, next) => {
  // eslint-disable-next-line no-console
  console.info('Hello Middleware');
  await next();
});
