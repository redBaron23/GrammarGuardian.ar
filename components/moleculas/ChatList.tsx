import { removeChat } from "@/lib/chat";
import { Chat } from "@prisma/client";
import Link from "next/link";
import Bin from "@/public/assets/bin.svg";
import { useActionState } from "react";

interface Props {
  chats: Chat[];
  onClickLink: () => void;
}

const ChatList = ({ chats, onClickLink }: Props) => {
  const [state, submitAction, isPending] = useActionState(removeChat, {
    error: null,
  });

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
      <form action={submitAction}>
        <button type="submit">
          <Bin
            width="25px"
            height="25px"
            className="text-red-500 cursor-pointer"
          />
        </button>
      </form>
    </div>
  ));
};

export default ChatList;
