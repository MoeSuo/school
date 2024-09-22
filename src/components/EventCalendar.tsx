"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-3 rounded-xl">
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center p-3">
          <h2 className="text-xl font-semibold">Events</h2>
          <Image
            src={"/images/icons/more.svg"}
            width={21}
            height={21}
            alt={"more"}
            className="cursor-pointer"
          />
        </div>
        {events.map((event) => (
          <div className="px-3 border-solid rounded-lg border-2 border-gray-100 border-t-4 odd:border-t-darkpink even:border-t-darkyellow" key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
