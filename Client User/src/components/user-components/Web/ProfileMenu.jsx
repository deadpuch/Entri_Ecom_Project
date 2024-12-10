import { CircleUserRound } from "lucide-react";
import React from "react";
import { NavLink} from "react-router-dom";

export const ProfileMenu = () => {
  return (
    <div className="flex h-screen pt-16  flex-col justify-center ">
      <h1 className=" font-semibold text-[1.3rem] mb-5">Account Setting</h1>
      <div className="h-[70vh] p-5 border-2 rounded-2xl flex justify-center py-10 bg-slate-50">
        <ul className="gap-6 flex flex-col items-baseline">
          <NavLink
            to={"/user-profile/my-profile"||"/user-profile/edit-address"  }
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
            to="/user-profile/review"
            className={({ isActive }) =>
              `flex justify-center px-2 py-1 rounded-full transition-all ${
                isActive
                  ? "bg-blue-300 text-white web-Nav-active"
                  : "hover:bg-blue-300 hover:text-white"
              }`
            }
          >
            <li>Review</li>
          </NavLink>

          <NavLink
            to="/order"
            className={({ isActive }) =>
              `flex justify-center px-2 py-1 rounded-full transition-all ${
                isActive
                  ? "bg-blue-300 text-white web-Nav-active"
                  : "hover:bg-blue-300 hover:text-white"
              }`
            }
          >
            <li>My Order</li>
          </NavLink>

          <NavLink
            to="/user-profile/Track-Order"
            className={({ isActive }) =>
              `flex justify-center px-2 py-1 rounded-full transition-all ${
                isActive
                  ? "bg-blue-300 text-white web-Nav-active"
                  : "hover:bg-blue-300 hover:text-white"
              }`
            }
          >
            <li>Track Order</li>
          </NavLink>

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
            <li>Status</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
