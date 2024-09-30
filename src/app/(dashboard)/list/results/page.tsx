import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { TableSearch } from "@/components/TableSearch";
import { resultsData, role } from "@/lib/data";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
};
const columns = [
    {
      header: "Subject Name",
      accessor: "name",
    },
    {
      header: "Student",
      accessor: "student",
    },
    {
      header: "Score",
      accessor: "score",
      className: "hidden md:table-cell",
    },
    {
      header: "Teacher",
      accessor: "teacher",
      className: "hidden md:table-cell",
    },
    {
      header: "Class",
      accessor: "class",
      className: "hidden md:table-cell",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];
  

const ResultsList = () => {
  const tableRowData = (item: Result) => (
    <tr key={item.id} 
    className="  even:bg-slate-50 text-sm ">
      <td className="flex gap-5 my-3">
         <div className="flex flex-col justify-start ">
        <h3 className="text-xs font-semibold  my-0">{item.subject}</h3>
        </div> 
      </td>
      <td className=" md:table-cell ">{item.student}</td>
      <td className="hidden md:table-cell ">{item.score}</td>
      <td className="hidden md:table-cell ">{item.teacher}</td>
      <td className="hidden md:table-cell ">{item.class}</td>
      <td className="hidden md:table-cell ">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <Button className="w-7 h-7 flex items-center justify-center rounded-full bg-softcyan">
              <Image
                src="/images/icons/edit.svg"
                alt=""
                width={16}
                height={16}
              />
            </Button>
          </Link>
          {role === "admin" && (
           <Button className="w-7 h-7 flex items-center justify-center rounded-full ">
             <Image src="/images/icons/delete.svg" alt="" width={16} height={16} />
           </Button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-7 rounded-lg flex-1 m-3 mt-0 ">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row md:items-center items-end justify-between  bg-sky-50 p-3 rounded-lg">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
        <div className="flex gap-3 flex-col md:flex-row  w-full md:w-auto ">
          <TableSearch />

          <div className="flex items-center gap-3 self-end">
            <Button
              variant="contained"
              className="w-7 h-9 flex items-center justify-center rounded-full bg-darkyellow"
            >
              <Image
                src={"/images/icons/filter.svg"}
                alt="filter-icon"
                width={21}
                height={21}
              />
            </Button>
            <Button
              variant="contained"
              className="w-7 h-9 flex items-center justify-center rounded-full bg-darkyellow"
            >
              <Image
                src={"/images/icons/sort.svg"}
                alt="filter-icon"
                width={21}
                height={21}
              />
            </Button>
            {role ==="admin"  && <Button
              variant="contained"
              className="w-7 h-9 flex items-center justify-center rounded-full bg-darkyellow"
            >
              <Image
                src={"/images/icons/plus.svg"}
                alt="filter-icon"
                width={21}
                height={21}
              />
            </Button>}
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <Table columns={columns} tableRowData={tableRowData} data={resultsData} />

 
      {/* BOTTOM SECTION */}
      <Pagination />
    </div>
  );
};

export default ResultsList;
