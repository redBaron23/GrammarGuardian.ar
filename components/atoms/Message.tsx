interface Props {
  text: string;
  from: string;
  isSelfMessage?: boolean;
  seen?: boolean;
}

const Message = ({ text, from, seen, isSelfMessage = false }: Props) => {
  const mainContainerStyles = isSelfMessage
    ? "col-start-6 col-end-13 p-3 rounded-lg"
    : "col-start-1 col-end-8 p-3 rounded-lg";
  const containerStyles = isSelfMessage
    ? "flex items-center justify-start flex-row-reverse"
    : "flex flex-row items-center";

  const messageBg = isSelfMessage ? "bg-indigo-100" : "bg-white";

  return (
    <div className={mainContainerStyles}>
      <div className={containerStyles}>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {from[0]}
        </div>
        <div
          className={`relative mx-3 text-sm py-2 px-4 shadow rounded-xl ${messageBg}`}
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
