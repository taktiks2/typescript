import { OpenAPIHono } from "@hono/zod-openapi";
import { postUsers, getUsers } from "./routes";

const app = new OpenAPIHono();

app.openapi(getUsers, (c) => {
  console.log("got users");
  return c.json(
    [
      {
        id: "1",
        name: "test",
        email: "test@example.com",
        role: "admin" as const,
      },
      {
        id: "2",
        name: "test",
        email: "test@example.com",
        role: "admin" as const,
      },
    ],
    200,
  );
});

app.openapi(postUsers, (c) => {
  console.log("user created");
  return c.text("test", 200);
});

export default app;
