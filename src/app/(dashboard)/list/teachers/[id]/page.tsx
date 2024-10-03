import Image from "next/image";
import React from "react";

const SingleTeacherpage = () => {
  return (
    <div className="flex-1 p-7 flex flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 gap-7 flex flex-col">
        {/* TOP SECTION */}
        <div className="flex gap-7 flex-col lg:flex-row">
          <div className="lg:w-1/2 flex items-center  gap-3 p-3 rounded-lg">
            <div className="flex w-1/3">
              <Image
                src="/images/icons/userprofile.svg"
                alt=""
                width={135}
                height={135}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <div className="flex flex-col w-2/3 p-3">
              <h1 className="m-0 text-[1.4rem] "> Teacher Name </h1>
              <p className="text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                quibusdam consectetur, repudiandae.
              </p>
              <div className="flex w-full flex-col md:gap-3 lg:gap-0 md:flex-row lg:flex-col">
                <div className="flex flex-col justify-between md:w-1/2 lg:w-full">
                  <div className="flex items-center gap-3 ">
                    <Image
                      src="/images/icons/email.svg"
                      alt=""
                      width={14}
                      height={14}
                      className=""
                    />
                    <p className="text-xs m-0"> ms@gmail.com </p>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <Image
                      src="/images/icons/date.svg"
                      alt=""
                      width={14}
                      height={14}
                      className=""
                    />
                    <p className="text-xs m-0"> 3.10.2025 </p>
                  </div>
                </div>
                <div className="flex flex-col  justify-between md:w-1/2 lg:w-full">
                  <div className="flex items-center gap-3 ">
                    <Image
                      src="/images/icons/blood.svg"
                      alt=""
                      width={14}
                      height={14}
                      className=""
                    />
                    <p className="text-xs m-0"> A + </p>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <Image
                      src="/images/icons/phone.svg"
                      alt=""
                      width={14}
                      height={14}
                      className=""
                    />
                    <p className="text-xs m-0"> +358 000 111 333 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-wrap justify-between items-center gap-3 p-3">
            <div className="flex items-start bg-sky-50 p-3  rounded-xl gap-3 w-full md:w-[48%] ">
                <Image
                src="/images/icons/percentage.svg"
                alt=""
                width={21}
                height={21}
              />
              <div className="flex flex-col">
                <p className="m-0 p-0 font-semibold">90%</p>
                <p className="m-0 p-0 text-sm">Attendance</p>
              </div>
            </div>
            <div className="flex items-start bg-sky-50 p-3  rounded-xl gap-3 w-full md:w-[48%] ">
                <Image
                src="/images/icons/branches.svg"
                alt=""
                width={21}
                height={21}
              />
              <div className="flex flex-col">
                <p className="m-0 p-0 font-semibold">70%</p>
                <p className="m-0 p-0 text-sm">Branches</p>
              </div>
            </div>
            <div className="flex items-start bg-sky-50 p-3  rounded-xl gap-3 w-full md:w-[48%] ">
                <Image
                src="/images/icons/lessons.svg"
                alt=""
                width={21}
                height={21}
              />
              <div className="flex flex-col">
                <p className="m-0 p-0 font-semibold">80%</p>
                <p className="m-0 p-0 text-sm">Lessons</p>
              </div>
            </div>
            <div className="flex items-start bg-sky-50 p-3  rounded-xl gap-3 w-full md:w-[48%] ">
                <Image
                src="/images/icons/classes.svg"
                alt=""
                width={21}
                height={21}
              />
              <div className="flex flex-col">
                <p className="m-0 p-0 font-semibold">7</p>
                <p className="m-0 p-0 text-sm">Classes</p>
              </div>
            </div>
            
            
            
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <div className="flex">
          <div className="bg-sky-100 w-full">Teacher scedule</div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 bg-sky-100">Right</div>
    </div>
  );
};

export default SingleTeacherpage;
