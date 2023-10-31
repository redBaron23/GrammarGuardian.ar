import UserIcon from "../atoms/UserIcon";

interface Props {
  text: string;
  username: string;
  isSelf?: boolean;
  seen?: boolean;
}

const Message = ({ text, username, seen, isSelf = false }: Props) => {
  const messageBg = isSelf ? "bg-white" : "bg-indigo-100";

  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <UserIcon initial={username[0]} />
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
