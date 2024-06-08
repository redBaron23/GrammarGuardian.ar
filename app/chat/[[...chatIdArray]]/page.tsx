import Chat from "@/components/organisms/Chat";
import { getMessages } from "@/lib/chat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrammarGuardian.ar: Perfect Your English with AI-powered Assistance",
  description:
    "Discover the power of AI in enhancing your English. GrammarGuardian.ar provides instant feedback, refining your sentences and helping you communicate with clarity and confidence.",
};

interface Props {
  params: {
    chatIdArray: string[];
  };
}

export default async function ChatPage({
  params: { chatIdArray = [] },
}: Props) {
  const chatId = chatIdArray[0];
  const messages = await getMessages(chatId);

  return (
    <main className="flex flex-col h-full h-screen antialiased text-gray-800">
      <Chat chatId={chatId} messages={messages} />
    </main>
  );
}
