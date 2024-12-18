import React from "react";

export const LatesSkele = () => {
  return (
    <div class="animate-pulse">
      <div class="flex flex-col w-fit mb-5">
        <div class="h-52 w-52 rounded-xl bg-gray-200 mb-4"></div>

        <div class="flex justify-between my-5">
          <div>
            <div class="h-4 w-32 bg-gray-200 mb-2 rounded"></div>
            <div class="h-4 w-20 bg-gray-200 rounded"></div>
          </div>
          <div>
            <div class="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
