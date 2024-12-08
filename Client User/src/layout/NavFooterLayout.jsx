import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "../components/user-components/Nav";
import { UserAuthNav } from "../components/user-components/UserAuthNav";
import { Footer } from "../components/user-components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { clearuserData, saveuserData } from "../Redux/features/userSlice";
import { axiosInstance } from "../config/axiosInstance";

export const UserLayout = () => {
  const { isUserAuth, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  const checkUser = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/user/check-user",
      });
      dispatch(saveuserData());
    } catch (error) {
      dispatch(clearuserData());
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, [location.pathname]);

  return (
    <>
      {isUserAuth ? <UserAuthNav /> : <Nav />}
      <Outlet />
      <Footer />
    </>
  );
};
