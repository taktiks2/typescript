import express, { Request, Response } from "express";
import userController from "./controllers/userController";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/users", userController);

app.get("/", (_: Request, res: Response) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello express\n");
});

export default app;
