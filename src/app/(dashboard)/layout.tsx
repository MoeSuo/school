import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`  h-screen flex  `}>
      {/* LEFT PANEL */}
      <div className="w-[14%] md:w-[28%] lg:w-[21%] xl:w-[17%] bg-slate-100 px-1 md:px-7">
        <Link
          href={"/"}
          className="no-underline flex items-center justify-center md:justify-start pt-3 pb-7 gap-3 "
        >
          <Image
            src={"/images/school-logo.svg"}
            width={35}
            height={35}
            alt={"school-logo"}
          />
          <span className="hidden md:block font-bold ">Opi-arabia</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT PANEL */}
      <div className="w-[86%] md:w-[72%] lg:w-[79%] xl:w-[83%] bg-gray-50 /* overflow-scroll*/ flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
