"use client";

import { useActionState, useEffect, useState } from "react";
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
  const [text, setText] = useState("");

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
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.altKey && e.key === "Enter") {
      e.preventDefault();
      setText((prevText) => prevText + "\n");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const textareaStyle = {
    height: `${Math.min(200, Math.max(32, text.split("\n").length * 24))}px`, // Adjust the maximum height and line height
    lineHeight: "24px", // Set the line height to match the calculation above
  };

  const isMultiline = text.split("\n").length > 1;

  return (
    <div className="flex flex-col items-center w-full">
      <form
        className={`flex flex-row rounded-xl bg-white w-full px-4 ${
          isMultiline ? "items-end" : "items-center"
        }`}
        style={{ minHeight: "4rem" }}
        action={formAction}
        onInvalid={(e) => {
          e.preventDefault();
        }}
      >
        <div className={`ml-4 ${isMultiline ? "pb-4" : ""}`}>
          <AttachmentInput />
        </div>
        <div className="flex-grow ml-4">
          <div className="relative w-full">
            <textarea
              autoComplete="off"
              required
              name="text"
              value={text}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              style={textareaStyle}
              className={`flex w-full rounded-xl focus:outline-none px-4 py-2 resize-none ${
                isMultiline ? "overflow-y-auto" : "overflow-hidden"
              }`}
              placeholder="Ask GrammarGuardian..."
            />
          </div>
        </div>
        <div className={`ml-4 ${isMultiline ? "pb-4" : ""}`}>
          <SendButton />
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
