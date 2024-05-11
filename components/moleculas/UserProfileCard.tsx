import Image from "next/image";
import Dropdown from "./Dropdown";
import { DefaultUser } from "next-auth";

interface Props {
  user?: DefaultUser | null;
}

const UserProfileCard = ({ user }: Props) => {
  if (!user?.image) {
    return;
  }

  return (
    <div className=" flex justify-between items-center w-full">
      <div className="flex justify-center items-center space-x-3">
        <Image
          className="rounded-full"
          src={user?.image}
          alt="avatar"
          width={34}
          height={34}
        />
        <div className="flex justify-start flex-col items-start">
          <p className="cursor-pointer text-sm leading-5 text-white">
            {user?.name}
          </p>
          <p className="cursor-pointer text-xs leading-3 text-gray-300">
            {user?.email}
          </p>
        </div>
      </div>
      <Dropdown />
    </div>
  );
};

export default UserProfileCard;
