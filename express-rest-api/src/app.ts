import express, { Request, Response } from "express";

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello express\n");
});

export default app;
