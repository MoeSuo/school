import Image from 'next/image'
import React from 'react'

export const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-3 text-xs rounded-full ring-[1.5px] ring-gray-300">
    <Image
      src={"/images/icons/search.svg"}
      width={21}
      height={21}
      alt="search"
      className="opacity-30 ml-3"
    />
    <input type="text" placeholder="Search..." className="w-[140px] p-3 bg-transparent outline-none border-none" />
  </div>
  )
}
