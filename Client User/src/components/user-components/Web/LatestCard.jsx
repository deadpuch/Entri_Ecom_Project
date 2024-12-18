import { Star, Heart } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../config/axiosInstance";
import toast from "react-hot-toast";

export const LatestCard = ({ data }) => {
  const navigate = useNavigate();
  const [isWishlist, setIsWishlist] = useState(false);

  const handleNavigate = () => {
    navigate(`/productDetails/${data?._id}`);
  };

  const handleWishlist = async () => {
    try {
      setIsWishlist(!isWishlist);

      const response = await axiosInstance({
        url: "/user/wishlist/add",
        method: "POST",
        data: { productId: data?._id },
      });
      toast.success("Product added to wishlist");
    } catch (error) {
      console.log(error);
      toast.error("please Login");
    }
  };
  return (
    <div className="flex flex-col w-fit mb-5">
      <div className="h-[200px] w-[200px] rounded-xl overflow-hidden cursor-pointer drop-shadow-md relative">
        <div
          className=" absolute right-1 top-1 bg-black bg-opacity-35  z-10 p-1 rounded-full"
          onClick={handleWishlist}
        >
          <Heart size={24} color="#ffffff" />
        </div>

        <img
          src={data?.thumbnail}
          alt={data?.productName}
          className="w-full h-full block object-cover "
          onClick={handleNavigate}
        />
      </div>

      <h1 className="font-outFit my-5 text-[1.5rem]">{data?.productName}</h1>
      <div className="flex justify-between  items-center">
        <h3>
          <span className="font-outFit">₹ </span>
          {data?.price}
        </h3>

        <div className="flex ">
          {Array.from({ length: 5 }, () => (
            <Star fill="#111" size={14} />
          ))}
        </div>
      </div>
    </div>
  );
};
