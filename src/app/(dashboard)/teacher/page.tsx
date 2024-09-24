import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import React from "react";

const TeacherPage = () => {
  return (
    <div className="flex flex-1 gap-7 p-7 flex-col md:flex-row">
      {/* left side div */}
      <div className="w-full md:w-2/3 flex flex-col gap-7 ">
        <div className="w-full h-full bg-white p-7 rounded-lg" >
        <h2 className="text-xl font-semibold">schedule</h2>
        <BigCalendar />
        </div>
      </div>
      {/* right side div */}
      <div className="w-full md:w-1/3 flex flex-col gap-7 ">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
