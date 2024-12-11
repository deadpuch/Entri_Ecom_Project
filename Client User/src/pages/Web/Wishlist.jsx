import React, { useEffect, useState } from "react";
import { WishCard } from "../../components/user-components/Web/WishCard";
import { useFetch } from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const Wishlist = () => {
  const [wishdata, setWishdata] = useState();

  const getwishlist = async () => {
    try {
      const response = await axiosInstance({
        url: "/user/wishlist/get",
        method: "GET",
      });

      setWishdata(response?.data?.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveProduct = (productId) => {
    setWishdata((prev) => ({
      ...prev,
      products: prev.products.filter((product) => product._id !== productId),
    }));
  };

  useEffect(() => {
    getwishlist();
  }, []);

  const wishProduct = wishdata?.products;

  return (
    <section className="h-auto pt-10 md:pt-0 md:h-screen">
      <div className="md:hidden flex px-4 top-0 w-full justify-between fixed z-10 bg-white py-4 ">
        <div className="flex items-center">
          <Link to="/">
            <ChevronLeft />
          </Link>
          <h2 className="ms-3 text-xl">My Profile</h2>
        </div>
      </div>
      <div className=" hidden md:block md:bg-slate-100  ">
        <div className="h-[18rem] flex items-center md:container mx-auto ">
          <h1 className="text-[2.5rem] font-outFit ">Wishlist</h1>
        </div>
      </div>
      {wishProduct?.map((value, index) => (
        <WishCard data={value} key={index} onRemove={handleRemoveProduct} />
      ))}
    </section>
  );
};
