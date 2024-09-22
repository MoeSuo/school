import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-3 rounded-xl">
      <div className="flex items-center justify-between pb-3">
        <h2 className="text-xl font-semibold">Announcements</h2>
        <span className="text-xs text-gray-400 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-3">

        {/* Announcement One */}
        <div className="px-3 bg-softpink/35  rounded-lg ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold mb-1 ">Title</h2>
            <span className="text-xs text-gray-300  bg-white rounded-lg p-1 ">
              22.09.2024
            </span>
          </div>
          <p className="text-sm text-gray-400">Decription</p>
        </div>
        {/* Announcement Two */}
        <div className="px-3 bg-softgreen/35  rounded-lg ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold mb-1 ">Title</h2>
            <span className="text-xs text-gray-300  bg-white rounded-lg p-1 ">
              22.09.2024
            </span>
          </div>
          <p className="text-sm text-gray-400">Decription</p>
        </div>
        {/* Announcement Three */}
        <div className="px-3 bg-softyellow/35  rounded-lg ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold mb-1 ">Title</h2>
            <span className="text-xs text-gray-300  bg-white rounded-lg p-1 ">
              22.09.2024
            </span>
          </div>
          <p className="text-sm text-gray-400">Decription</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
