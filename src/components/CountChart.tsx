"use client";
import Image from "next/image";
import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Girls",
    count: 60,
    fill: "#F2B5D4",
  },
  {
    name: "Boys",
    count: 40,
    fill: "#90E3F4",
  },
  {
    name: "Totla",
    count: 100,
    fill: "white",
  },
];

const CountChart = () => {
  return (
    // TITLE
    <div className="rounded-xl bg-white w-full h-full p-3">
      {/* TITLE */}
      <div className="flex gap-3 justify-between flex-wrap">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image
          src={"/images/icons/more.svg"}
          alt="more"
          width={21}
          height={21}
          className="cursor-pointer"
        />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={21}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/images/icons/gender.svg"}
          alt="more"
          width={42}
          height={42}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <div className="bg-darkpink rounded-full w-5 h-5"></div>
          <div className="font-bold">60</div>
          <div className="text-xs  text-gray-500 ">Girls[60%]</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-darkcyan rounded-full w-5 h-5"></div>
          <div className="font-bold">40</div>
          <div className="text-xs  text-gray-500 ">Boys[40%]</div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
