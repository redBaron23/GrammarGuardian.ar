interface Props {
  onClick: () => void;
}

const HamburgerButton = ({ onClick }: Props) => {
  return (
    <button
      className="p-2 text-gray-400 bg-white rounded-lg shadow-md hover:text-gray-600 focus:outline-none focus:ring focus:ring-white focus:ring-offset-gray-100 focus:ring-offset-4"
      onClick={onClick}
    >
      <span className="sr-only">More</span>
      <svg
        aria-hidden="true"
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h7"
        ></path>
      </svg>
    </button>
  );
};

export default HamburgerButton;
