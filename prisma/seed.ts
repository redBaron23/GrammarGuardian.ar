import { GRAMMAR_GUARDIAN_ID } from "@/constants";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const botUser = await prisma.user.upsert({
    where: { email: "bot@example.com" },
    update: {},
    create: {
      id: GRAMMAR_GUARDIAN_ID,
      email: "bot@grammarguardian.ar",
      name: "Grammar Guardian.ar",
      isGuardian: true,
    },
  });

  console.log({ botUser });
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
