import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const router = Router();

router.get("/", async (_: Request, res: Response) => {
  const users = await prisma.users.findMany();
  res.json(users);
});

router.get("/:id", async (req: Request, res: Response) => {
  const user = await prisma.users.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  res.json(user);
});

router.post("/", async (req: Request, res: Response) => {
  const { name, email, age } = req.body;
  const user = await prisma.users.create({
    data: {
      name,
      email,
      age,
    },
  });
  res.json(user);
});

router.put("/:id", async (req: Request, res: Response) => {
  const { name, email, age } = req.body;
  const user = await prisma.users.update({
    where: { id: parseInt(req.params.id) },
    data: { name, email, age },
  });
  res.json(user);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const user = await prisma.users.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.json(user);
});

export default router;
