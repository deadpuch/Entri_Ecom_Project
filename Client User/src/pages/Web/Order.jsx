import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { OrderCard } from "../../components/user-components/Web/OrderCard";

export const Order = () => {
  const [orderData] = useFetch("/user/user-orders");

  return (
    <section className="pt-16 md:h-screen md:p-24">
      <div className="flex px-4 top-0 w-full justify-between fixed z-10 bg-white py-4 md:hidden">
        <div className="flex items-center">
          <Link to="/profile">
            <ChevronLeft />
          </Link>
          <h2 className="ms-3 text-2xl">Orders</h2>
        </div>
      </div>
      {orderData?.map((value, index) => (
        <OrderCard data={value} key={index} />
      ))}
    </section>
  );
};
