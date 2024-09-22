"use client";
import Image from "next/image";
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    present: 20,
    absent: 40,
  },
  {
    name: "Tuesday",
    present: 30,
    absent: 30,
  },
  {
    name: "Wednesday",
    present: 15,
    absent: 45,
  },
  {
    name: "Thursday",
    present: 30,
    absent: 30,
  },
  {
    name: "Friday",
    present: 20,
    absent: 40,
  },
];

const AttendanceChart = () => {
  return (
    <div className="rounded-xl bg-white w-full h-full p-3 justify-between  flex flex-col">
      {/* TITLE */}
      <div className="flex gap-3 justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image
          src={"/images/icons/more.svg"}
          alt="more"
          width={21}
          height={21}
          className="cursor-pointer"
        />
      </div>
      {/* CHART */}
      <div className="w-full h-[90%]">
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            barSize={20}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray=" " vertical={false} stroke="#ddd"/>
            <XAxis dataKey="name"  axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false}/>
            <YAxis  axisLine={false}  tick={{fill: "#d1d5db"}} tickLine={false}/>
            <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "#d1d5db" }}/>
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBlock: "20px" }}
            />
            <Bar
              dataKey="absent"
              fill="#F2B5D4"
              legendType="circle"
              radius={[10,10,0,0]}
            />
            <Bar
              dataKey="present"
              fill="#90E3F4"
              legendType="circle"
              radius={[10,10,0,0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
