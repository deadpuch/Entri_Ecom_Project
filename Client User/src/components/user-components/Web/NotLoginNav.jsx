import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Darkmode } from "../../shared/Darkmode";
import { ShoppingBag } from "lucide-react";

export const NotLoginNav = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("signup");
  };

  return (
    <>
      {/* web Nav */}
      <header className="hidden md:block md:container  top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed z-50 ">
        <nav className=" h-auto p-2 px-4 border-white border-2 w-full  rounded-full  bg-white bg-opacity-60 backdrop-blur-md flex justify-between items-center ">
          <div>
            <img src="/PNG/LOGO .png" alt="" className="h-[45px] " />
          </div>

          <ul className="flex items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex justify-center px-2 py-1 rounded-full transition-all ${
                  isActive
                    ? "bg-blue-300 text-white web-Nav-active"
                    : "hover:bg-gray-300 hover:text-black"
                }`
              }
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex justify-center px-2 py-1 rounded-full transition-all ${
                  isActive
                    ? "bg-blue-300 text-white web-Nav-active"
                    : "hover:bg-gray-300 hover:text-black"
                }`
              }
            >
              <li>Product</li>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex justify-center px-2 py-1 rounded-full transition-all ${
                  isActive
                    ? "bg-blue-300 text-white web-Nav-active"
                    : "hover:bg-gray-300 hover:text-black"
                }`
              }
            >
              <li>About</li>
            </NavLink>
          </ul>

          <div className="flex items-center gap-4">
            <NavLink
              to="cart"
              className={({ isActive }) =>
                `flex justify-center p-2  rounded-full transition-all ${
                  isActive
                    ? "bg-blue-300 text-white web-NavCart-active"
                    : "hover:bg-gray-300 hover:text-black"
                }`
              }
            >
              <ShoppingBag />
            </NavLink>

            <button
              className="btn bg-green-300 hover:bg-green-500"
              onClick={handleSignup}
            >
              SignUp
            </button>
            <button className="btn btn-outline" onClick={handleLogin}>
              Login
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
