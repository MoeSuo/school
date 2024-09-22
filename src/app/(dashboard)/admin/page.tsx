import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex gap-7 p-7 flex-col md:flex-row">
      {/* left side div */}
      <div className="w-full md:w-2/3 flex flex-col gap-7">
        {/* USER CARD */}
        <div className="flex justify-between gap-3 flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex flex-col lg:flex-row gap-3 ">
          {/* COUNT CHART */}
          <div className=" w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDIES CHART */}
          <div className=" w-full lg:w-2/3 h-[450px]">
          <AttendanceChart />
          </div>
        </div>
      </div>
      {/* right side div */}
      <div className="w-full md:w-1/3 bg-sky-100 ">right side div</div>
    </div>
  );
};

export default AdminPage;
