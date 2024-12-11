import React from "react";
import { useNavigate } from "react-router-dom";

export const PaymentCancelled  = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <div className="mx-4 md:mx-0 flex md:justify-center flex-col items-center">
    <div className="max-h-[25rem] max-w-[25rem] md:max-h-[50rem] md:max-w-[50rem]  ">
      <img
        src="/IMG/error.jpg"
        alt="error"
        className="w-full h-full block object-cover"
      />
    </div>
    <h1 className="w-full flex justify-center font-outFit text-[clamp(1rem,5vw,2rem) text-center]">
      Payment got Cancelled
    </h1>
  </div>
  );
};
