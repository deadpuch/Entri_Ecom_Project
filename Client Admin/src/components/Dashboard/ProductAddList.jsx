import { Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/userFetch";
import { instance } from "../../config/AxiosInstance";
import toast from "react-hot-toast/headless";

export const ProductAddList = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
  };

  const handelDelete = async () => {
    try {
      const response = await instance({
        url: `/admin/product/product-delete/${item?._id}`,
        method: "DELETE",
      });
      toast.success("Product deleted succesfully");
    } catch (error) {

      toast.error("Failed to delete product")
      console.log(error);
    }
  };


  return (
    <div
      className={`grid grid-cols-8 m-2 p-1 items-center  border rounded-lg ${
        isSelected ? "bg-blue-100" : "bg-white"
      }`}
    >
      {/* Checkbox */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <div className="h-[5rem] w-[5rem] bg-black rounded-2xl ">
          <img src={item?.thumbnail} alt="Item" />
        </div>
      </div>

      {/* Name */}
      <div className="flex justify-center">{item?.productName}</div>

      {/* Description */}
      <div className="h-[5rem] overflow-hidden overflow-y-scroll flex justify-center">
        <p className="text-[0.8rem]">{item?.productDescription}</p>
      </div>

      {/* Quantity */}
      <div className="flex justify-center">{item?.Product_Quantity}</div>

      {/* Unit */}
      <div className="flex justify-center">{item?.unit}</div>

      {/* Count */}
      <div className="flex justify-center">2</div>

      {/* Icons */}
      <div className="flex justify-center gap-5">
        <Pencil color="#006eff" className="h-[1.2rem] w-[1.2rem]" />
        <Trash2
          color="#fe0b0b"
          className="h-[1.2rem] w-[1.2rem]"
          onClick={handelDelete}
        />
      </div>
    </div>
  );
};
