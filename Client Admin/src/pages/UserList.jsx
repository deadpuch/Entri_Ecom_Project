import React from "react";
import { ProductAddList } from "../components/Dashboard/ProductAddList";
import { UserCard } from "../components/Dashboard/UserCard";

export const UserList = () => {
  return (
    <section className="h-[90vh]">
      <h1 className="text-[2rem] font-semibold my-8 ">User List</h1>

      {/* Header section */}

      <UserCard />
    </section>
  );
};
