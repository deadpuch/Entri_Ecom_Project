import React from "react";

export const AddressCard = ({ data }) => {
  return (
    <div className="mx-4">
      <div className="w-full border-2 p-4  rounded-2xl ">
        <div>
          <div className="flex flex-wrap w-full justify-between">
            {/* country */}
            <div className="">
              <h1 className="font-medium text-gray-400 text-sm">Country</h1>
              <h1 className="text-sm">{data?.Country}</h1>
            </div>

            {/* city /state */}
            <div className="flex flex-col  items-end ">
              <h1 className="font-medium text-gray-400 text-sm">
                City / State
              </h1>
              <p className="text-sm">
                {" "}
                {data?.City}/{data?.State}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap w-full justify-between">
            {/* Location */}
            <div className="mt-5 w-[100px] xs:w-[200px]">
              <h1 className="font-medium text-gray-400 text-sm">Location</h1>
              <h1 className="text-sm">{data?.Address}</h1>
            </div>

            {/* Zipcode*/}
            <div className="mt-5 ">
              <h1 className="font-medium text-gray-400 text-sm">ZipCode</h1>
              <h1 className="text-sm">{data?.Zip}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
