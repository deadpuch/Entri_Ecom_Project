import React, { useEffect, useRef } from "react";
import { Heart, Search, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";
import { DropDown } from "./DropDown";
import gsap from "gsap";
import { useFetch } from "../../../hooks/useFetch";

export const UserAuthNav = () => {
  const animation = useRef(null); // Ref for the dropdown element
  const [userData] = useFetch("/user/profile");

  const handleDropDown = () => {
    const dropdown = animation.current;
    const isHidden =
      dropdown.style.display === "none" || !dropdown.style.display;

    if (isHidden) {
      // Show dropdown
      dropdown.style.display = "block";
      gsap.to(dropdown, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // Hide dropdown
      gsap.to(dropdown, {
        scale: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          dropdown.style.display = "none";
        },
      });
    }
  };

  const closeDropDown = () => {
    const dropdown = animation.current;
    if (dropdown && dropdown.style.display === "block") {
      gsap.to(dropdown, {
        scale: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          dropdown.style.display = "none";
        },
      });
    }
  };

  const handleClickOutside = (event) => {
    if (animation.current && !animation.current.contains(event.target)) {
      closeDropDown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="hidden md:block w-full fixed z-[100] top-0 mt-5">
        <nav className="container h-auto p-2 px-4 border-white border-2 mx-auto rounded-full bg-white bg-opacity-60 backdrop-blur-md items-center grid grid-cols-3">
          <div>
            <img src="/PNG/LOGO .png" alt="Logo" className="h-[45px]" />
          </div>

          <ul className="flex items-center gap-4 w-full justify-center">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "web-Nav-active" : "")}
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to="products"
              className={({ isActive }) => (isActive ? "web-Nav-active" : "")}
            >
              <li>Product</li>
            </NavLink>

            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "web-Nav-active" : "")}
            >
              <li>About</li>
            </NavLink>
          </ul>

          <div className="flex gap-4 w-full items-center justify-end">
            {/* <NavLink to="search">
              <div>
                <Search />
              </div>
            </NavLink> */}

            <NavLink
              to="wishlist"
              className={({ isActive }) =>
                isActive ? "web-NavCart-active" : ""
              }
            >
              <Heart />
            </NavLink>

            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive ? "web-NavCart-active" : ""
              }
            >
              <ShoppingBag />
            </NavLink>

            <div
              onClick={handleDropDown}
              className="h-[40px] w-[40px] rounded-full bg-black cursor-pointer overflow-hidden"
            >
              <img
                src={userData?.profilePic}
                alt={userData?.User_name}
                className="w-full h-full block object-cover"
              />
            </div>

            <div
              ref={animation}
              style={{
                display: "none",
                transform: "scale(0)",
                transformOrigin: "top right", // Animation starts from top-right
              }}
              className="absolute top-[58px] right-0 overflow-hidden"
            >
              <DropDown />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
