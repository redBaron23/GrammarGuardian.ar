"use client";

import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import signOutIcon from "@/public/assets/sign-out-icon.svg";
import settingsIcon from "@/public/assets/settings-icon.svg";
import accountIcon from "@/public/assets/account-icon.svg";
import dotMenu from "@/public/assets/dot-menu.svg";
import DropdownOption from "../atoms/DropdownOption";
import Image from "next/image";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (open && !event.target.closest(".dropdown")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <div className="flex justify-end items-center relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
      >
        <Image src={dotMenu} alt="dot-menu" />
      </button>
      {open && (
        <div className="absolute w-60 px-5 py-3 dark:bg-gray-900 bg-white rounded-lg shadow border dark:border-transparent -mt-48">
          <ul className="space-y-3 dark:text-white">
            <DropdownOption
              label="Account"
              onClick={signOut}
              icon={accountIcon}
            />
            <DropdownOption
              label="Settings"
              onClick={signOut}
              icon={settingsIcon}
            />
            <hr className="dark:border-gray-700" />
            <DropdownOption
              label="Sign out"
              onClick={signOut}
              icon={signOutIcon}
              danger
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
