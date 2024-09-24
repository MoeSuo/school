import { Button } from "@mui/material";
import React from "react";

const Pagination = () => {
  return (
    <div className="gap-3 flex items-center justify-between text-gray-500 ">
      <Button className="p-3 flex items-center justify-center rounded-md bg-slate-200 disabled:opacity-35 disabled:cursor-not-allowed ">
        Previous
      </Button>
    </div>
  );
};

export default Pagination;
