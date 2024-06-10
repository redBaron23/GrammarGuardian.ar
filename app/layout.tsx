import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { auth } from "@/lib/auth";
import { getChats } from "@/lib/chat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrammarGuardian.ar: Perfect Your English with AI-powered Assistance",
  description:
    "Discover the power of AI in enhancing your English. GrammarGuardian.ar provides instant feedback, refining your sentences and helping you communicate with clarity and confidence.",
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  const chats = session?.user?.id ? await getChats() : [];

  return (
    <html
      lang="en"
      className="scrollbar-thumb-indigo-400 scrollbar-track-indigo-50"
    >
      <body className={inter.className}>
        <Providers session={session} chats={chats}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
