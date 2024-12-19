import { Pencil, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { AddressCard } from "../../components/user-components/Web/AddressCard";
import { Link, useNavigate } from "react-router-dom";

export const Myprofile = () => {
  const [userData] = useFetch("/user/profile");
  const [address] = useFetch("/user/get-address");

  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleUserEdit = () => {
    navigate("/user-profile/edit-profile");
  };

  return (
    <>
      <section className="w-full md:hidden h-auto pt-16 pb-16">
        <div className="flex px-4 top-0 w-full justify-between fixed z-10 bg-white py-4 ">
          <div className="flex items-center">
            <ChevronLeft onClick={() => navigate("/profile")} />
            <h2 className="ms-3 text-xl">My Profile</h2>
          </div>
        </div>
        <section className="w-full">
          <div className="px-4 flex items-center justify-between w-full h-full mb-5">
            <h1 className="">General info</h1>

            <div>
              <button
                className="flex items-center gap-2 border-2 p-1 px-3 rounded-full"
                onClick={handleUserEdit}
              >
                <Pencil color="#a6a6a6" size={16} />
              </button>
            </div>
          </div>

          <div className="flex px-4">
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

          {/* Address */}

          <div className="my-10 px-4 flex items-center justify-between">
            <h1>Address</h1>

            <button className="flex items-center h-fit gap-2 border-2 p-1 px-3 rounded-full">
              <Link to="/user-profile/edit-address">
                <Pencil color="#a6a6a6" size={16} />
              </Link>
            </button>
          </div>
          {address?.map((value, index) => (
            <AddressCard data={value} key={index} />
          ))}
        </section>
      </section>

      <section className="hidden md:flex h-screen justify-center w-full flex-col ">
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
          <h1 className=" font-semibold text-xl">Address</h1>

          <Link to="/user-profile/edit-address">
            <button className="flex items-center h-fit gap-2 border-2 p-2 px-3 rounded-full text-gray-400 hover:bg-blue-500 hover:text-white">
              Edit address
              <Pencil
                color={hovered ? "#ffffff" : "#000000"} // Change color on hover
                size={16}
              />
            </button>
          </Link>
        </div>

        {address?.map((value, index) => (
          <AddressCard data={value} key={index} />
        ))}
      </section>
    </>
  );
};
