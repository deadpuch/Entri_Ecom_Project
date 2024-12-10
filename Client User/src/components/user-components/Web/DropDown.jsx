import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../config/axiosInstance";
import toast from "react-hot-toast";

export const DropDown = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const response = await axiosInstance({
        url: "/user/logout",
        method: "PUT",
      });
      toast.success("User Logout Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="w-[200px] h-auto p-4 bg-white rounded-2xl">
      <div>
        <ul>
          <NavLink to="user-profile/my-profile">
            <li className="border-b-[1px] border-gray-200 pb-2 mb-3">
              Profile
            </li>
          </NavLink>
        
        </ul>
        <div>
          <button
            className="w-full bg-red-500 p-2 rounded-full text-white "
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
