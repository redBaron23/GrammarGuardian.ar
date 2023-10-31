interface Props {
  text: string;
  from: string;
  isSelfMessage?: boolean;
  seen?: boolean;
}

const Message = ({ text, from, seen, isSelfMessage = false }: Props) => {
  const messageBg = isSelfMessage ? "bg-white" : "bg-indigo-100";

  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {from[0]}
        </div>
        <div
          className={`relative mr-3 text-sm py-2 px-4 shadow rounded-xl ${messageBg}`}
        >
          <div>{text}</div>
          {seen && (
            <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
              Seen
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
