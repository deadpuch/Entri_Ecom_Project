import { Pencil } from "lucide-react";
import React from "react";

export const Myprofile = () => {
  return (
    <section className="h-[100vh] flex items-center 2xl:container xl:container lg:container md:container mx-auto ">
      <div className="h-[80vh] w-full  ms-48 mt-16">
        <h1>General information</h1>
        <div className="mt-10 flex ">
          <div className="rounded-full h-[50px] w-[50px] bg-black">
            <img src="" alt="" />
          </div>

          <div className="ms-5">
            <h1>Name</h1>
            <h2>Mail</h2>
          </div>

          <div>
            <button className="btn ms-5">Change Profile </button>
            <button className="btn ms-5">Delete </button>
          </div>
        </div>
        <div className="my-10 flex justify-between">
          <h1 className="font-semibold text-xl">Address</h1>

          <button className="flex items-center gap-2 border-2 p-1 rounded-full text-gray-400 px-2">
            Edit
            <Pencil size={16} color="gray" />
          </button>
        </div>

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
                <h1 className="font-medium text-gray-400 text-sm">
                  City / State
                </h1>
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
      </div>
    </section>
  );
};
