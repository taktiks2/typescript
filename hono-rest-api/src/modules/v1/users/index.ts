import { OpenAPIHono } from "@hono/zod-openapi";
import { postUsers, getUsers } from "./route";
import { User } from "../../../models/user";

const app = new OpenAPIHono();

app.openapi(getUsers, async (c) => {
  const users = await User.getAll();
  return c.json(users, 200);
});

app.openapi(postUsers, async (c) => {
  const body = await c.req.json();
  const user = await User.create(body);
  console.info("user created", user);
  return c.text("success", 200);
});

export default app;
