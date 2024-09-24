import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-3 text-xs rounded-full ring-[1.5px] ring-gray-300">
        <Image
          src={"/images/icons/search.svg"}
          width={21}
          height={21}
          alt="search"
          className="opacity-30 ml-3"
        />
        <input type="text" placeholder="Search..." className="w-[140px] p-3 bg-transparent outline-none border-none" />
      </div>
      {/* User icons */}
      <div className="flex items-center gap-5 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src={"/images/icons/messages.svg"}
            width={21}
            height={21}
            alt="search"
          />
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src={"/images/icons/announcements.svg"}
            width={21}
            height={21}
            alt="search"
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 justify-center items-center bg-purple-500 rounded-full flex text-white text-xs">3</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Mohamed S</span>
          <span className="text-[10px] text-right ">Admin</span>
        </div>
        <Image
          src={"/images/icons/avatar.svg"}
          width={35}
          height={35}
          alt="search"
        />
      </div>
    </div>
  );
};

export default Navbar;
