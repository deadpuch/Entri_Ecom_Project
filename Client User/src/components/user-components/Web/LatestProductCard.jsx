import { Heart, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const LatestProductCard = (item) => {
  return (
    <section className="mx-4">
      <div>
        <div className=" w-[150px] h-[180px] bg-slate-500 rounded-xl overflow-hidden drop-shadow-md relative">
          <div className=" absolute right-1 top-1 bg-black bg-opacity-35  z-10 p-1 rounded-full ">
            <Heart size={24} color="#ffffff" />
          </div>

          <Link to={`productDetails/${item?.item?._id}`}>
            <img
              src={item?.item?.thumbnail}
              alt=""
              className=" object-cover w-full h-full"
            />
          </Link>
        </div>

        <div className="flex justify-between items-center w-full mt-3">
          <h3 className="font-outFit text-xl">{item?.item?.productName}</h3>
          <div className="flex ">
            {Array.from({ length: 5 }, () => (
              <Star fill="#111" size={12} />
            ))}
          </div>
        </div>

        <h3 className="font-outFit ">{`₹ ${item?.item?.price}`} </h3>
      </div>
    </section>
  );
};
