"use client";

import { MessageType } from "@/lib/validations/MessageValidation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import CodeBlock from "../moleculas/CodeBlock";

type Props = {
  seen?: boolean;
} & MessageType;

const Message = ({ text, senderId, seen }: Props) => {
  const { data } = useSession();
  const isSelfMessage = senderId === data?.user.id;

  const mainContainerStyles = isSelfMessage
    ? "col-start-3 col-end-13 p-3 pe-2 rounded-lg"
    : "col-start-1 col-end-11 p-3 rounded-lg";
  const containerStyles = isSelfMessage
    ? "flex items-center justify-start flex-row-reverse"
    : "flex flex-row items-center";

  const messageBg = isSelfMessage ? "bg-indigo-100" : "bg-white";

  const userImage = data?.user.image && (
    <Image
      className="rounded-full"
      src={data?.user?.image}
      alt="avatar"
      width={34}
      height={34}
    />
  );

  const image = isSelfMessage ? (
    userImage
  ) : (
    <Image
      width={50}
      height={50}
      alt="Profile picture"
      referrerPolicy="no-referrer"
      className="rounded-full"
      priority
      src="/logo.png"
    />
  );

  return (
    <div className={mainContainerStyles}>
      <div className={containerStyles}>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {image}
        </div>
        <div
          className={`relative mx-3 py-2 px-4 shadow rounded-xl ${messageBg}`}
        >
          <ReactMarkdown
            className="text-base lg:text-lg flex flex-col gap-3 py-3"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              code: ({ children }: any) => <CodeBlock>{children}</CodeBlock>,
              p: ({ node, ...props }: any) => <div {...props} />,
            }}
          >
            {text}
          </ReactMarkdown>
          {seen && (
            <div className="absolute text-xs sm:text-sm md:text-base bottom-0 right-0 -mb-5 mr-2 text-gray-500">
              Seen
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
