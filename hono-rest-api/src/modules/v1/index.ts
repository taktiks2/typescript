import { OpenAPIHono } from "@hono/zod-openapi";
import users from "./users";
import posts from "./posts";

const app = new OpenAPIHono();

app.route("/v1", users);
app.route("/v1", posts);

export default app;
