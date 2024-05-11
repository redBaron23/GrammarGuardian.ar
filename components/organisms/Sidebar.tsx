"use client";

import Image from "next/image";
import { ReactNode } from "react";
import CloseButton from "../atoms/CloseButton";
import HamburgerButton from "../atoms/HamburgerButton";
import ConditionalUserContent from "./ConditionalUserContent";
import { useSession } from "next-auth/react";

interface Props {
  isSidebarVisible: boolean;
  onOpen: () => void;
  onClose: () => void;
  children?: ReactNode;
}

const Sidebar = ({ isSidebarVisible, onOpen, onClose, children }: Props) => {
  const { status } = useSession();

  const contentClassName = isSidebarVisible ? "hidden" : "flex-1";
  const sidebarClassName = isSidebarVisible ? "flex w-full" : "w-0 ";
  const hamburgerButtonClassName = isSidebarVisible ? "hidden" : "flex";

  if (status !== "authenticated") {
    return children;
  }

  return (
    <div className="flex flex-row overflow-y-hidden h-screen w-screen">
      <div
        className={`${sidebarClassName} flex-col transition-all duration-300 ease-in-out lg:flex lg:w-auto justify-start items-start xl:rounded-r  bg-gray-900 lg:p-4`}
      >
        <div className="flex justify-between w-full p-6">
          <div className="flex justify-start items-center space-x-3">
            <Image
              width={50}
              height={50}
              alt="Profile picture"
              referrerPolicy="no-referrer"
              className="rounded-full"
              src="/logo.png"
              priority
            />
            <p className="text-2xl leading-6 text-white">GrammarGuardian.ar</p>
          </div>
          <CloseButton className="lg:hidden" onClick={onClose} />
        </div>
        <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
          <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
            <svg
              className="fill-stroke "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="text-base leading-4 ">Dashboard</p>
          </button>
          <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
            <svg
              className="fill-stroke"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="text-base leading-4 ">Users</p>
          </button>
        </div>
        <div className="flex flex-col justify-start items-center px-6 border-gray-600 w-full">
          <button className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  ">
            <p className="text-sm leading-5  uppercase">Lessons</p>
            <svg
              id="icon1"
              className="transform"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15L12 9L6 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <div
            id="menu1"
            className="flex justify-start flex-col w-full items-start pb-1"
          >
            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
              <svg
                className="fill-stroke"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p className="text-base leading-4  ">Messages</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center h-full pb-6 px-6  w-full  space-y-32 ">
          <ConditionalUserContent />
        </div>
      </div>
      <div className={`${contentClassName} relative`}>
        <div
          className={`${hamburgerButtonClassName} absolute p-5 right-0 lg:hidden`}
        >
          <HamburgerButton onClick={onOpen} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
