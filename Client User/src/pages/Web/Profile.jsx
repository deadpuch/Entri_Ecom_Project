import React from "react";
import { Darkmode } from "../../components/shared/Darkmode";
import { ProfileMenu } from "../../components/user-components/ProfileMenu";

export const Profile = () => {
  return (
    <>
      <main className="md:hidden mt-5">
        <section className="flex justify-center mb-10">
          {/* profile pic  */}
          <div className="h-[80px] w-[80px] rounded-full bg-black"></div>
        </section>

        {/* menu */}
        <section className="mx-4 h-[70svh] flex flex-col justify-between">
          <div className="flex flex-col gap-7">
            <div className="flex w-full justify-between border-b-2 pb-4">
              <h1>Dark mode</h1>
              <Darkmode />
            </div>
            <div className="border-b-2 pb-4">Orders</div>
            <div className="border-b-2 pb-4">Track Order</div>
            <div className="border-b-2 pb-4">Customer Support </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <button className="btn bg-green-300">Sign Up</button>
            <button className="btn btn-outline">login</button>
          </div>
        </section>
      </main>

    
    </>
  );
};
