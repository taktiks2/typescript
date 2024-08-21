import { OpenAPIHono } from "@hono/zod-openapi";
import { GET, POST } from "./route";
import { User } from "../../../models/user";
import id from "./id";

const app = new OpenAPIHono();

app.route("/users", id);

app.openapi(GET, async (c) => {
  const users = await User.getAll();
  return c.json(users, 200);
});

app.openapi(POST, async (c) => {
  const body = await c.req.json();
  const user = await User.create(body);
  return c.json(user, 200);
});

export default app;
