"use client";

import UserProfileCard from "../moleculas/UserProfileCard";
import { signIn, useSession } from "next-auth/react";

function ConditionalUserContent() {
  const { data: session, status } = useSession();

  const name = session?.user?.name;
  const email = session?.user?.email;
  const image = session?.user?.image;

  if (status === "loading") {
    return "<Spinner />";
  }

  if (status === "authenticated" && name && email && image) {
    return <UserProfileCard name={name} email={email} image={image} />;
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="bg-indigo-500 px-3 py-2 rounded w-full"
    >
      Sign In
    </button>
  );
}
export default ConditionalUserContent;
