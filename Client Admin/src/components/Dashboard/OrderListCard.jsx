import React from "react";

export const OrderListCard = ({ data, key }) => {
  return (
    <tbody>
      {/* row 1 */}
      <tr className="hover:bg-base-200">
        <th></th>
        <td>{data?.shippingAddress?.Name}</td>
        <td>{data?.paymentStatus}</td>
        <td>{data?.orderStatus}</td>
        <td>{data?.shippingAddress?.Address}</td>
        <td>{data?.shippingAddress?.City}</td>
        <td>{data?.shippingAddress?.Zip}</td>
        <td>{data?.products?.[0]?.totalPrice}</td>
        <td>{data?.products?.[0]?.productName}</td>
        <td>
          {" "}
          <img
            src={data?.products?.[0]?.thumbnail}
            alt={data?.products?.[0]?.productName}
            className="h-20 w-20 "
          />
        </td>
        <td>{new Date(data?.createdAt).toLocaleString()}</td>
      </tr>
    </tbody>
  );
};
