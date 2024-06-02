import { removeChat } from "@/app/actions/chatActions";
import Bin from "@/public/assets/bin.svg";
import { useActionState } from "react";

const initialState = {
  error: null,
  text: "",
};

interface Props {
  chatId: string;
}

const ChatRemover = ({ chatId }: Props) => {
  return (
    <form
      action={removeChat.bind(null, {
        chatId,
      })}
    >
      <button type="submit">
        <Bin
          width="25px"
          height="25px"
          className="text-red-500 cursor-pointer"
        />
      </button>
    </form>
  );
};

export default ChatRemover;
