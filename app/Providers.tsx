"use client";

import Sidebar from "@/components/organisms/Sidebar";
import { SessionProvider, useSession } from "next-auth/react";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  if (status === "unauthenticated") {
  }

  const handleCloseSidebar = () => setIsSidebarVisible(false);
  const handleOpenSidebar = () => setIsSidebarVisible(true);

  return (
    <SessionProvider>
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        onOpen={handleOpenSidebar}
        onClose={handleCloseSidebar}
      >
        {children}
      </Sidebar>
    </SessionProvider>
  );
}
