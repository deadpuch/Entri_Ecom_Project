import React from "react";

export const CateogaryList = ({ data }) => {


  return (
    <div>
      <ul className="flex gap-5">
        <li>{data?.category}</li>
      </ul>
    </div>
  );
};
