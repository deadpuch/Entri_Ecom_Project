import { Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = () => {
  const navigate = useNavigate();

  const handleNavigate=()=>{
    navigate("productDetails/:id")
  }

  return (
    <div className="flex flex-col items-center mb-5">
      
        <div onClick={handleNavigate} className="h-[200px] w-[200px] rounded-xl overflow-hidden">
          <img
            src="IMG/04.jpg"
            alt=""
            className="w-full h-full block object-cover"
          />
        </div>
     
      <div>
        <div className="flex w-[60px]">
          {Array.from({ length: 5 }, () => (
            <Star fill="#111" strokeWidth={0} />
          ))}
        </div>
        <h1 className="font-outFit text-[1.5rem]">Product Name</h1>
        <h3>
          {" "}
          <span className="font-outFit">₹ </span>price
        </h3>
      </div>
    </div>
  );
};
