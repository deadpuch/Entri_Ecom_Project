import React from "react";

export const AddressForm = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl mt-10">Shipping Address</h1>

      <div className="flex justify-between mt-5">
        {/* Mobile */}
        <div>
          <div className="flex flex-col">
            <label htmlFor="State" className="text-[0.95rem] text-gray-400">
              Mobile
            </label>
            <input
              type="text"
              name=""
              id="Mobile"
              className=" h-10 p-2 rounded-xl border-gray-500 border-[1px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between mt-5">
        {/* Address_line_1 */}

        <div className="flex flex-col">
          <label
            htmlFor="Address_line_1"
            className="text-[0.95rem] text-gray-400"
          >
            Address_line_1
          </label>
          <input
            type="text"
            name=""
            id="Address_line_1"
            className=" h-10 p-2 rounded-xl border-gray-500 border-[1px] "
          />
        </div>

        {/* Address_line_2 */}
        <div>
          <div className="flex flex-col">
            <label
              htmlFor="Address_line_2"
              className="text-[0.95rem] text-gray-400"
            >
              Address_line_2
            </label>
            <input
              type="text"
              name=""
              id="Address_line_2"
              className=" h-10 p-2 rounded-xl border-gray-500 border-[1px] "
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        {/* City */}

        <div className="flex flex-col">
          <label htmlFor="City" className="text-[0.95rem] text-gray-400">
            City
          </label>
          <input
            type="text"
            name=""
            id="City"
            className=" h-10 p-2 rounded-xl border-gray-500 border-[1px] "
          />
        </div>

        {/* State */}
        <div>
          <div className="flex flex-col">
            <label htmlFor="State" className="text-[0.95rem] text-gray-400">
              State
            </label>
            <input
              type="text"
              name=""
              id="State"
              className=" h-10 p-2 rounded-xl border-gray-500 border-[1px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        {/* Country */}

        <div className="flex flex-col">
          <label htmlFor="City" className="text-[0.95rem] text-gray-400">
            Country
          </label>
          <input
            type="text"
            name=""
            id="Country"
            className=" h-10 p-2 rounded-xl border-gray-500 border-[1px] "
          />
        </div>

        {/* Zip */}
        <div>
          <div className="flex flex-col">
            <label htmlFor="State" className="text-[0.95rem] text-gray-400">
              Zip
            </label>
            <input
              type="text"
              name=""
              id="Zip"
              className=" h-10 p-2 rounded-xl border-gray-500 border-[1px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
