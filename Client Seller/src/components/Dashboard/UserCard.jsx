import React from "react";
import { UserCardRow } from "./UserCardRow";
import { useFetch } from "../../hooks/userFetch";

export const UserCard = () => {
  const [userdata, loading, error] = useFetch("/admin/get-alluser");

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
            <th>Address</th>
            <th>craeted At</th>
            <th>Active</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {userdata &&
            userdata.map((user, index) => (
              <UserCardRow getuser={user} key={user._id} />
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
