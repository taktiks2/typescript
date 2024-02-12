import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (_: Request, res: Response) => {
  const posts = await prisma.posts.findMany();
  return res.json(posts);
});

router.get("/:id", async (req: Request, res: Response) => {
  const post = await prisma.posts.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  return res.json(post);
});

router.get("/author/:authorId", async (req: Request, res: Response) => {
  const posts = await prisma.posts.findMany({
    where: { authorId: parseInt(req.params.authorId) },
  });
  return res.json(posts);
});

router.post("/", async (req: Request, res: Response) => {
  const { authorId, title, text, status } = req.body;

  try {
    await prisma.posts.create({
      data: {
        authorId,
        title,
        text,
        status,
      },
    });
    return res.json({ message: "success" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { authorId, title, text, status } = req.body;
  await prisma.posts.update({
    where: { id: parseInt(req.params.id) },
    data: { authorId, title, text, status },
  });
  return res.json({ message: "success" });
});

router.delete("/:id", async (req: Request, res: Response) => {
  await prisma.posts.delete({
    where: { id: parseInt(req.params.id) },
  });
  return res.json({ message: "success" });
});

export default router;
