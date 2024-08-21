import { OpenAPIHono } from "@hono/zod-openapi";
import { getUserById, putUser, deleteUser } from "./route";
import { User } from "../../../../models/user";

const app = new OpenAPIHono();

app.openapi(getUserById, async (c) => {
  const id = c.req.param("id");
  const user = await User.getById(Number(id));
  return c.json(user, 200);
});

app.openapi(putUser, async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();
  const user = await User.update(Number(id), body);
  return c.json(user, 200);
});

app.openapi(deleteUser, async (c) => {
  const id = c.req.param("id");
  await User.delete(Number(id));
  return c.text("OK", 200);
});

export default app;
