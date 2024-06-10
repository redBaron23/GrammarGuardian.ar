"use client";

import Image from "next/image";
import CloseButton from "../atoms/CloseButton";
import HamburgerButton from "../atoms/HamburgerButton";
import { useSession } from "next-auth/react";
import UserProfileCard from "../moleculas/UserProfileCard";
import { ReactNode, useState } from "react";
import { Chat } from "@prisma/client";
import ChatList from "../moleculas/ChatList";

interface Props {
  children?: ReactNode;
  chats: Chat[];
}

const Sidebar = ({ children, chats }: Props) => {
  const { data, status } = useSession();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleCloseSidebar = () => setIsSidebarVisible(false);
  const handleOpenSidebar = () => setIsSidebarVisible(true);

  const contentClassName = isSidebarVisible ? "hidden" : "flex-1";
  const sidebarClassName = isSidebarVisible ? "flex w-full" : "w-0 ";
  const hamburgerButtonClassName = isSidebarVisible ? "hidden" : "flex";

  if (status === "unauthenticated") {
    return children;
  }

  return (
    <div className="flex flex-row overflow-y-hidden h-screen w-screen bg-gray-700">
      <div
        className={`${sidebarClassName} flex-col justify-between transition-all duration-300 ease-in-out lg:flex lg:w-auto xl:rounded-r lg:p-6 `}
      >
        <CloseButton
          className="lg:hidden flex justify-end pe-6 pt-6"
          onClick={handleCloseSidebar}
        />
        <div>
          <div className="flex justify-center items-center w-full p-6">
            <div className="flex flex-col items-center gap-4">
              <Image
                width={150}
                height={150}
                alt="Profile picture"
                referrerPolicy="no-referrer"
                className="rounded-full border-4 border-yellow-400"
                src="/logo.png"
                priority
              />
              <p className="text-2xl font-bold leading-6 bg-gradient-to-r from-blue-300 via-white to-yellow-400 via-white to-blue-300 bg-clip-text text-transparent">
                GrammarGuardian.ar
              </p>
            </div>
          </div>

          <div className="w-full border-gray-600 border-b p-6" />
          <div className="flex flex-col text-white px-6 border-gray-600 w-full overflow-y-scroll mb-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
            <div className="flex py-5">
              <p className="text-base leading-6">Today</p>
            </div>
            <ChatList chats={chats} onClickLink={handleCloseSidebar} />
          </div>
        </div>

        <div
          className={`${
            chats.length ? "" : "h-full"
          } flex flex-col justify-end items-center pb-8 px-6 w-full space-y-32`}
        >
          <UserProfileCard user={data?.user} />
        </div>
      </div>
      <div className={`${contentClassName} relative`}>
        <div
          className={`${hamburgerButtonClassName} absolute p-5 right-0 lg:hidden`}
        >
          <HamburgerButton onClick={handleOpenSidebar} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
