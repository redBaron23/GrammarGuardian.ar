"use client";

import Sidebar from "@/components/organisms/Sidebar";
import { Chat } from "@prisma/client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import pages from "@/constants/pages";

interface Props {
  session: Session | null;
  children: ReactNode;
  chats: Chat[];
}

export function Providers({ session, chats, children }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (chats.length === 0) {
      router.push(pages.index);
    }
  }, [chats, router]);
  return (
    <SessionProvider session={session}>
      <ToastContainer />
      <Sidebar chats={chats}>{children}</Sidebar>
    </SessionProvider>
  );
}
