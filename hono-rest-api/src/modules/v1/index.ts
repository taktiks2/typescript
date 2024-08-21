import { OpenAPIHono } from "@hono/zod-openapi";
import users from "./users";
import posts from "./posts";

const app = new OpenAPIHono();

app.route("/users", users);
app.route("/posts", posts);

export default app;
