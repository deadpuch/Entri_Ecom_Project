import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Home } from "../pages/Web/Home";
import { Product } from "../pages/Web/Product";
import { UserLayout } from "../layout/NavFooterLayout";
import { Profile } from "../pages/Web/Profile";
import { ErrorPage } from "../pages/Web/ErrorPage";
import { ProductDetail } from "../pages/Web/ProductDetail";
import { Cart } from "../pages/Web/Cart";
import { About } from "../pages/Web/About";
import { UserEditLayout } from "../layout/UserEditLayout";
import { Myprofile } from "../pages/Web/Myprofile";
import { SearchBar } from "../pages/Web/SearchBar";
import { Login } from "../pages/Web/Login";
import { Signup } from "../pages/Web/Signup";
import { RestPassword } from "../pages/Web/RestPassword";
import { EditProfile } from "../pages/Edit_Profile/EditProfile";
import { DeactiveAc } from "../pages/Edit_Profile/DeactiveAc";
import { ProtectedRouter } from "./ProtectedRouter";

export const RouterPath = () => {
  const params = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="reset_password" element={<RestPassword />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route element={<UserLayout />} errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />

          <Route element={<ProtectedRouter />}>
            <Route path="checkout" element={<Cart/>} />
            <Route path="user-profile" element={<UserEditLayout />}>
              <Route index element={<Myprofile />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="deactive" element={<DeactiveAc />} />
            </Route>
          </Route>

          <Route path="productDetails/:id" element={<ProductDetail />} />
        </Route>
        <Route path="search" element={<SearchBar />} />
      </Routes>
    </BrowserRouter>
  );
};
