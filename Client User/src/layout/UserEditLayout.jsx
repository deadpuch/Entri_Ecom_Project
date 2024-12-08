import React from "react";
import { Outlet } from "react-router-dom";
import { ProfileMenu } from "../components/user-components/ProfileMenu";
import { SearchBar } from "../pages/Web/SearchBar";

export const UserEditLayout = () => {
  return (
  
      <div className="h-screen 2xl:container xl:container lg:container md:container mx-auto flex">
        <div className="w-2/12 ">
          <ProfileMenu />
        </div>
        <Outlet />
      </div>
  
  );
};
