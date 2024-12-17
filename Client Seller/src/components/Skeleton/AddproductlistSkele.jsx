import React from 'react'

export const AddproductlistSkele = () => {
  return (
    <div class="grid grid-cols-8 m-2 p-1 items-center border rounded-lg bg-white animate-pulse">
  {/* <!-- Image --> */}
  <div class="flex justify-center">
    <div class="h-20 w-20 bg-gray-200 rounded-2xl overflow-hidden "></div>
  </div>
  {/* <!-- Name --> */}
  <div class="flex justify-center">
    <div class="h-4 bg-gray-200 w-1/2"></div>
  </div>
  {/* <!-- Description --> */}
  <div class="h-20 overflow-hidden overflow-y-scroll flex justify-center">
    <div class="h-4 bg-gray-200 w-3/4"></div>
  </div>
  {/* <!-- Quantity --> */}
  <div class="flex justify-center">
    <div class="h-4 bg-gray-200 w-1/2"></div>
  </div>
  {/* <!-- Unit --> */}
  <div class="flex justify-center">
    <div class="h-4 bg-gray-200 w-1/2"></div>
  </div>
  {/* <!-- Count --> */}
  <div class="flex justify-center">
    <div class="h-4 bg-gray-200 w-1/2"></div>
  </div>
  {/* <!-- Icons --> */}
  <div class="flex justify-center gap-5">
    <div class="h-5 w-5 bg-gray-200 rounded"></div>
    <div class="h-5 w-5 bg-gray-200 rounded"></div>
  </div>
</div>
  )
}
