"use client";

import { useEffect, useState } from "react";
import Message from "../atoms/Message";
import {
  MessageType,
  messageArrayValidator,
} from "@/lib/validations/MessageValidation";

const CHAT_ID = "0";

const MessageList = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const getMessages = async () => {
    const newMessages = await fetch(`/api/chats/${CHAT_ID}`);
    const parsedMessages = await newMessages.json();

    const validatedMessages = messageArrayValidator.parse(parsedMessages);
    setMessages(validatedMessages);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="flex flex-col h-full overflow-x-auto mb-4">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-12 gap-y-2">{messages.map(Message)}</div>
      </div>
    </div>
  );
};

export default MessageList;
