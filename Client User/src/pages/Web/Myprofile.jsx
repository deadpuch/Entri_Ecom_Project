import { Pencil } from "lucide-react";
import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { AddressCard } from "../../components/user-components/AddressCard";
import { useNavigate } from "react-router-dom";

export const Myprofile = () => {
  const [userData] = useFetch("/user/profile");
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleUserEdit = () => {
    navigate("edit-profile");
  };

  return (
    <section className="h-[80vh] w-full flex flex-col justify-center">
      <div className="my-10 flex justify-between">
        <h1 className="font-semibold text-xl">General information</h1>

        <button
          className="flex items-center gap-2 border-2 p-2 px-3 rounded-full text-gray-400 hover:bg-blue-500 hover:text-white"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleUserEdit}
        >
          Edit Profile
          <Pencil
            color={hovered ? "#ffffff" : "#000000"} // Change color on hover
            size={16}
          />
        </button>
      </div>

      <div className="mt-10 flex ">
        <div className="rounded-full h-[50px] w-[50px] bg-black overflow-hidden">
          <img
            src={userData?.profilePic}
            alt={userData?.User_name}
            className="w-full h-full block object-cover"
          />
        </div>

        <div className="ms-5">
          <h1 className="font-semibold text-lg">
            {userData?.User_name || "guest"}
          </h1>
          <h2>{userData?.Email || "mail@gmail.com"}</h2>
        </div>
      </div>
      <div className="my-10 flex justify-between">
        <h1 className="my-10 font-semibold text-xl">Address</h1>
        <button className="flex items-center h-fit gap-2 border-2 p-2 px-3 rounded-full text-gray-400 hover:bg-blue-500 hover:text-white">
          Add address
          <Pencil
            color={hovered ? "#ffffff" : "#000000"} // Change color on hover
            size={16}
          />
        </button>
      </div>

      <AddressCard />
    </section>
  );
};
