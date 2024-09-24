import { Button } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pagination = () => {
  return (
    <div className="gap-3 flex flex-col md:flex-row items-center justify-between text-gray-500 ">
      <Button
        disabled
        startIcon={<ArrowBackIosIcon />}
        className="text-sm max-w-[30px] max-h-[30px]  min-w-fit min-h-[30px]  p-3 flex items-center justify-center rounded-md bg-slate-200 disabled:opacity-35 disabled:cursor-not-allowed "
      >
        Previous
      </Button>

      <div className="flex items-center gap-3 justify-between ">
        <Button  
        className="max-w-[30px] max-h-[30px]  min-w-[30px] min-h-[30px] py-3 text-sm px-1 flex items-center justify-center rounded-md bg-sky-200">
          1
        </Button>
        <Button className="max-w-[30px] max-h-[30px]  min-w-[30px] min-h-[30px]  py-3 text-sm px-1 flex items-center justify-center rounded-md bg-slate-200">
          2
        </Button>
        <Button className="max-w-[30px] max-h-[30px]  min-w-[30px] min-h-[30px]  py-3 text-sm px-1 flex items-center justify-center rounded-md bg-slate-200">
          3
        </Button>
        ...
        <Button className="max-w-[30px] max-h-[30px]  min-w-[30px] min-h-[30px]  py-3 text-sm px-1 flex items-center justify-center rounded-md bg-slate-200">
          9
        </Button>
      </div>

      <Button endIcon={<ArrowForwardIosIcon />}
       className="text-sm max-w-[30px] max-h-[30px]  min-w-fit min-h-[30px]  p-3 flex items-center justify-center rounded-md bg-slate-200 disabled:opacity-35 disabled:cursor-not-allowed ">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
