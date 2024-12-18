import React, { useState } from "react";
import { instance } from "../../config/AxiosInstance";
import toast from "react-hot-toast";

export const UserCardRow = ({ getuser, user }) => {
  // Initialize the state based on the user's Active status
  const [isActive, setIsActive] = useState(getuser?.Active || false);

  const handleToggle = async (event) => {
    const newActiveState = event.target.checked; // Get the new toggle value
    setIsActive(newActiveState); // Update the toggle state locally

    try {
      const response = await instance({
        url: `/admin/terminateAccount/${user}`,
        method: "PUT",
        data: { Active: newActiveState }, // Send the new state to the API
      });

      if (newActiveState == true) {
        toast.success("User Activated");
      } else {
        toast.success("User Terminated successfully ");
      }
    } catch (error) {
      toast.success("somthing went wrong");
      console.error("Error updating Active state:", error);
      // Optionally revert state if API call fails
      setIsActive(!newActiveState);
    }
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={getuser?.profilePic}
                alt="profile Image"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{getuser?.User_name}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-medium">{getuser?.Email}</span>
      </td>
      <td>{getuser?.Address }</td>

      <td>{getuser?.createdAt 
       ? new Date(getuser.createdAt).toLocaleDateString() 
       : null}</td>
      <th>
        <input
          type="checkbox"
          className="toggle"
          checked={isActive} // Bind the checkbox state to isActive
          onChange={handleToggle} // Handle state and API update on toggle
        />
      </th>
    </tr>
  );
};
