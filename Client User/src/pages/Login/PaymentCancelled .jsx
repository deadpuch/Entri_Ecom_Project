import React from "react";
import { useNavigate } from "react-router-dom";

export const PaymentCancelled  = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 2000);
  return (
    <div className="mx-4">
      <div className="max-h-[50rem] max-w-[50rem]">
        <img
          src="/IMG/error.jpg"
          alt="success"
          className="w-full h-full block object-cover"
        />
      </div>
      <h1 className="w-full flex justify-center font-outFit text-2xl">
        Payment Error 
      </h1>
    </div>
  );
};
