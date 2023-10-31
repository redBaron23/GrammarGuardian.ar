interface Props {
  initial: string;
}

const UserIcon = ({ initial }: Props) => {
  return (
    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
      {initial}
    </div>
  );
};

export default UserIcon;
