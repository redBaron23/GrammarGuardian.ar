import { addMessage, getMessages } from "@/app/actions/chatActions";
import MessageList from "../moleculas/MessageList";
import { MessageType } from "@/lib/validations/MessageValidation";

interface Props {
  userId?: string;
  chatId?: string;
}

const Chat = async ({ chatId, userId }: Props) => {
  const messages = await getMessages({ chatId });

  const addMessageWithId = addMessage.bind(null, {
    chatId,
    userId,
  });

  console.log(messages);

  return (
    <div className="flex flex-col flex-auto h-full">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <MessageList messages={messages} />
        {/* <ChatInput action={addMessageWithId} isLoading={isLoading} /> */}
      </div>
    </div>
  );
};

export default Chat;
