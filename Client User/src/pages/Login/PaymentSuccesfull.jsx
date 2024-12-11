import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

export const PaymentSuccesfull = () => {
  const navigate = useNavigate();

  const confirmPayment = async () => {
    try {
      const response = await axiosInstance({
        url: `/payment/confirm`,
        method: "GET",
      });

      if (response.data.success) {
        toast.success("Payment confirmed!");

        setTimeout(() => {
          navigate("/order");
        }, 5000);
      } else {
        toast.error("Payment confirmation failed!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error confirming payment");
    }
  };

  useEffect(() => {
    confirmPayment();
  }, []);

  return (
    <div className="mx-4 md:mx-0 flex md:justify-center flex-col md:items-center">
      <div className="max-h-[50rem] max-w-[50rem]">
        <img
          src="/IMG/18352169_5989813.jpg"
          alt="success"
          className="w-full h-full block object-cover"
        />
      </div>
      <h1 className="w-full flex justify-center font-outFit text-[clamp(1rem,5vw,1.5rem) text-center]">
        Payment successfully completed <br /> Thank you for shopping with us
      </h1>
    </div>
  );
};
