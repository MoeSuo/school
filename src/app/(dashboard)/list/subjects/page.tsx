import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { TableSearch } from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const SubjectsList = () => {
  const tableRowData = (item: Subject) => (
    <tr key={item.id} className="  even:bg-slate-50 text-sm ">
      <td className="flex gap-5 my-3"></td>
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(",")}</td>

      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
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
              // <Button
              //   variant="contained"
              //   className="w-7 h-9 flex items-center justify-center rounded-full bg-darkyellow"
              // >
              //   <Image
              //     src={"/images/icons/plus.svg"}
              //     alt="filter-icon"
              //     width={21}
              //     height={21}
              //   />
              // </Button>
              <FormModal type="create" table="subject" />
            )}
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION */}
      <Table
        columns={columns}
        tableRowData={tableRowData}
        data={subjectsData}
      />

      {/* BOTTOM SECTION */}
      <Pagination />
    </div>
  );
};

export default SubjectsList;
