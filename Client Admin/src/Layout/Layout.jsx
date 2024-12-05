import React from "react";
import { Outlet } from "react-router";
import Menu from "../components/Dashboard/menu";

const Layout = () => {
  return (
    <div className="flex flex-row items-center 2xl:container xl:container lg:container md:container mx-auto">
      <div className="w-1/12 me-5 ">
        <Menu />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
