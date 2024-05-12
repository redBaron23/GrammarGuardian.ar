"use client";
// import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { BulletList } from "react-content-loader";
import Message from "../atoms/Message";
import { MessageType } from "@/lib/validations/MessageValidation";

interface Props {
  messages: MessageType[];
}

const MessageList = ({ messages }: Props) => {
  // const { status } = useSession();
  // const isLoading = status === "loading";
  const isLoading = false;
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={messageListRef}
      className="flex flex-col h-full overflow-y-auto mb-4 scrollbar-thin"
    >
      <div className="flex flex-col h-full">
        {isLoading && <BulletList backgroundColor="rgb(229 231 235)" />}
        <div className="grid grid-cols-12 gap-y-2">
          {!isLoading &&
            messages.map((message, index) => (
              <Message {...message} key={`${message.id}/${index}`} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MessageList;
