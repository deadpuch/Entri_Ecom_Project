import { CircleUserRound } from "lucide-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const ProfileMenu = () => {
  return (
    <div className="2xl:container xl:container lg:container md:container mx-auto relative h-full ">
      <div className=" absolute z-40">
        <h1 className="mt-24 font-semibold text-[1.3rem]">Account Setting</h1>
        <div className="h-[80vh]  w-[10rem] p-5 border-2 rounded-2xl flex justify-center py-10 bg-slate-50">
          <ul className="gap-6 flex flex-col items-baseline">
            <NavLink
              to="/user-profile"
              className={({ isActive }) => (isActive ? "web-Nav-active" : "")}
            >
              <li className="flex justify-center hover:bg-blue-300 hover:px-2 hover:py-1 hover:rounded-full transition-all ">
                My Profile
              </li>
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
            <li className="flex justify-center hover:bg-blue-300 hover:px-2 hover:py-1 hover:rounded-full transition-all ">
              Blog
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
