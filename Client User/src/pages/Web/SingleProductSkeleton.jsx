import React from "react";

export const SingleProductSkeleton = () => {
  return (
    <>
      <div class="flex h-[500px] mx-4 animate-pulse">
        <div class="gap-5 overflow-y-scroll scrollbar-hide">
          <div class="bg-black h-[80px] w-[80px] rounded-2xl my-4 overflow-hidden border-none drop-shadow-md"></div>
        </div>
        <div class="h-[500px] w-[400px] bg-gray-200 ms-5 rounded-2xl overflow-hidden drop-shadow-md"></div>
      </div>
      <div class="mx-4 max-w-[500px] h-[500px] flex flex-col justify-between">
        <div>
          <div class="h-6 bg-gray-200 rounded mb-2"></div>
          <div class="h-6 bg-gray-200 rounded mb-2"></div>
          <div class="h-6 bg-gray-200 rounded mb-2"></div>
          <div>
            <div class="h-6 bg-gray-200 rounded mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          </div>
        </div>
        <div class="my-4">
          <div class="h-10 bg-gray-200 rounded mb-2"></div>
          <div class="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </>
  );
};
