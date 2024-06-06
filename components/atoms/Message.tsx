"use client";

import { MessageType } from "@/lib/validations/MessageValidation";
import { parseGuardianMessage } from "@/utils/helpers";
import { useSession } from "next-auth/react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import ClipboardIcon from "@/public/assets/clipboard.svg";
import CheckIcon from "@/public/assets/check.svg";

type Props = {
  seen?: boolean;
} & MessageType;

const Message = ({ text, senderId, seen }: Props) => {
  const { data } = useSession();
  const isSelfMessage = senderId === data?.user.id;
  const [copied, setCopied] = useState(false);

  const mainContainerStyles = isSelfMessage
    ? "col-start-6 col-end-13 p-3 pe-2 rounded-lg"
    : "col-start-1 col-end-8 p-3 rounded-lg";
  const containerStyles = isSelfMessage
    ? "flex items-center justify-start flex-row-reverse"
    : "flex flex-row items-center";

  const messageBg = isSelfMessage ? "bg-indigo-100" : "bg-white";

  const [parsedText, textToCopy] = isSelfMessage
    ? [text]
    : parseGuardianMessage(text);

  console.log({ parsedText, textToCopy });
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

  const handleCopy = () => {
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={mainContainerStyles}>
      <div className={containerStyles}>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {image}
        </div>
        <div
          className={`relative mx-3 py-2 px-4 shadow rounded-xl ${messageBg}`}
        >
          {textToCopy && (
            <div className="w-full flex justify-end">
              <button
                className="flex items-center p-1 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 mr-1" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <ClipboardIcon className="w-3.5 h-3.5 mr-1" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
          )}
          <ReactMarkdown className="text-base lg:text-lg">{text}</ReactMarkdown>
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
