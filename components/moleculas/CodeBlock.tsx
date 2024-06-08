import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import CopyButton from "../atoms/CopyButton";
import { getMessageToCopy } from "@/utils/helpers";

interface Props {
  children: string;
}

const CodeBlock = ({ children }: Props) => {
  const improvedText = getMessageToCopy(children);

  return (
    <div className="flex flex-col p-4 bg-blue-100 gap-2 text-gray-800 rounded-md mb-3">
      <CopyButton text={improvedText} />
      <ReactMarkdown
        className="text-base lg:text-lg break-words whitespace-pre-wrap"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default CodeBlock;
