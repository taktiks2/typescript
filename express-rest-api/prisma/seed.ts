import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const users = [
  { name: "Alice", email: "alice@example.com", age: 27 },
  { name: "Bob", email: "bob@example.com", age: 30 },
  { name: "Cindy", email: "cindy@example.com", age: 40 },
  { name: "Takeru", email: "takeru@example.com", age: 29 },
  { name: "Shiho", email: "shiho@example.com", age: 27 },
];

async function main() {
  for (const user of users) {
    const upsertUser = await prisma.users.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        age: user.age,
      },
    });
    console.log({ upsertUser });
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
