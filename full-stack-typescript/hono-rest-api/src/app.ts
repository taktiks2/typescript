import { OpenAPIHono } from '@hono/zod-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import v1 from './modules/v1';
import { helloMiddleware } from './middlewares/helloMiddle';

const app = new OpenAPIHono();

// NOTE: Middlewares
app.use(helloMiddleware);

// NOTE: Modules
app.route('/v1', v1);

// NOTE: Swagger UI
app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Example API',
  },
});
app.get('/ui', swaggerUI({ url: '/doc' }));

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
