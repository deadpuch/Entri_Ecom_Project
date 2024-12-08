import React from "react";
import { NavLink } from "react-router-dom";

export const SettingsMenu = () => {
  return (
    <div className="flex h-full mt-2 flex-col justify-center me-5">
      <h1 className=" font-semibold text-[1.3rem]">Account Setting</h1>
      <div className="h-[80vh]  w-fit p-5 border-2 rounded-2xl flex justify-center py-10 bg-slate-50">
        <ul className="gap-6 flex flex-col items-baseline">
          <NavLink
            to="/setting/admin-profile"
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

          <NavLink
            to="/setting/terminate-account"
            className={({ isActive }) =>
              `flex justify-center px-2 py-1 rounded-full transition-all ${
                isActive
                  ? " text-white web-Nav-active"
                  : "hover:bg-blue-300 hover:text-white"
              }`
            }
          >
            <li>Status</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
