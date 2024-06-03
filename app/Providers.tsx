"use client";

import Sidebar from "@/components/organisms/Sidebar";
import { Chat } from "@prisma/client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  session: Session | null;
  children: ReactNode;
  chats: Chat[];
}

export function Providers({ session, chats, children }: Props) {
  return (
    <SessionProvider session={session}>
      <ToastContainer />
      <Sidebar chats={chats}>{children}</Sidebar>
    </SessionProvider>
  );
}
