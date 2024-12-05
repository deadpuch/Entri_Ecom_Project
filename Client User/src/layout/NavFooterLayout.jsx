import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/user-components/Nav";
import { UserAuthNav } from "../components/user-components/UserAuthNav";
import { Footer } from "../components/user-components/Footer";

export const UserLayout = () => {
  const [userAuth, setUserAuth] = useState(true);
  return (
    <>
      {userAuth ? <UserAuthNav /> : <Nav />}
      <Outlet />
      <Footer />
    </>
  );
};
