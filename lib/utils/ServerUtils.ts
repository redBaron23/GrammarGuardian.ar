import { auth } from "@/auth";

const getServerSideSession = async () => {
  const session = await auth();

  if (!session?.user) {
    throw new Error("You need to be logged in");
  }

  return session.user;
};

export { getServerSideSession };
