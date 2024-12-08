import { Star } from "lucide-react";
import React from "react";

export const TesmonialFront = () => {


  return (
    <div>
      <div className="w-[300px] h-auto bg-white p-5 rounded-xl">
        <div className="flex w-[70px] mb-2">
          {Array.from({ length: 5}, () => (
            <Star fill="#111" strokeWidth={0} />
          ))}
        </div>

        <div className="mb-10">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nemo vel unde autem velit magni earum a nihil tempore ipsa tempora culpa sit, dolorem explicabo ducimus sint? Maiores, praesentium alias?</p>
        </div>
        <div className="flex items-center">
          <div className="h-[50px] w-[50px] rounded-full overflow-hidden bg-black">
            {/* <img src={data?.user_data?.profilePic} alt={data?.user_data?.User_name} className="w-full h-full block object-cover" /> */}
          </div>

          <div className="mx-4">
            <h1>Name</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
