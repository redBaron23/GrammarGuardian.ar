import Chat from "@/components/organisms/Chat";
import { auth } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrammarGuardian.ar: Perfect Your English with AI-powered Assistance",
  description:
    "Discover the power of AI in enhancing your English. GrammarGuardian.ar provides instant feedback, refining your sentences and helping you communicate with clarity and confidence.",
};

interface Props {
  params: {
    chatId: string;
  };
}

export default async function ChatPage({ params: { chatId } }: Props) {
  const session = await auth();

  return (
    <main className="flex flex-col h-full h-screen antialiased text-gray-800">
      <Chat chatId={chatId} userId={session?.user.id} />
    </main>
  );
}
