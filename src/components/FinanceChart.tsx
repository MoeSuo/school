"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    income: 4000,
    expense: 2400,
  },
  {
    name: "February",
    income: 3000,
    expense: 1398,
  },
  {
    name: "March",
    income: 2000,
    expense: 9800,
  },
  {
    name: "April",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "June",
    income: 2390,
    expense: 3800,
  },
  {
    name: "July",
    income: 3490,
    expense: 4300,
  },
  {
    name: "August",
    income: 3490,
    expense: 4300,
  },
  {
    name: "September",
    income: 3490,
    expense: 4300,
  },
  {
    name: "October",
    income: 3490,
    expense: 4300,
  },
  {
    name: "November",
    income: 3490,
    expense: 4300,
  },
  {
    name: "December",
    income: 3490,
    expense: 4300,
  },
];



const FinanceChart = () => {
  return (
    <div className="rounded-xl bg-white w-full h-full p-3 justify-between  flex flex-col">
      {/* TITLE */}
      <div className="flex gap-3 justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image
          src={"/images/icons/more.svg"}
          alt="more"
          width={21}
          height={21}
          className="cursor-pointer"
        />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%" >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "#d1d5db" }}
          />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBlock: "20px" }}
            layout="horizontal"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#F2B5D4"strokeWidth={3}
          />
          <Line type="monotone" dataKey="income" stroke="#90E3F4" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>

      <div className="w-full h-[90%]"></div>
    </div>
  );
};

export default FinanceChart;
