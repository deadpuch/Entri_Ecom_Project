import { Star } from "lucide-react";
import React from "react";

export const Testimonial = () => {
  return (
    <div>
      <div className="w-[300px] h-auto bg-white p-5 rounded-xl">
        <div className="flex w-[70px] mb-2">
          {Array.from({ length: 5 }, () => (
            <Star fill="#111" strokeWidth={0} />
          ))}
        </div>

        <div className="mb-10">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            voluptates ut soluta natus exercitationem et est ducimus voluptate
            totam dicta quisquam blanditiis s
          </p>
        </div>
        <div className="flex">
          <div className="h-[50px] w-[50px] rounded-full overflow-hidden bg-black">
            <img src="" alt="" />
          </div>

          <div className="mx-4" >
            <h1>Name</h1>
            <h1>Position</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
