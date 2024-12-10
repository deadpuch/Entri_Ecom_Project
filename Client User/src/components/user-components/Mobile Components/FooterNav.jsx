import { House, PackageOpen, ShoppingCart, UserRound } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

export const FooterNav = () => {
  return (
    //    {/* mobile Nav */}
    <nav className="md:hidden w-screen fixed z-50  bottom-2  drop-shadow-md ">
      <div className="flex  px-5  w-full items-center">
        <div className="flex gap-5 justify-between bg-black w-[95vw]  items-center p-1 px-3 py-2 rounded-full">
          <NavLink
            to="/"
            style={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            <div>
              <House color="#ffffff" />
            </div>
          </NavLink>

          {/* explore */}

          <NavLink to="products">
            <div>
              <PackageOpen color="#ffffff" />
            </div>
          </NavLink>

          {/* cart */}
          <NavLink to="cart">
            <div>
              <ShoppingCart color="#ffffff" />
            </div>
          </NavLink>

          {/* profile */}
          <NavLink to="profile">
            <div>
              <UserRound color="#ffffff" />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
