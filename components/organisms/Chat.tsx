"use client";

import { CHAT_ID } from "@/constants/Global";
import ChatInput from "../moleculas/ChatInput";
import MessageList from "../moleculas/MessageList";
import {
  MessageType,
  messageArrayValidator,
} from "@/lib/validations/MessageValidation";
import { useState, useEffect } from "react";

interface Props {
  chatId?: string;
}

const Chat = ({ chatId }: Props) => {
  const [currentChatId, setCurrentChatId] = useState(chatId);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMessages = async () => {
    const newMessages = await fetch(`/api/chats/${CHAT_ID}/messages`);
    const parsedMessages = await newMessages.json();

    const validatedMessages = messageArrayValidator.parse(parsedMessages);
    setMessages(validatedMessages);
  };

  const createChat = async (text: string) => {
    const res = await fetch(`/api/chats`, {
      method: "POST",
      body: JSON.stringify({}),
    });

    console.log(res);
  };

  useEffect(() => {
    console.log(chatId);
    if (chatId) {
      getMessages();
      return;
    }
  }, [chatId]);

  const handleSubmit = async (text: string) => {
    // setIsLoading(true);

    if (!chatId) {
      const newChat = await createChat(text);

      console.log({ newChat });
    }

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
