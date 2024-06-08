"use client";

import { useState } from "react";
import ClipboardIcon from "@/public/assets/clipboard.svg";
import CheckIcon from "@/public/assets/check.svg";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const CodeBlock = ({ className, children }: any) => {
  const [copied, setCopied] = useState(false);
  const language = className ? className.replace("language-", "") : "text";

  console.log(children);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col p-4 bg-yellow-100 gap-2">
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
      <ReactMarkdown
        className="text-base lg:text-lg"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default CodeBlock;
