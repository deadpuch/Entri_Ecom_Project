import { Star } from "lucide-react";
import React from "react";

export const Testimonial = ({ data, key }) => {


  return (
    <div>
      <div className="w-[300px] h-auto bg-white p-5 rounded-xl">
        <div className="flex w-[70px] mb-2">
          {Array.from({ length: data?.rating }, () => (
            <Star fill="#111" strokeWidth={0} />
          ))}
        </div>

        <div className="mb-10">
          <p>{data?.comment}</p>
        </div>
        <div className="flex items-center">
          <div className="h-[50px] w-[50px] rounded-full overflow-hidden bg-black">
            <img src={data?.user_data?.profilePic} alt={data?.user_data?.User_name} className="w-full h-full block object-cover" />
          </div>

          <div className="mx-4">
            <h1>{data?.user_data?.User_name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
