import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { NotLoginNav } from "../components/user-components/Web/NotLoginNav";
import { UserAuthNav } from "../components/user-components/Web/UserAuthNav";
import { Footer } from "../components/user-components/Web/Footer";
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
      {isUserAuth ? <UserAuthNav /> : <NotLoginNav />}

      <Outlet />

      <Footer />
    </>
  );
};
