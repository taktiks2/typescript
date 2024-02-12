import { PrismaClient, Prisma } from "@prisma/client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (_: Request, res: Response) => {
  const users = await prisma.users.findMany();
  return res.json(users);
});

router.get("/:id", async (req: Request, res: Response) => {
  const user = await prisma.users.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  return res.json(user);
});

router.post("/password", async (req: Request, res: Response) => {
  const user = await prisma.users.findUnique({
    where: { email: req.body.email },
  });
  return res.json(user);
});

router.post("/", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    await prisma.users.create({
      data: {
        username,
        email,
        password,
      },
    });
    return res.json({ message: "success" });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return res.status(400).json({ message: "exists" });
      }
    }
    return res.status(400).json({ message: error });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  await prisma.users.update({
    where: { id: parseInt(req.params.id) },
    data: { username, email, password },
  });
  return res.json({ message: "success" });
});

router.delete("/:id", async (req: Request, res: Response) => {
  await prisma.users.delete({
    where: { id: parseInt(req.params.id) },
  });
  return res.json({ message: "success" });
});

export default router;
