import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <div className={`${poppins.className} h-screen flex  `}>
        {/* LEFT PANEL */}
        <div className="w-[14%] md:w-[7%] lg:w-[14%] bg-sky-100">
          <Link href={"/"} className="flex items-center justify-center gap-3">
          <Image src={"/images/school-logo.svg"} width={35} height={35} alt={"school-logo"} />
          <span className="hidden lg:block">Opi-arabia</span>
          </Link>
        </div>
        {/* RIGHT PANEL */}
        <div className="w-[86%] md:w-[93%] lg:w-[86%] bg-sky-300">
          RIGHT PANEL
        </div>
        {children}
        </div>
  );
}
