"use client";

import { useState } from "react";
import AttachmentInput from "../atoms/AttachmentInput";
import SendButton from "../atoms/SendButton";

interface Props {
  action: any;
}

const ChatInput = ({ action }: Props) => {
  return (
    <form
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
      action={action}
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
