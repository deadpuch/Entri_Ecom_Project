import React from "react";
import { ProductAddList } from "../components/Dashboard/ProductAddList";

export const UserList = () => {
  return (
    <section>
      <div>
        <h1 className="text-[2rem] font-semibold">User List</h1>
      </div>

      {/* Header section */}
      <div className="flex justify-between">
        <div className="flex">
          <input type="checkbox" />
        </div>
      </div>

      <div className="border-2 w-full h-[80vh]">
        <ul className="grid grid-cols-6 gap-5 font-semibold justify-between border-b-2 h-[3rem] items-center ">
          <li></li>
          <li>Image</li>
          <li> Name</li>
          <li>id</li>
          <li>Reviews</li>
          

        </ul>

        <ProductAddList />
      </div>
    </section>
  );
};
