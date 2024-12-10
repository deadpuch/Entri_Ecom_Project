import { Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const MobileProductCard = ({ data}) => {
  const TotalRating = data?.review?.[0]?.rating;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/productDetails/${data?._id}`);
  };

  // const averageReview= /data?.review.length
  return (
    <section>
      <div className="w-fit">
        <div className="xxs:h-[10rem] xxs:w-[10rem] w-[18rem] h-[18rem] rounded-2xl mb-3 bg-slate-500 overflow-hidden drop-shadow-md">
          <img
            src={data?.thumbnail}
            alt={data?.productName}
            className="w-full h-full object-cover"
            onClick={handleNavigate}
          />
        </div>

        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">{data?.productName}</h1>
          <div className="flex">
            {Array.from({ length: 5 }, () => (
              <Star fill="#111" size={14} />
            ))}
          </div>
        </div>

        <h1 className="font-outFit">₹{data?.price}</h1>
      </div>
    </section>
  );
};
