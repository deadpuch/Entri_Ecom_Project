import { Heart, Minus, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";

export const CartItem = ({ data }) => {
  const [count, setCount] = useState(data?.products?.[0]?.quantity);
  console.log((data, "===data"));

  return (
    <div className="mt-10 border-b-2 flex">
      {/* image and qunatity  */}
      <div>
        <div className="h-[10rem] w-[10rem] bg-black rounded-xl overflow-hidden">
          <img
            src={data?.products[0]?.productId?.thumbnail}
            alt=""
            className="w-full h-full object-cover block"
          />
        </div>

        <div className="flex items-center ">
          <div className="w-[8rem] flex justify-between px-2 py-2 rounded-full border-2 my-5 me-3  ">
            {data?.products?.[0]?.quantity > 1 ? (
              <div
                onClick={() => count > 1 && setCount(count - 1)}
                className=" cursor-pointer"
              >
                <Minus />
              </div>
            ) : (
              <div >
                <Trash2 />
              </div>
            )}

            <span>{count}</span>
            <div
              onClick={() => setCount(count + 1)}
              className=" cursor-pointer"
            >
              <Plus />
            </div>
          </div>

          <div>
            <Heart />
          </div>
        </div>
      </div>

      {/* name and details */}

      <div className="flex justify-between w-full mx-8">
        <div className="font-semibold text-[1.2rem]">
          {data?.products?.[0]?.productId?.productName}
        </div>
        <div className="font-semibold text-[1.2rem]">
          MRP :₹ {data?.products?.[0]?.price}{" "}
        </div>
      </div>
    </div>
  );
};
