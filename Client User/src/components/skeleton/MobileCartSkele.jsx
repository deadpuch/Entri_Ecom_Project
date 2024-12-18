import React from "react";

export const MobileCartSkele = () => {
  return (
    <section className="mx-4 animate-pulse">
      <div class="flex my-4 justify-between">
        <div class="flex">
          <div class="bg-gray-200 h-[100px] w-[100px] rounded-2xl overflow-hidden">
            <div class="w-full h-full block object-cover"></div>
          </div>
          <div class="mx-2">
            <div class="h-5 bg-gray-200 rounded w-44"></div>
            <div class="h-5 bg-gray-200 rounded w-24"></div>
          </div>
        </div>

        <div class="w-[8rem] h-fit flex justify-between items-center px-2 py-2 rounded-full border-2 ">
          <div class="h-6 w-6 bg-gray-200 rounded"></div>
          <span class="h-5 w-5 bg-gray-200 rounded"></span>
          <div class="h-6 w-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </section>
  );
};
