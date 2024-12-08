import React from "react";
import { RouterPath } from "./routers/router";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <Toaster position="top-right"/>
      <RouterPath />
    </>
  );
};
