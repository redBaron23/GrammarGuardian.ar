import Image from "next/image";

interface Props {
  label: string;
  onClick?: () => void;
  icon: string;
  danger?: boolean;
}

const DropdownOption = ({ onClick, label, icon, danger = false }: Props) => {
  const hoverColor = danger ? "red" : "indigo";

  return (
    <li className="font-medium">
      <a
        className={`flex cursor-pointer items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-${hoverColor}-600`}
        onClick={onClick}
      >
        <div className="mr-3 invert">
          <Image src={icon} alt={label} />
        </div>
        {label}
      </a>
    </li>
  );
};

export default DropdownOption;
