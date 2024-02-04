import express, { Request, Response } from "express";
import userController from "./controllers/userController";

const app = express();
app.use(express.json());

app.use("/users", userController);

app.get("/", (_: Request, res: Response) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello express\n");
});

export default app;
