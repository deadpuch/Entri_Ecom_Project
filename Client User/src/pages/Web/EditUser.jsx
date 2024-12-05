import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CircleUserRound } from "lucide-react";



export const EditUser = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="h-[100vh] md:container lg:container xl:container  2xl:container mx-auto mt-24">
      {/* menu */}
      <div>
        <div className="h-[80vh] w-[6rem] bg-black rounded-2xl flex justify-center py-10">
          <NavLink to="/">
            <div className="h-fit flex flex-col items-center">
              <CircleUserRound size={32} color="#ffffff" />
              <h1 className="text-white">Profile</h1>
            </div>
          </NavLink>
          <div className="w-full flex-1">
            <Outlet />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
