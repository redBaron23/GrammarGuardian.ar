interface Props {
  onClick: () => void;
  className?: string;
}

const CloseButton = ({ onClick, className }: Props) => {
  return (
    <div aria-label="toggler" className={className}>
      <button
        aria-label="close"
        id="close"
        className=" focus:outline-none focus:ring-2"
        onClick={onClick}
      >
        <svg
          className=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M6 6L18 18"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CloseButton;
