import ChatInput from "../moleculas/ChatInput";
import MessageList from "../moleculas/MessageList";

const Chat = () => {
  return (
    <div className="flex flex-col flex-auto h-full">
      {/* <SignIn /> */}
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <MessageList />
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
