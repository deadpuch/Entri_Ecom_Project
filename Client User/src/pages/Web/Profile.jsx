import React from "react";
import { Darkmode } from "../../components/shared/Darkmode";
import {
  CircleUserRound,
  Headset,
  PackageSearch,
  Settings,
  Star,
  Truck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

export const Profile = () => {
  const [userData] = useFetch("/user/profile");
  const { isUserAuth } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const response = await axiosInstance({
        url: "/user/logout",
        method: "PUT",
      });
      toast.success("User Logout Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <>
      <main className="md:hidden pt-5 pb-3 h-auto">
        <section className="flex justify-center mb-10">
          {/* profile pic  */}
          <div className="h-[80px] w-[80px] rounded-full bg-black overflow-hidden">
            <img
              src={userData?.profilePic}
              alt={userData?.User_name}
              className="w-full h-full block object-cover"
            />
          </div>
        </section>

        {/* menu */}
        <section className="mx-4 h-auto pb-16">
          <div className="flex flex-col gap-7 mb-5">
            <div className="flex w-full justify-between border-b-2 pb-4">
              <h1>Dark mode</h1>
              <Darkmode />
            </div>

            <Link to="/user-profile/my-profile">
              <div className="border-b-2 pb-4 flex w-full justify-between">
                My Profile
                <CircleUserRound />
              </div>
            </Link>

            <div className="border-b-2 pb-4 flex w-full justify-between">
              Reviews
              <Star />
            </div>

            <Link to="/order">
              <div className="border-b-2 pb-4 flex w-full justify-between">
                Orders
                <PackageSearch />
              </div>
            </Link>
            <div className="border-b-2 pb-4 flex w-full justify-between">
              Track Order
              <Truck />
            </div>

            <Link to="/user-profile/deactive">
              <div className="border-b-2 pb-4 flex w-full justify-between">
                Settings
                <Settings />{" "}
              </div>
            </Link>
          </div>
          {isUserAuth ? (
            <>
              <button
                className="mt-5 btn w-full bg-red-600 text-white "
                onClick={handleLogOut}
              >
                Logout
              </button>
            </>
          ) : (
            <div className="w-full flex flex-col gap-2">
              <Link to="/signup">
                <button className="w-full btn bg-green-300">Sign Up</button>
              </Link>

              <Link to="/login">
                <button className="w-full btn btn-outline">login</button>
              </Link>
            </div>
          )}
        </section>
      </main>
    </>
  );
};
