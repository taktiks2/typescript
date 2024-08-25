import { OpenAPIHono } from '@hono/zod-openapi';
import { GET, POST } from '@/modules/v1/posts/route';
import { Post } from '@/models/post';
import id from '@/modules/v1/posts/id';

const app = new OpenAPIHono();

app.route('/:id', id);

app.openapi(GET, async (c) => {
  const posts = await Post.getAll();
  return c.json(posts, 200);
});

app.openapi(POST, async (c) => {
  const body = await c.req.json();
  const post = await Post.create(body);
  return c.json(post, 200);
});

export default app;
