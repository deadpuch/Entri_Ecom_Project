import React from "react";

export const OrderCard = (data) => {
  return (
    <div className="mx-4 p-2 border-2 mb-5 rounded-2xl md:container md:mx-auto">
      <div className=" flex justify-between">
        <div className="flex items-center me-3">
          <div className="h-24 w-24">
            <img
              src={data?.data?.products?.[0]?.thumbnail}
              alt=""
              className="h-full w-full block object-cover"
            />
          </div>
          <div>
            <h1>{data?.data?.products?.[0]?.productName}</h1>
            <h1 className="font-outFit">
              ₹ {data?.data?.products?.[0]?.price}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap flex-col">
          <div className="text-sm mb-4 ">
            payment Status
            <h1 className="font-semibold">{data?.data?.paymentStatus}</h1>
          </div>
          <div className="text-sm">
            orderStatus
            <h1 className="font-semibold">{data?.data?.orderStatus}</h1>
          </div>
        </div>
        <div className="text-sm">
          Date
          <h1 className="font-semibold">
            {new Date(data?.data?.updatedAt).toLocaleDateString()}
          </h1>
        </div>
      </div>
    </div>
  );
};
