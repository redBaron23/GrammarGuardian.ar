import AttachmentInput from "../atoms/AttachmentInput";
import SendButton from "../atoms/SendButton";

const ChatInput = () => {
  return (
    <form>
      <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
        <AttachmentInput />
        <div className="flex-grow ml-4">
          <div className="relative w-full">
            <input
              type="text"
              className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            />
          </div>
        </div>
        <div className="ml-4">
          <SendButton />
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
