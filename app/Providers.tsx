"use client";

import Sidebar from "@/components/organisms/Sidebar";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  session: Session | null;
  children: ReactNode;
}

export function Providers({ session, children }: Props) {
  return (
    <SessionProvider session={session}>
      <Sidebar>{children}</Sidebar>
    </SessionProvider>
  );
}
