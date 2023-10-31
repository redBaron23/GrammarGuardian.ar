import Image from "next/image";

const SendButton = () => {
  return (
    <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
      <span>Send</span>
      <span className="ml-2">
        <Image
          src="/send.svg"
          alt="Send Icon"
          className="dark:invert"
          priority
          fill
        />
      </span>
    </button>
  );
};

export default SendButton;
