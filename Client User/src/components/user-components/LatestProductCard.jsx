import { Heart, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const LatestProductCard = (item) => {
  return (
    <section className="mx-4">
      <div>
        <Link to={`productDetails/${item?.item?._id}`}>
          <div className=" w-[150px] h-[180px] bg-slate-500 rounded-xl overflow-hidden ">
            <img
              src={item?.item?.thumbnail}
              alt=""
              className=" object-cover w-full h-full"
            />
          </div>
        </Link>
        <div className="flex justify-between">
          <div>
            <h3 className="font-outFit">{item?.item?.productName}</h3>
            <div className="flex w-[50px]">
              {Array.from({ length: 5 }, () => (
                <Star fill="#111" strokeWidth={0} />
              ))}
            </div>
            <h3 className="font-outFit font-semibold">
              {`₹ ${item?.item?.price}`}{" "}
            </h3>
          </div>
          <div className="mt-2">
            <Heart />
          </div>
        </div>
      </div>
    </section>
  );
};
