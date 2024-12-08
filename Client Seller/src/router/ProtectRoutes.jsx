import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAdminData, saveAdminData } from "../Redux/features/adminSlice";
import { Outlet, useLocation, useNavigate } from "react-router";
import { instance } from "../config/AxiosInstance";


export const ProtectRoutes = () => {
  const { isAdminAuth, adminData } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const adminAuth = async () => {
    try {
      const response = await instance({
        url: "/sales/checkSales-user",
        method: "GET",
        withCredentials: true,
      });

      dispatch(saveAdminData());
    } catch (error) {
      dispatch(clearAdminData());
      console.log(error);
    }
  };

  console.log(isAdminAuth, "====adminauth");
  console.log(adminData, "====admindata");

  useEffect(() => {
    adminAuth();
  }, [location.pathname]);

  if (!isAdminAuth) {
    return navigate("/login");
  }

  return isAdminAuth && <Outlet />;
};
