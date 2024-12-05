import React from "react";

export const AddNewProduct = () => {
  return (
    <section className="h-[90vh]" >
      <div>
        <h1 className="text-[2rem] font-semibold mb-5">Add New Product</h1>

        <div className=" w-full">
          <h1 className="font-semibold text-[1.2rem] mb-5">Product Info</h1>

          {/*first layer  */}
          <div className="flex gap-5">
            <div className="flex  flex-col">
              <label
                htmlFor="productname"
                className="font-medium text-gray-500 mb-2"
              >
                Product Name
              </label>
              <input
                type="text"
                className="border-[1px] h-[2rem] rounded-md"
                id="productname"
              />
            </div>

            <div className="flex  flex-col">
              <label
                htmlFor="quantity"
                className="font-medium text-gray-500 mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                className="border-[1px] h-[2rem] rounded-md"
                id="quantity"
              />
            </div>

            <div className="flex  flex-col">
              <label htmlFor="unit" className="font-medium text-gray-500 mb-2">
                Unit
              </label>
              <input
                type="text"
                className="border-[1px] h-[2rem] w-[3rem] rounded-md p-1"
                id="unit"
                placeholder="KG"
              />
            </div>

            <div className="flex  flex-col">
              <label htmlFor="price" className="font-medium text-gray-500 mb-2">
                Price
              </label>
              <input
                type="number"
                className="border-[1px] h-[2rem] w-[10rem] rounded-md"
                id="price"
              />
            </div>
          </div>

          {/* Second layer */}

          <div className="flex flex-col mt-2 border-b-2 pb-10">
            <label
              htmlFor="description"
              className="font-medium text-gray-500 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={5} // Adjust the number of rows as needed
              className="w-[15rem] border-[1px] p-1 rounded-md"
            />
          </div>

          {/* Third Level */}
          <h1 className="font-semibold text-[1.2rem] my-5">Product Image</h1>
          <div className="flex">
            <div>
              <h1 className="font-semibold text-[1.2rem]">
                {" "}
                Product Thumpnail
              </h1>
              <input type="file" />
              {/* <img src={file} /> */}
            </div>

            <div>
              <h1 className="font-semibold text-[1.2rem]">Product Images</h1>
              <input type="file" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
