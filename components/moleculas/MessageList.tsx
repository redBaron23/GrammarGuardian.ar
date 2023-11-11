import Message from "../atoms/Message";
import { MessageType } from "@/lib/validations/MessageValidation";

interface Props {
  messages: MessageType[];
}

const MessageList = ({ messages }: Props) => {
  return (
    <div className="flex flex-col h-full overflow-x-auto mb-4">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-12 gap-y-2">{messages.map(Message)}</div>
      </div>
    </div>
  );
};

export default MessageList;
