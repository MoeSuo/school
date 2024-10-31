"use client";

import Image from "next/image";
import React, { useState } from "react";

const FormModal = ({
//   table,
  type,
//   data,
//   id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: unknown;
  id?: number;
}) => {
  const btnColor =
    type === "create"
      ? "bg-darkyellow"
      : type === "update"
      ? "bg-softcyan"
      : "white";

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${btnColor} w-11 h-11 flex items-center justify-center rounded-full cursor-pointer`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={`/images/icons/${type}.svg`}
          alt=""
          width={16}
          height={16}
          className=" "
        />
      </button>
      {open && (
        <div className="w-screen h-screen bg-black/50 absolute top-0 left-0 z-50  flex justify-center items-center">
          <Image
            src={`/images/icons/close.svg`}
            alt=""
            width={70}
            height={70}
            className=" absolute top-7 right-7 cursor-pointer"
            onClick={() => setOpen(false)}
          />

          <div className="w-[90vw] h-[90vh] bg-yellow-500 mx-3 md:mx-14 overflow-y-auto flex items-center justify-center ">
            Salam
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
