import MessageList from "../moleculas/MessageList";
import ChatInput from "../moleculas/ChatInput";
import { getMessages } from "@/lib/chat";

interface Props {
  chatId?: string;
}

const Chat = async ({ chatId }: Props) => {
  const messages = await getMessages(chatId);

  return (
    <div className="flex flex-col flex-auto h-full">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <MessageList messages={messages} />
        <ChatInput chatId={chatId} />
      </div>
    </div>
  );
};

export default Chat;
