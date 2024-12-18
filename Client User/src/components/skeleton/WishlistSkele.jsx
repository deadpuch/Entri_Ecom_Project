import React from 'react'

export const WishlistSkele = () => {
  return (
    <div class="p-5 border-b md:container mx-auto animate-pulse">
    <div class="flex justify-between">
      <div>
        <div class="h-4 bg-gray-200 rounded w-1/3"></div>
        <div class="h-3 bg-gray-200 rounded w-1/4 mt-1"></div>
      </div>
  
      <div class="h-20 w-20 overflow-hidden rounded-lg">
        <div class="w-full h-full bg-gray-200"></div>
      </div>
    </div>
  
    <div class="md:container mx-auto cursor-pointer">
      <div class="h-6 bg-gray-200 rounded w-4 mt-2"></div>
    </div>
  </div>
  )
}
