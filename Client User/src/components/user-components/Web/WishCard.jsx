import { Trash } from "lucide-react";
import React from "react";
import { axiosInstance } from "../../../config/axiosInstance";

export const WishCard = ({ data, onRemove }) => {
  const handleDelete = async () => {
    try {
      const response = await axiosInstance({
        url: "/user/wishlist/delete",
        method: "DELETE",
        data: { productId: data?._id },
      });
      if (response.status === 200) {
        onRemove(data?._id); // Call the parent callback to update the state
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 border-b md:container mx-auto">
      <div className="flex justify-between">
        <div>
          <h1 className="md:text-[1.8rem] text-[1.4rem]">{data?.productName}</h1>
          <h1 className="font-outFit md:text-[1.2rem] text-gray-400">
            Price: {data?.price}₹
          </h1>
        </div>

        <div className="h-20 w-20 overflow-hidden rounded-lg">
          <img
            src={data?.thumbnail}
            alt={data?.productName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className="md:container mx-auto cursor-pointer"
        onClick={handleDelete}
      >
        <Trash color="#000" />
      </div>
    </div>
  );
};
