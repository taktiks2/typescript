import { OpenAPIHono } from "@hono/zod-openapi";
import { GET, PUT, DELETE } from "./route";
import { Post } from "../../../../models/post";

const app = new OpenAPIHono();

app.openapi(GET, async (c) => {
  const id = c.req.param("id");
  const post = await Post.getById(Number(id));
  return c.json(post, 200);
});

app.openapi(PUT, async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();
  const post = await Post.update(Number(id), body);
  return c.json(post, 200);
});

app.openapi(DELETE, async (c) => {
  const id = c.req.param("id");
  await Post.delete(Number(id));
  return c.text("OK", 200);
});

export default app;
