"use client";

import { signIn, useSession } from "next-auth/react";
import UserProfileCard from "../moleculas/UserProfileCard";

function ConditionalUserContent() {
  const { data: session } = useSession();

  const name = session?.user?.name as string;
  const email = session?.user?.email as string;
  const image = session?.user?.image as string;

  if (session?.user) {
    return <UserProfileCard name={name} email={email} image={image} />;
  }

  return (
    <button onClick={() => signIn()} className="bg-sky-400 px-3 py-2 rounded">
      Sign In
    </button>
  );
}
export default ConditionalUserContent;
