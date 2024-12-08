import { CircleUserRound } from "lucide-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const ProfileMenu = () => {
  return (
    <div className="flex h-full mt-2 flex-col justify-center me-5">
      <h1 className=" font-semibold text-[1.3rem]">Account Setting</h1>
      <div className="h-[80vh]  w-fit p-5 border-2 rounded-2xl flex justify-center py-10 bg-slate-50">
        <ul className="gap-6 flex flex-col items-baseline">
          <NavLink
            to="/user-profile"
            className={({ isActive }) =>
              `flex justify-center px-2 py-1 rounded-full transition-all ${
                isActive
                  ? "bg-blue-300 text-white web-Nav-active"
                  : "hover:bg-blue-300 hover:text-white"
              }`
            }
          >
            <li>My Profile</li>
          </NavLink>

          <li className="flex justify-center hover:bg-blue-300 hover:px-2 hover:py-1 hover:rounded-full transition-all ">
            Review
          </li>
          <li className="flex justify-center hover:bg-blue-300 hover:px-2 hover:py-1 hover:rounded-full transition-all ">
            My Order
          </li>
          <li className="flex justify-center hover:bg-blue-300 hover:px-2 hover:py-1 hover:rounded-full transition-all ">
            Track Order
          </li>
          <li className="flex justify-center hover:bg-blue-300 hover:px-2 hover:py-1 hover:rounded-full transition-all ">
            Track Order
          </li>

          <NavLink
            to="/user-profile/deactive"
            className={({ isActive }) =>
              `flex justify-center px-2 py-1 rounded-full transition-all ${
                isActive
                  ? " text-white web-Nav-active"
                  : "hover:bg-blue-300 hover:text-white"
              }`
            }
          >
            <li className="flex justify-center hover:bg-blue-300 hover:px-2 hover:py-1 hover:rounded-full transition-all ">
              Status
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
