import { Heart, Star } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../config/axiosInstance";

export const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/productDetails/${data?._id}`);
  };

  const handleWishlist = async () => {
    try {
      

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
        <div className=" absolute right-1 top-1 bg-black bg-opacity-35  z-10 p-1 rounded-full " onClick={handleWishlist}>
          <Heart size={24} color="#ffffff" />
        </div>

        <img
          src={data?.thumbnail}
          alt={data?.productName}
          className="w-full h-full block object-cover "
          onClick={handleNavigate}
        />
      </div>

      <div>
        <h1 className="font-outFit my-2 text-[1.5rem]">{data?.productName}</h1>

        <div className="flex w-full justify-between">
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
    </div>
  );
};
