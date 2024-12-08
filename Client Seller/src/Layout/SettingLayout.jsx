import React from "react";
import { SettingsMenu } from "../components/Dashboard/SettingsMenu";
import { Outlet } from "react-router-dom";

export const SettingLayout = () => {
  return (
    <>
      <SettingsMenu />
      <Outlet />
    </>
  );
};
