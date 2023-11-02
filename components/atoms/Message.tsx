import { MessageType } from "@/lib/validations/MessageValidation";
import Image from "next/image";

type Props = {
  seen?: boolean;
} & MessageType;

const Message = ({ id, text, senderId, seen }: Props) => {
  const isSelfMessage = senderId === "1";

  const mainContainerStyles = isSelfMessage
    ? "col-start-6 col-end-13 p-3 rounded-lg"
    : "col-start-1 col-end-8 p-3 rounded-lg";
  const containerStyles = isSelfMessage
    ? "flex items-center justify-start flex-row-reverse"
    : "flex flex-row items-center";

  const messageBg = isSelfMessage ? "bg-indigo-100" : "bg-white";

  const image = isSelfMessage ? (
    "?"
  ) : (
    <Image
      width={50}
      height={50}
      alt="Profile picture"
      referrerPolicy="no-referrer"
      className="rounded-full"
      src="/logo.png"
    />
  );

  console.log(id);

  return (
    <div className={mainContainerStyles} key={id}>
      <div className={containerStyles}>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {image}
        </div>
        <div
          className={`relative mx-3 text-sm py-2 px-4 shadow rounded-xl ${messageBg}`}
        >
          <div>{text}</div>
          {seen && (
            <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
              Seen
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
