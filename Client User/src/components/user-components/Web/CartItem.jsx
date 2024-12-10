import { Heart, Minus, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../config/axiosInstance";
import toast from "react-hot-toast";

export const CartItem = ({ data, setData }) => {
  const [count, setCount] = useState(data?.quantity);
  const productId = data?.productId?._id; // Get productId from the data

  const handleIncrement = async () => {
    const newCount = count + 1;
    try {
      const response = await axiosInstance({
        url: "/cart/edit-quantity",
        method: "PUT",
        data: {
          productId,
          quantity: newCount,
        },
      });
      setData(newCount);
      setCount(newCount);
    } catch (error) {
      console.log("Error updating quantity:", error);
    }
  };

  const handleDecrement = async () => {
    if (count > 1) {
      const newCount = count - 1; // Decrement the count
      try {
        // Send PUT request with the new count
        const response = await axiosInstance({
          url: "/cart/edit-quantity",
          method: "PUT",
          data: {
            productId,
            quantity: newCount,
          },
        });
        setData(newCount);
        setCount(newCount);
      } catch (error) {
        console.log("Error updating quantity:", error);
      }
    } else {
      // If quantity is 1, show a delete icon instead of decrement
      handleDelete(); // Call delete function if count is 1
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axiosInstance({
        url: "/cart/deleteItems",
        method: "DELETE",
        data: {
          productId,
        },
      });
      setData(productId);
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };

  return (
    <div className="mt-10 border-b-2 flex">
      {/* image and quantity */}
      <div>
        <div className="h-[10rem] w-[10rem] bg-black rounded-xl overflow-hidden">
          <img
            src={data?.productId?.thumbnail}
            alt={data?.productId?.productName}
            className="w-full h-full object-cover block"
          />
        </div>

        <div className="flex items-center ">
          <div className="w-[8rem] flex justify-between px-2 py-2 rounded-full border-2 my-5 me-3">
            {count > 1 ? (
              <div onClick={handleDecrement} className=" cursor-pointer">
                <Minus />
              </div>
            ) : (
              <div onClick={handleDelete}>
                <Trash2 />
              </div>
            )}

            <span>{count}</span>
            <div onClick={handleIncrement} className="cursor-pointer">
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
          {data?.productId?.productName}
        </div>
        <div className="font-semibold text-[1.2rem]">MRP : ₹{data?.price}</div>
      </div>
    </div>
  );
};
