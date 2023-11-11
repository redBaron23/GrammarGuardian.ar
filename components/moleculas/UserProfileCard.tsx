import Image from "next/image";
import Dropdown from "./Dropdown";

interface Props {
  name: string;
  email: string;
  image: string;
}

const UserProfileCard = ({ name, email, image }: Props) => {
  return (
    <div className=" flex justify-between items-center w-full">
      <div className="flex justify-center items-center space-x-3">
        <Image
          className="rounded-full"
          src={image}
          alt="avatar"
          width={34}
          height={34}
        />
        <div className="flex justify-start flex-col items-start">
          <p className="cursor-pointer text-sm leading-5 text-white">{name}</p>
          <p className="cursor-pointer text-xs leading-3 text-gray-300">
            {email}
          </p>
        </div>
      </div>
      <Dropdown />
    </div>
  );
};

export default UserProfileCard;
