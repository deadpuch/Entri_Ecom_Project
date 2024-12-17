import React from "react";
import { ProductAddList } from "../components/Dashboard/ProductAddList";
import { useNavigate } from "react-router";
import { useFetch } from "../hooks/userFetch";
import { AddproductlistSkele } from "../components/Skeleton/AddproductlistSkele";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/add-products");
  };

  const user = {
    product_api: "/sales/seller-Product/all_product",
  };

  const [data, loading, error, setData] = useFetch(user.product_api);

  console.log(data,"===data");
  

  return (
    <section>
      {/* Header section */}
      <h1 className="text-[2rem] font-semibold">Product</h1>
      <div className="flex justify-between mb-4">
        <div className="flex w-full justify-end">
          <button
            className="p-2 bg-[#FF5906] rounded-full text-white font-semibold px-4 "
            onClick={handleNavigate}
          >
            Add New Product
          </button>
        </div>
      </div>

      <div className="border-2 w-full h-[75vh] rounded-2xl overflow-clip overflow-y-scroll ">
        <ul className="grid grid-cols-8 p-3 font-semibold border-b-2 h-[3rem] ">
          <li className="flex justify-center">Product Image</li>
          <li className="flex justify-center">Product Name</li>
          <li className="flex justify-center">Description</li>
          <li className="flex justify-center">Quantity</li>
          <li className="flex justify-center">Unit</li>
          <li className="flex justify-center">Reviews</li>
        </ul>

        <div>
        {loading ? Array.from({length:5}).map((_,index)=>( <AddproductlistSkele key={index}/>)): data?.map((value) => (
            <ProductAddList
              key={value._id}
              item={value}
              setData={setData}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
