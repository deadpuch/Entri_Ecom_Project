import Dashboard from "../pages/dashboard";
import AddProduct from "../pages/addProduct";
import Layout from "../Layout/Layout";
import { AddNewProduct } from "../pages/AddNewProduct";
import { UserList } from "../pages/userlist";
import { Login } from "../pages/shared/Login";
import { BrowserRouter, Route } from "react-router";
import { Routes } from "react-router";
import { ProtectRoutes } from "./ProtectRoutes";



export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />

        <Route element={<ProtectRoutes/>}>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AddProduct />} />
            <Route path="add-products" element={<AddNewProduct />} />
            <Route path="user-list" element={<UserList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
