import React from "react";

export const CratSkele = () => {
  return (
    <div class="mt-10 border-b-2 flex animate-pulse">
      <div>
        <div class="h-[10rem] w-[10rem] bg-slate-400 rounded-xl overflow-hidden"></div>
        <div class="flex items-center ">
          <div class="w-[8rem] flex justify-between px-2 py-2 rounded-full border-2 my-5 me-3">
            <div class="h-5 w-5 bg-slate-400 rounded-full"></div>
            <div class="h-5 w-5 bg-slate-400 rounded"></div>
            <div class="h-5 w-5 bg-slate-400 rounded-full"></div>
          </div>
          <div class="h-6 w-6 bg-slate-400 rounded-full"></div>
        </div>
      </div>
      <div class="flex justify-between w-full mx-8">
        <div class="font-semibold text-xl h-6 bg-slate-400 rounded w-1/2"></div>
        <div class="font-semibold text-xl h-6 bg-slate-400 rounded w-1/2"></div>
      </div>
    </div>
  );
};
