import { Heart, Star } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../config/axiosInstance";

export const MobileProductCard = ({ data }) => {
  const TotalRating = data?.review?.[0]?.rating;
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
      toast.error( error?.response?.data?.message||"please Login");
    }
  };

  return (
    <section>
      <div className="w-fit">
        <div className="xxs:h-[10rem] xxs:w-[10rem] w-[18rem] h-[18rem] rounded-2xl mb-3 bg-slate-500 overflow-hidden drop-shadow-md">
          <div
            className=" absolute right-1 top-1 bg-black bg-opacity-35  z-10 p-1 rounded-full"
            onClick={handleWishlist}
          >
            <Heart size={20} color="#ffffff" />
          </div>
          <img
            src={data?.thumbnail}
            alt={data?.productName}
            className="w-full h-full object-cover"
            onClick={handleNavigate}
          />
        </div>

        <h1 className="text-lg font-semibold my-1">{data?.productName}</h1>

        <div className="flex justify-between items-center">
          <h1 className="font-outFit">₹{data?.price}</h1>
          <div className="flex">
            {Array.from({ length: 5 }, () => (
              <Star fill="#111" size={14} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
