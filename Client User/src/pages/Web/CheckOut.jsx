import React from "react";

export const CheckOut = () => {
  return (
    <section className="h-screen w-full items-center flex-col flex ">
      <div className="mt-20">
        <h1 className="font-semibold text-[2rem]">Check Out</h1>
      </div>

      <div>
        <ul className="steps">
          <li className="step step-primary">Shipping</li>
          <li className="step step-primary">Payment</li>
          <li className="step step-primary">Order Review</li>
        </ul>
      </div>
    </section>
  );
};
