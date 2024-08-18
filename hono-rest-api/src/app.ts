import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import users from "./modules/v1/users";
import { helloMiddleware } from "./middlewares/helloMiddle";

const app = new OpenAPIHono();

// NOTE: Middlewares
app.use(helloMiddleware);

// NOTE: Modules
app.route("/", users);

// NOTE: Swagger UI
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Example API",
  },
});
app.get("/ui", swaggerUI({ url: "/doc" }));

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
