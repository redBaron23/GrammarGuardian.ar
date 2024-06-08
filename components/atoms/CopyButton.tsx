"use client";

import { useState } from "react";
import ClipboardIcon from "@/public/assets/clipboard.svg";
import CheckIcon from "@/public/assets/check.svg";

interface Props {
  text: string;
}
const CopyButton = ({ text }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(text));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      className="self-end flex items-center p-1 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none"
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
  );
};

export default CopyButton;
