"use client";

import { useActionState } from "react";
import AttachmentInput from "../atoms/AttachmentInput";
import SendButton from "../atoms/SendButton";

const initialState = {
  text: "",
};

interface Props {
  sendMessage: <State>(state: Awaited<State>) => State | Promise<State>;
}

const ChatInput = ({ sendMessage }: Props) => {
  const [state, formAction] = useActionState(sendMessage, initialState);

  return (
    <form
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
      action={formAction}
    >
      <AttachmentInput />
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            autoComplete="off"
            type="text"
            name="text"
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
        </div>
      </div>
      <div className="ml-4">
        <SendButton />
      </div>
    </form>
  );
};

export default ChatInput;
