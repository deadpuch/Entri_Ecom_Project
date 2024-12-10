import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Home } from "../pages/Web/Home";
import { Product } from "../pages/Web/Product";
import { UserLayout } from "../layout/NavFooterLayout";
import { Profile } from "../pages/Web/Profile";
import { Cart } from "../pages/Web/Cart";
import { About } from "../pages/Web/About";
import { UserEditLayout } from "../layout/UserEditLayout";
import { Myprofile } from "../pages/Web/Myprofile";
import { SearchBar } from "../pages/Web/SearchBar";
import { RestPassword } from "../pages/Login/RestPassword";
import { EditProfile } from "../pages/Edit_Profile/EditProfile";
import { DeactiveAc } from "../pages/Edit_Profile/DeactiveAc";
import { ProtectedRouter } from "./ProtectedRouter";
import { CheckOut } from "../pages/Web/CheckOut";
import { Signup } from "../pages/Login/Signup";
import { Login } from "../pages/Login/Login";
import { ErrorPage } from "../pages/Login/ErrorPage";
import { MobileLayout } from "../layout/MobileLayout";
import { ProductDetail } from "../pages/Web/ProductDetail";
import { PaymentSuccesfull } from "../pages/Login/PaymentSuccesfull";
import { PaymentCancelled } from "../pages/Login/PaymentCancelled ";
import { EditAddres } from "../components/user-components/Web/EditAddres";
import { Wishlist } from "../pages/Web/Wishlist";
import { Order } from "../pages/Web/Order";

export const RouterPath = () => {
  const params = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="reset_password" element={<RestPassword />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        <Route element={<MobileLayout />}>
          <Route element={<UserLayout />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Product />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />

            <Route element={<ProtectedRouter />}>
              <Route path="order" element={<Order/>} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="checkout" element={<CheckOut />} />
              <Route path="user-profile" element={<UserEditLayout />}>
                <Route path="my-profile" element={<Myprofile />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="edit-address" element={<EditAddres />} />
                <Route path="deactive" element={<DeactiveAc />} />
              </Route>
            </Route>

            <Route path="productDetails/:id" element={<ProductDetail />} />
          </Route>
        </Route>

        <Route path="/user/payment/success" element={<PaymentSuccesfull />} />
        <Route path="/user/payment/cancel" element={<PaymentCancelled />} />
        <Route path="search" element={<SearchBar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
