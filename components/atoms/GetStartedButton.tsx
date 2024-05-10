"use client";

import { signIn } from "next-auth/react";

const GetStarted = () => {
  return (
    <button
      onClick={() => signIn()}
      className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      Get Started
    </button>
  );
};

export default GetStarted;
