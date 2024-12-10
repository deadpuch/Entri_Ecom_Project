import { Search } from "lucide-react";
import React from "react";

export const SearchBar = () => {
  return (
    <section className="md:container mx-auto mt-10 h-screen absolute z-50 ">
      <div className="flex justify-center  relative">
        <input
          type="text"
          className="border-2 w-1/2 h-12 rounded-full"
        />

        <div className=" absolute left-">
          <Search />
        </div>
      </div>
    </section>
  );
};
