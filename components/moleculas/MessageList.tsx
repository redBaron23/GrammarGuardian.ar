"use client";

import { useEffect, useState } from "react";
import Message from "../atoms/Message";
import { MessageType } from "@/lib/validations/MessageValidation";

const MessageList = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    setMessages([
      {
        id: "2",
        senderId: "1",
        text: "Hola que haces",
        timestamp: new Date().getDate(),
      },
      {
        id: "2",
        senderId: "2",
        text: "Nada",
        timestamp: new Date().getDate(),
      },
    ]);
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
