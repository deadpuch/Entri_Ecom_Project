import Dashboard from "../pages/dashboard";
import Layout from "../Layout/Layout";
import { AddNewProduct } from "../pages/AddNewProduct";
import { Login } from "../pages/shared/Login";
import { BrowserRouter, Route, useParams } from "react-router";
import { Routes } from "react-router";
import { ProtectRoutes } from "./ProtectRoutes";
import { UserList } from "../pages/UserList";
import AddProduct from "../pages/addProduct";
import { SellerList } from "../pages/SellerList";
import { EditProduct } from "../pages/EditProduct";
import { Setting } from "../pages/Setting";
import { RestPassword } from "../pages/shared/ResetPassword";
import { AdminProfile } from "../pages/AdminProfile";
import { SettingLayout } from "../Layout/SettingLayout";
import { EditProfile } from "../pages/EditProfile";
import { AccountTerminate } from "../pages/AccountTerminate";
import { OrderList } from "../pages/OrderList";

export const Router = () => {
  const params = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="rest-password" element={<RestPassword />} />

        <Route element={<ProtectRoutes />}>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AddProduct />} />
            <Route path="add-products" element={<AddNewProduct />} />
            <Route path="user-list" element={<UserList />} />
            <Route path="seller-list" element={<SellerList />} />
            <Route path="order-list" element={<OrderList/>} />


            <Route path="edit-product/:id" element={<EditProduct />} />
            <Route path="setting" element={<SettingLayout/>}>
              <Route path="admin-profile" element={<AdminProfile/>} />
              <Route path="edit-profile" element={<EditProfile/>} />
              <Route path="terminate-account" element={<AccountTerminate/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
