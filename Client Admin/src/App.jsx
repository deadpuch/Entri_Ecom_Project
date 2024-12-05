import React from "react";
import { Router } from "./router/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Router />
    </>
  );
};

export default App;
