import React from "react";
import { ProductAddList } from "../components/Dashboard/ProductAddList";
import { useNavigate } from "react-router";
import { useFetch } from "../hooks/userFetch";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/add-products");
  };

  const user = {
    product_api: "/admin/product/get-product",
  };

  const [data, loading, error] = useFetch(user.product_api);

  console.log(data, "===item");

  return (
    <section>
      {/* Header section */}
      <h1 className="text-[2rem] font-semibold">Product</h1>
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <h1>Select All</h1>
        </div>
        <div>
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
          <li></li>
          <li className="flex justify-center">Product Image</li>
          <li className="flex justify-center">Product Name</li>
          <li className="flex justify-center">Description</li>
          <li className="flex justify-center">Quantity</li>
          <li className="flex justify-center">Unit</li>
          <li className="flex justify-center">Reviews</li>
        </ul>

        <div>
          {/* Check for loading and error states */}
          {data && data.length > 0
            ? data.map((value) => (
                <ProductAddList key={value._id} item={value} />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
