"use client";

import { useActionState, useEffect } from "react";
import AttachmentInput from "../atoms/AttachmentInput";
import SendButton from "../atoms/SendButton";
import { addMessage } from "@/app/actions/chatActions";
import { toast } from "react-toastify";

const initialState = {
  error: null,
  text: "",
};

interface Props {
  chatId?: string;
}

const ChatInput = ({ chatId }: Props) => {
  const addMessageWithId = addMessage.bind(null, {
    chatId,
  });

  const [{ error }, formAction] = useActionState(
    async (prevState: any, formData: FormData) => {
      const { error, chat } = await addMessageWithId(formData);
      if (error) {
        return { error, text: prevState.text };
      }

      return { error, text: chat?.id };
    },
    initialState
  );

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <form
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
      action={formAction}
      onInvalid={(e) => {
        e.preventDefault();
      }}
    >
      <AttachmentInput />
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            autoComplete="off"
            required
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
