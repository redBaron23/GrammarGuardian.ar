"use client";

import Image from "next/image";
import CloseButton from "../atoms/CloseButton";
import HamburgerButton from "../atoms/HamburgerButton";
import { useSession } from "next-auth/react";
import UserProfileCard from "../moleculas/UserProfileCard";
import { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
}

const Sidebar = ({ children }: Props) => {
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
    <div className="flex flex-row overflow-y-hidden h-screen w-screen bg-blue-800">
      <div
        className={`${sidebarClassName} flex-col transition-all duration-300 ease-in-out lg:flex lg:w-auto justify-start items-start xl:rounded-r lg:p-6 shadow-lg`}
      >
        <div className="flex justify-between items-center w-full p-6">
          <div className="flex flex-col justify-start items-center space-x-4 gap-5">
            <Image
              width={121}
              height={121}
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
          <CloseButton className="lg:hidden" onClick={handleCloseSidebar} />
        </div>

        <div className="w-full border-gray-600 border-b p-6">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>New Lesson</span>
          </button>
        </div>
        <div className="flex flex-col justify-start items-center px-6 border-gray-600 w-full">
          <div className="flex justify-between items-center w-full py-5 space-x-14">
            <p className="text-base leading-6 uppercase">Lessons</p>
          </div>
          <div className="flex justify-start flex-col w-full items-start pb-1">
            <div className="flex justify-start items-center space-x-4 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded-lg px-4 py-2 w-full transition duration-200 cursor-pointer">
              <div>
                <p className="text-lg leading-5">Lesson 1: Introduction</p>
                <p className="text-sm text-gray-500">
                  Get started with language basics
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center space-x-4 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded-lg px-4 py-2 w-full transition duration-200 cursor-pointer">
              <div>
                <p className="text-lg leading-5">Lesson 2: Grammar</p>
                <p className="text-sm text-gray-500">
                  Learn essential grammar rules
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center space-x-4 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded-lg px-4 py-2 w-full transition duration-200 cursor-pointer">
              <div>
                <p className="text-lg leading-5">Lesson 3: Vocabulary</p>
                <p className="text-sm text-gray-500">Expand your vocabulary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center h-full pb-8 px-6 w-full space-y-32">
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
