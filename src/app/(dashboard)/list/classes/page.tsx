
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { TableSearch } from "@/components/TableSearch";
import { role, classesData } from "@/lib/data";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Classes = {
  id: number;
  name: string;
  grade: number;
  capacity: number;
  supervisor: string;
};
const columns = [

  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden lg:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "Supervisor",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const SubjectsList = () => {
  const tableRowData = (item: Classes) => (
    <tr key={item.id} className="  even:bg-slate-50 text-sm ">
      <td className="flex gap-5 my-3">
        <div className="flex flex-col justify-start ">
          <h3 className="text-xs font-semibold  my-0">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell ">{item.grade}</td>
      <td className="hidden md:table-cell ">{item.capacity}</td>
      <td className="hidden md:table-cell ">{item.supervisor}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <Button className="w-7 h-7 flex items-center justify-center rounded-full bg-softcyan">
              <Image
                src="/images/icons/view.svg"
                alt=""
                width={16}
                height={16}
              />
            </Button>
          </Link>
          {role === "admin" && (
            <Button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image
                src="/images/icons/delete.svg"
                alt=""
                width={16}
                height={16}
              />
            </Button>
            // <FormModal table="teacher" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-7 rounded-lg flex-1 m-3 mt-0 ">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row md:items-center items-end justify-between  bg-sky-50 p-3 rounded-lg">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
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
            {role === "admin" && (
              <Button
                variant="contained"
                className="w-7 h-9 flex items-center justify-center rounded-full bg-darkyellow"
              >
                <Image
                  src={"/images/icons/plus.svg"}
                  alt="filter-icon"
                  width={21}
                  height={21}
                />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <Table
        columns={columns}
        tableRowData={tableRowData}
        data={classesData}
      />

      {/* BOTTOM SECTION */}
      <Pagination />
    </div>
  );
};

export default SubjectsList;
