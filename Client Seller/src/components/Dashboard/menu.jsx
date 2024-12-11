import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { instance } from "../../config/AxiosInstance";
import { clearAdminData, saveAdminData } from "../../Redux/features/adminSlice";
import { useFetch } from "../../hooks/userFetch";
import { ShoppingBasket } from "lucide-react";

const Menu = () => {
  const [data] = useFetch("sales/profile");
  const { isAdminAuth, adminData } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await instance({
        url: "/admin/logout",
        method: "PUT",
      });
      dispatch(saveAdminData());
      dispatch(clearAdminData());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center h-screen">
      <div className="h-[90vh]  w-[4rem] bg-gradient-to-t from-[#00327D] to-[#00091B] rounded-xl flex flex-col items-center justify-between ">
        {/* logo and main menu*/}
        <div className="my-10">
          <img src="/svg/fox_vista_logo.svg" alt="" />

          {/* main menu */}
          <div className="flex flex-col gap-8 mt-20 justify-center items-center">
            {/* home svg */}

            <NavLink
              to="/"
              style={({ isActive }) => {
                isActive ? "active" : "";
              }}
            >
              <div>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8822 10.875L19.251 9.24488V5.25C19.251 4.63125 18.7447 4.125 18.126 4.125H17.001C16.3822 4.125 15.876 4.63125 15.876 5.25V5.87212L13.626 3.62438C13.3189 3.33413 13.0376 3 12.501 3C11.9644 3 11.6831 3.33413 11.376 3.62438L4.11973 10.875C3.76873 11.2406 3.50098 11.5073 3.50098 12C3.50098 12.6334 3.98698 13.125 4.62598 13.125H5.75098V19.875C5.75098 20.4938 6.25723 21 6.87598 21H9.12598C9.7473 21 10.251 20.4963 10.251 19.875V15.375C10.251 14.7562 10.7572 14.25 11.376 14.25H13.626C14.2447 14.25 14.751 14.7562 14.751 15.375V19.875C14.751 20.4963 14.6922 21 15.3135 21H18.126C18.7447 21 19.251 20.4938 19.251 19.875V13.125H20.376C21.015 13.125 21.501 12.6334 21.501 12C21.501 11.5073 21.2332 11.2406 20.8822 10.875Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </NavLink>

            <NavLink
              style={({ isActive }) => {
                isActive ? "active" : "";
              }}
              to={"/Products"}
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6707 7.20002L11.3568 2.40002L3.04297 7.20002V16.8L11.3568 21.6M19.6707 7.20002L11.3568 12.6M19.6707 7.20002V12M11.3568 21.6V12.6M11.3568 21.6L13.1562 20.5611M11.3568 12.6L3.55681 7.80002M14.9568 9.60002L7.15681 4.80002M16.1568 18L17.3568 19.2L20.9568 15.6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </NavLink>


            <NavLink
              style={({ isActive }) => {
                isActive ? "active" : "";
              }}
              to={"/order-list" }
            >
              <div>
               <ShoppingBasket color="#ffff" />
              </div>
            </NavLink>
          </div>
        </div>

        {/* profile and logout */}

        <div className="my-10 flex flex-col items-center gap-5">
          <NavLink to="/setting/admin-profile">
            <div>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.1768 4.31627C13.7493 2.56124 11.2517 2.56124 10.8242 4.31627C10.7604 4.57999 10.6352 4.82492 10.4588 5.03112C10.2824 5.23732 10.0599 5.39897 9.80923 5.50291C9.55859 5.60684 9.28694 5.65014 9.01641 5.62927C8.74587 5.60839 8.48409 5.52394 8.25236 5.38279C6.70881 4.44227 4.9425 6.20855 5.88303 7.75207C6.49055 8.74884 5.95166 10.0494 4.81762 10.325C3.06144 10.7514 3.06144 13.25 4.81762 13.6753C5.08142 13.7392 5.32639 13.8645 5.5326 14.041C5.7388 14.2175 5.9004 14.4402 6.00424 14.691C6.10808 14.9418 6.15123 15.2135 6.13017 15.4841C6.1091 15.7547 6.02443 16.0165 5.88303 16.2482C4.9425 17.7917 6.70881 19.558 8.25236 18.6175C8.48404 18.4761 8.74585 18.3914 9.01646 18.3704C9.28707 18.3493 9.55883 18.3924 9.80961 18.4963C10.0604 18.6001 10.2831 18.7617 10.4596 18.9679C10.6361 19.1741 10.7614 19.4191 10.8253 19.6829C11.2517 21.439 13.7504 21.439 14.1757 19.6829C14.2398 19.4192 14.3652 19.1744 14.5418 18.9684C14.7183 18.7623 14.941 18.6008 15.1917 18.497C15.4424 18.3932 15.714 18.35 15.9846 18.3709C16.2551 18.3919 16.5169 18.4764 16.7486 18.6175C18.2922 19.558 20.0585 17.7917 19.1179 16.2482C18.9768 16.0165 18.8923 15.7547 18.8714 15.4842C18.8505 15.2136 18.8936 14.942 18.9975 14.6913C19.1013 14.4406 19.2628 14.2179 19.4688 14.0414C19.6749 13.8648 19.9197 13.7394 20.1834 13.6753C21.9395 13.2489 21.9395 10.7502 20.1834 10.325C19.9196 10.2611 19.6746 10.1358 19.4684 9.95928C19.2622 9.78278 19.1006 9.56007 18.9967 9.3093C18.8929 9.05853 18.8497 8.78677 18.8708 8.51617C18.8919 8.24556 18.9766 7.98376 19.1179 7.75207C20.0585 6.20855 18.2922 4.44227 16.7486 5.38279C16.5169 5.52418 16.2551 5.60886 15.9845 5.62992C15.7139 5.65098 15.4421 5.60784 15.1914 5.504C14.9406 5.40016 14.7179 5.23856 14.5414 5.03236C14.3649 4.82616 14.2396 4.58119 14.1757 4.3174L14.1768 4.31627Z"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M14.5005 12C14.5005 13.1046 13.6051 14 12.5005 14C11.3959 14 10.5005 13.1046 10.5005 12C10.5005 10.8954 11.3959 10 12.5005 10C13.6051 10 14.5005 10.8954 14.5005 12Z"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </NavLink>

          <div className=" rounded-full h-[40px] w-[40px] overflow-hidden bg-white">
            <img
              src={data?.profilePic}
              alt=""
              className="w-full h-full block object-cover"
            />
          </div>

          <div onClick={handleLogout} className=" cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.35294 16.2V18.3C9.35294 18.8569 9.57605 19.3911 9.97319 19.7849C10.3703 20.1787 10.909 20.4 11.4706 20.4L18.8824 20.4C19.444 20.4 19.9826 20.1787 20.3798 19.7849C20.7769 19.3911 21 18.8569 21 18.3L21 5.69998C21 5.14302 20.7769 4.60888 20.3798 4.21505C19.9826 3.82123 19.444 3.59998 18.8824 3.59998L11.4706 3.59998C10.909 3.59998 10.3703 3.82123 9.97319 4.21505C9.57605 4.60888 9.35294 5.14302 9.35294 5.69998V7.79998M15.7059 12L3 12M3 12L6.17647 15.15M3 12L6.17647 8.84998"
                stroke="#F30000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
