import React from "react";
import { Outlet } from "react-router-dom";
import { ProfileMenu } from "../components/user-components/Web/ProfileMenu";
import { SearchBar } from "../pages/Web/SearchBar";

export const UserEditLayout = () => {
  return (
    <div className="w-full md:container mx-auto md:flex">
      <div className="hidden md:flex xl:w-2/12 md:w-4/12 ">
        <ProfileMenu />
      </div>
      <Outlet />
    </div>
  );
};
