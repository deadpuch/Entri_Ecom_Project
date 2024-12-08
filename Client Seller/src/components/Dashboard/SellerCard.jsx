import React from "react";
import { useFetch } from "../../hooks/userFetch";
import { SellerCardRow } from "./SellerCardRow";


export const SellerCard = () => {
  const [sellerdata, loading, error] = useFetch("/admin/get-allSellers");

  return (
    <div className="h-[75vh] overflow-clip overflow-y-scroll">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
            <th>GST No.</th>
            <th>Account Created</th>
            <th>Active</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {sellerdata &&
            sellerdata.map((user, index) => (
              <SellerCardRow getSeller={user} index={user._id} />
            ))}
        </tbody>
        {/* foot */}
        {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
      </table>
    </div>
  );
};
