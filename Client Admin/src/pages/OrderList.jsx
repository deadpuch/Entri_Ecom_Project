import React from "react";
import { OrderListCard } from "../components/Dashboard/OrderListCard";
import { useFetch } from "../hooks/userFetch";

export const OrderList = () => {
  const [orderData] = useFetch("/admin/admin/orders");

  console.log(orderData,"===data");
  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Payment Status</th>
            <th>Order Status</th>
            <th>Address</th>
            <th>City</th>
            <th>Zip</th>
            <th>Total price</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Created At</th>
          </tr>
        </thead>
        {orderData?.map((value , index)=>(<OrderListCard data={value} key={index} />))}
        
      </table>
    </div>
  );
};
