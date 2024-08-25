import { createMiddleware } from 'hono/factory';

export const helloMiddleware = createMiddleware(async (c, next) => {
  // eslint-disable-next-line no-console
  console.info('Hello Middleware');
  await next();
});
