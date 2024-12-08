import { Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const LatestCard = ({ data }) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/productDetails/${data?._id}`);
  };

  return (
    <div className="flex flex-col w-fit mb-5">
      <div
        onClick={handleNavigate}
        className="h-[200px] w-[200px] rounded-xl overflow-hidden cursor-pointer drop-shadow-md"
      >
        <img
          src={data?.thumbnail}
          alt={data?.productName}
          className="w-full h-full block object-cover "
        />
      </div>

      <div>
        <div className="flex w-[60px]">
          {Array.from({ length: 5 }, () => (
            <Star fill="#111" strokeWidth={0} />
          ))}
        </div>
        <h1 className="font-outFit text-[1.5rem]">{data?.productName}</h1>
        <h3>
          <span className="font-outFit">₹ </span>
          {data?.price}
        </h3>
      </div>
    </div>
  );
};
