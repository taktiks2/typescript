import { OpenAPIHono } from '@hono/zod-openapi';
import users from '@/modules/v1/users';
import posts from '@/modules/v1/posts';

const app = new OpenAPIHono();

app.route('/users', users);
app.route('/posts', posts);

export default app;
