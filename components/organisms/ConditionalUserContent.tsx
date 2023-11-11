import { signIn, useSession } from "next-auth/react";
import UserProfileCard from "../moleculas/UserProfileCard";
import Spinner from "../atoms/Spinner";

function ConditionalUserContent() {
  const { data: session, status } = useSession();

  const name = session?.user?.name as string;
  const email = session?.user?.email as string;
  const image = session?.user?.image as string;

  if (status === "loading") {
    return <Spinner />;
  }

  if (session?.user) {
    return <UserProfileCard name={name} email={email} image={image} />;
  }

  return (
    <button
      onClick={() => signIn()}
      className="bg-indigo-500 px-3 py-2 rounded w-full"
    >
      Sign In
    </button>
  );
}
export default ConditionalUserContent;
