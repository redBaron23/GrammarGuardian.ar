"use client";

import { useEffect, useRef } from "react";
import Message from "../organisms/Message";
import { MessageType } from "@/lib/validations/MessageValidation";

interface Props {
  messages?: MessageType[];
}

const MessageList = ({ messages }: Props) => {
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={messageListRef}
      className="flex flex-col h-full overflow-y-auto mb-4 scrollbar-thin pt-12 lg:pt-0"
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-12 gap-y-2">
          {messages &&
            messages.map((message, index) => (
              <Message {...message} key={`${message.id}/${index}`} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MessageList;
