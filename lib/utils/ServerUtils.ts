import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { STATUS_CODE } from "@/types/ApiTypes";
import { getServerSession } from "next-auth";

const getServerSideSession = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("You need to be logged in");
  }

  return session;
};

export { getServerSideSession };
