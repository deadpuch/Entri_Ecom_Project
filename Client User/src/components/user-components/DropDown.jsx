import React from "react";
import { NavLink } from "react-router-dom";

export const DropDown = () => {
  return (
    <div className="w-[200px] h-auto p-4 bg-white rounded-2xl">
      <div>
        <ul>
          <NavLink to="user-profile">
            <li className="border-b-[1px] border-gray-200 pb-2 mb-3">
              Profile
            </li>
          </NavLink>
          <li className="border-b-[1px] border-gray-200 pb-2 mb-3">
            {" "}
            Your Order
          </li>
          <li className="border-b-[1px] border-gray-200 pb-2 mb-3">
            Track Order
          </li>
          <li className="border-b-[1px] border-gray-200 pb-2 mb-3">
            Dark Mode
          </li>
        </ul>
        <div>
          <button className="w-full bg-red-500 p-2 rounded-full text-white">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
