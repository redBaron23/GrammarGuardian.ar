"use client";

import { useState } from "react";
import ClipboardIcon from "@/public/assets/clipboard.svg";
import CheckIcon from "@/public/assets/check.svg";
import {
  dark,
  prism,
  dracula,
  base16AteliersulphurpoolLight,
  materialLight,
  solarizedlight,
  ghcolors,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>;

const CodeBlock = ({ className, children }: any) => {
  const [copied, setCopied] = useState(false);
  const language = className ? className.replace("language-", "") : "text";

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={language}
        style={solarizedlight}
        customStyle={{ paddingTop: "2.5em" }}
        lineProps={{
          style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
        }}
        wrapLines
      >
        {children}
      </SyntaxHighlighter>
      <button
        className="absolute top-2 right-4 flex items-center p-1 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none"
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
    </div>
  );
};

export default CodeBlock;
