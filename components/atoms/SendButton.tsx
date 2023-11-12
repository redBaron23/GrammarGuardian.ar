import Spinner from "./Spinner";

interface Props {
  onClick: () => void;
  disabled?: boolean;
  isLoading: boolean;
}

const SendButton = ({ onClick, disabled, isLoading }: Props) => {
  const disabledClassName =
    disabled || isLoading
      ? "bg-indigo-200"
      : "bg-indigo-500 hover:bg-indigo-600";
  const currentIcon = isLoading ? (
    <Spinner />
  ) : (
    <svg
      className="w-4 h-4 transform rotate-45 -mt-px"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      ></path>
    </svg>
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabledClassName} flex items-center justify-center rounded-xl text-white px-4 py-1 flex-shrink-0`}
    >
      {currentIcon}
      <span>Send</span>
      <span className="ml-2"></span>
    </button>
  );
};

export default SendButton;
