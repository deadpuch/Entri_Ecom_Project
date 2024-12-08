import React from "react";

export const AddressCard = () => {
  return (
    <div className="w-full border-2 p-4 rounded-2xl ">
      <div className="">
        <div className="flex w-full justify-between">
          {/* country */}
          <div>
            <h1 className="font-medium text-gray-400 text-sm">Country</h1>
            <h1>India</h1>
          </div>

          {/* city /state */}
          <div>
            <h1 className="font-medium text-gray-400 text-sm">City / State</h1>
            <h1>Kerala</h1>
          </div>
        </div>

        <div className="flex w-full justify-between">
          {/* Location */}
          <div className="mt-5">
            <h1 className="font-medium text-gray-400 text-sm">Location</h1>
            <h1>3451 E Tudor Rd, Anchorage Alaska</h1>
          </div>

          {/* Zipcode*/}
          <div className="mt-5">
            <h1 className="font-medium text-gray-400 text-sm">ZipCode</h1>
            <h1>670645</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
