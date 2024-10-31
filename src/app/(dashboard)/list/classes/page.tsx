import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { TableSearch } from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

type Class = {
  id: number;
  name: string;
  capacity?: number;
  grade: number;
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
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassesList = () => {
  const tableRowData = (item: Class) => (
    <tr key={item.id} className="  even:bg-slate-50 text-sm ">
      <td className="flex gap-5 my-3">
        <div className="flex flex-col justify-start ">
          <h3 className="text-xs font-semibold  my-0">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell ">{item.capacity}</td>
      <td className="hidden md:table-cell ">{item.grade}</td>
      <td className="hidden md:table-cell ">{item.supervisor}</td>

      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
            </>
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
            {role === "admin" && 
            <FormModal table="class" type="create" />
            }
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <Table columns={columns} tableRowData={tableRowData} data={classesData} />

      {/* BOTTOM SECTION */}
      <Pagination />
    </div>
  );
};

export default ClassesList;
