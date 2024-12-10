import { Minus, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { axiosInstance } from "../../../config/axiosInstance";

export const MobCartListCard = ({ data, setData }) => {
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
    <section className="mx-4">
      <div className="flex my-4 justify-between">
        <div className="flex">
          <div className="bg-black h-[100px] w-[100px] rounded-2xl overflow-hidden">
            <img
              src={data?.productId?.thumbnail}
              alt={data?.productId?.productName}
            className="w-full h-full block object-cover" />
          </div>
          <div className="mx-2">
            <h1 className="font-semibold">{data?.productId?.productName}</h1>
            <h1 className="font-outFit"> ₹: {data?.price}</h1>
          </div>
        </div>

        {/* Qunatity */}

        <div className="w-[8rem] h-fit  flex justify-between items-center px-2 py-2 rounded-full border-2 ">
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
      </div>
    </section>
  );
};
