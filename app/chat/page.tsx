import Chat from "@/components/organisms/Chat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrammarGuardian.ar: Perfect Your English with AI-powered Assistance",
  description:
    "Discover the power of AI in enhancing your English. GrammarGuardian.ar provides instant feedback, refining your sentences and helping you communicate with clarity and confidence.",
};

export default function ChatPage() {
  return (
    <main className="flex flex-col h-full h-screen antialiased text-gray-800">
      <Chat />
    </main>
  );
}
