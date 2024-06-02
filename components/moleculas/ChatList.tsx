import { Chat } from "@prisma/client";
import Link from "next/link";
import ChatRemover from "../atoms/ChatRemover";

interface Props {
  chats: Chat[];
  onClickLink: () => void;
}

const ChatList = ({ chats, onClickLink }: Props) => {
  return chats.map((chat: Chat, index: number) => (
    <div
      key={`${chat.id}/${index}`}
      className="flex items-start pt-2 pb-2 justify-between content-center"
    >
      <Link href={`/chat/${chat.id}`} onClick={onClickLink}>
        <div>
          <p className="text-lg leading-5">Lesson {index}: Introduction</p>
          <p className="text-sm text-gray-500">{chat.id}</p>
        </div>
      </Link>
      <ChatRemover chatId={chat.id} />
    </div>
  ));
};

export default ChatList;
