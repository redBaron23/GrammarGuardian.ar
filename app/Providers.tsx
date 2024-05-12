"use client";

import Sidebar from "@/components/organisms/Sidebar";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  session: Session | null;
  children: ReactNode;
}

export function Providers({ session, children }: Props) {
  return (
    <SessionProvider session={session}>
      <ToastContainer />
      <Sidebar>{children}</Sidebar>
    </SessionProvider>
  );
}
