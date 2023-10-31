import Message from "../atoms/Message";
import ChatInput from "../moleculas/ChatInput";

const Chat = () => {
  return (
    <div className="flex flex-col flex-auto h-full">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-12 gap-y-2">
              <Message text="caca ri23232 23 23 2 2ca" from="Flipe" />
            </div>
          </div>
        </div>
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
