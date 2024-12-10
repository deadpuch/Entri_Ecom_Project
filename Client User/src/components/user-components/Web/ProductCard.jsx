import { Heart, Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/productDetails/${data?._id}`);
  };

  return (
    <div className="flex flex-col w-fit mb-5">
      <div
        
        className="h-[200px] w-[200px] rounded-xl overflow-hidden cursor-pointer drop-shadow-md relative"
      >
        <div className=" absolute right-1 top-1 bg-black bg-opacity-35  z-10 p-1 rounded-full ">
          <Heart size={24} color="#ffffff" />
        </div>


        <img
          src={data?.thumbnail}
          alt={data?.productName}
          className="w-full h-full block object-cover " onClick={handleNavigate}
        />
      </div>

      <div className="flex justify-between my-5">
        <div>
          <h1 className="font-outFit text-[1.5rem]">{data?.productName}</h1>
          <h3>
            <span className="font-outFit">₹ </span>
            {data?.price}
          </h3>
        </div>

        <div className="flex ">
          {Array.from({ length: 5 }, () => (
            <Star fill="#111" size={14} />
          ))}
        </div>
      </div>
    </div>
  );
};
