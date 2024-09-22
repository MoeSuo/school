import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-softcyan even:bg-softyellow flex-1 p-3 min-w-[140px]">
      <div className="flex justify-between items-center">
        <span className="bg-white/70 text-gray-500 rounded-lg p-1 text-xs">22/09/2024</span>
        <Image src={"/images/icons/more.svg"} alt="more" width={21} height={7} className="cursor-pointer"/>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-extrabold my-3">{type}s number</p>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
      </div>
    </div>
  );
};

export default UserCard;
