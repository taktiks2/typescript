import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const users = [
  { username: "Alice", email: "alice@example.com", password: "abcd" },
  { username: "Bob", email: "bob@example.com", password: "abcd" },
  { username: "Cindy", email: "cindy@example.com", password: "abcd" },
];

const posts = [
  { id: 1, authorId: 1, title: "Hello World", text: "This is my first blog post!", status: "todo" },
  { id: 2, authorId: 2, title: "Hello World", text: "This is my first blog post!", status: "todo" },
  { id: 3, authorId: 3, title: "Hello World", text: "This is my first blog post!", status: "todo" },
];

async function main() {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const upsertUser = await prisma.users.upsert({
      where: { email: user.email },
      update: {},
      create: {
        username: user.username,
        email: user.email,
        password: hashedPassword,
      },
    });
    console.log({ upsertUser });
  }
  for (const post of posts) {
    const upsertPost = await prisma.posts.upsert({
      where: { id: post.id },
      update: {},
      create: {
        authorId: post.authorId,
        title: post.title,
        text: post.text,
        status: post.status,
      },
    });
    console.log({ upsertPost });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
