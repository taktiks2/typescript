import { OpenAPIHono } from "@hono/zod-openapi";
import { postPosts, getPosts } from "./route";
import { Post } from "../../../models/post";

const app = new OpenAPIHono();

app.openapi(getPosts, async (c) => {
  const posts = await Post.getAll();
  return c.json(posts, 200);
});

app.openapi(postPosts, async (c) => {
  const body = await c.req.json();
  const post = await Post.create(body);
  console.info("post created", post);
  return c.text("success", 200);
});

export default app;
