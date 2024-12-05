import { Heart, Plus, Trash2 } from "lucide-react";
import React from "react";

export const CartItem = () => {
  return (
    <div className="mt-10 border-b-2 flex">
      {/* image and qunatity  */}
      <div>
        <div className="h-[10rem] w-[10rem] bg-black rounded-xl overflow-hidden">
          <img
            src="/IMG/03.jpg"
            alt=""
            className="w-full h-full object-cover block"
          />
        </div>

        <div className="flex items-center ">

          <div className="w-[8rem] flex justify-between px-2 py-2 rounded-full border-2 my-5 me-3  ">
            <Trash2 />

            <span>1</span>
            <Plus />
          </div>

          <div>
            <Heart />
          </div>
        </div>
      </div>

      {/* name and details */}

      <div className="flex justify-between w-full mx-8">
        <div className="font-semibold text-[1.2rem]">Product Name</div>
        <div className="font-semibold text-[1.2rem]">MRP :₹ 1000</div>
      </div>
    </div>
  );
};
