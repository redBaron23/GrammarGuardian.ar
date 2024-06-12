import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: { id: "0" },
  });

  if (!existingUser) {
    const botUser = await prisma.user.upsert({
      where: { email: "bot@example.com" },
      update: {},
      create: {
        id: "0",
        email: "bot@grammarguardian.ar",
        name: "Grammar Guardian.ar",
        isGuardian: true,
      },
    });

    console.log({ botUser });
  } else {
    console.log("User with ID '0' already exists.");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
