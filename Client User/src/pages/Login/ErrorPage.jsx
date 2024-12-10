import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/")
  };
  return (
    <section className="w-full flex-col h-screen  flex justify-center items-center overflow-clip">
      <div className="h-[25rem] w-[25rem] md:h-[40rem] md:w-[30rem] px-5 ">
        <img
          src="/IMG/20824302_6374595.webp"
          alt="error"
          className="w-full h-full block object-cover "
        />
      </div>
      <h1>
        Somthing Went Wrong please{" "}
        <span className=" underline text-blue-500 cursor-pointer" onClick={handleBack}>
          go Back
        </span>
      </h1>
    </section>
  );
};
