"use client";

import { useState } from "react";
import AttachmentInput from "../atoms/AttachmentInput";
import SendButton from "../atoms/SendButton";

interface Props {
  onSubmit: (message: string) => void;
}

const ChatInput = ({ onSubmit }: Props) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => onSubmit(message);

  const isSendButtonDisabled = message.length === 0;

  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
      <AttachmentInput />
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            autoComplete="off"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            name="message"
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
        </div>
      </div>
      <div className="ml-4">
        <SendButton onClick={handleSubmit} disabled={isSendButtonDisabled} />
      </div>
    </div>
  );
};

export default ChatInput;
