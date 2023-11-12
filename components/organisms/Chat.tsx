"use client";

import { CHAT_ID } from "@/constants/Global";
import ChatInput from "../moleculas/ChatInput";
import MessageList from "../moleculas/MessageList";
import {
  MessageType,
  messageArrayValidator,
} from "@/lib/validations/MessageValidation";
import { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMessages = async () => {
    const newMessages = await fetch(`/api/chats/${CHAT_ID}/messages`);
    const parsedMessages = await newMessages.json();

    const validatedMessages = messageArrayValidator.parse(parsedMessages);
    setMessages(validatedMessages);
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleSubmit = async (text: string) => {
    setIsLoading(true);
    const newMessage = await fetch(`/api/chats/${CHAT_ID}/messages`, {
      method: "POST",
      body: JSON.stringify({ text }),
    });
    const parsedMessage = await newMessage.json();

    setMessages((prevMessages) => [...prevMessages, parsedMessage]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col flex-auto h-full">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <MessageList messages={messages} />
        <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Chat;
