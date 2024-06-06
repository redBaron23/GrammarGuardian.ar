import { FunctionComponent } from "react";

interface Props {
  label: string;
  onClick?: () => void;
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  danger?: boolean;
}

const DropdownOption = ({ onClick, label, Icon, danger = false }: Props) => {
  const hoverColor = danger ? "red" : "indigo";

  return (
    <li className="font-medium">
      <a
        className={`flex cursor-pointer items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-${hoverColor}-600`}
        onClick={onClick}
      >
        <div className="mr-3 text-white">
          <Icon width="25px" />
        </div>
        {label}
      </a>
    </li>
  );
};

export default DropdownOption;
