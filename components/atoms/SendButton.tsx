import { ReactComponent as SendIcon } from "../../public/icons/send.svg";

const SendButton = () => {
  return (
    <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
      <span>Send</span>
      <span className="ml-2">
        <SendIcon />
      </span>
    </button>
  );
};

export default SendButton;
