import { createMiddleware } from "hono/factory";

export const helloMiddleware = createMiddleware(async (c, next) => {
  console.info("Hello Middleware");
  await next();
});
