import { Camera, CircleX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { instance } from "../config/AxiosInstance";
import { useFetch } from "../hooks/userFetch";
import { useParams } from "react-router-dom";

export const EditProduct = () => {
  const { id } = useParams();
  const [multiFile, setMultiFile] = useState([]);
  const [file, setFile] = useState();



  const [productData, loading, error] = useFetch(
    `/admin/product/get-productDetails/${id}`
  );

console.log(productData,"===product");


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset, // Used for setting form values programmatically
  } = useForm();

  useEffect(() => {
    setValue("productName", productData?.productName);
    setValue("Product_Quantity", productData?.Product_Quantity);
    setValue("unit", productData?.unit);
    setValue("productDescription", productData?.productDescription);
    setValue("price", productData?.price);
    setMultiFile(productData?.productImage)
    setFile(productData?.thumbnail)
  }, [productData]);


  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
    setValue("thumbnail", selectedFile); // Set the thumbnail file manually
  };

  const handleDeleteImg = () => {
    setFile(null);
    setValue("thumbnail", null); // Clear the file from form
  };

  const handleMultipleImg = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      if (multiFile.length + filesArray.length <= 5) {
        setMultiFile((prevImages) => prevImages.concat(filesArray));
        setValue("itemImage", e.target.files); // Set the multiple files manually
      } else {
        alert("You can only upload a maximum of 5 images.");
      }
    }
  };

  const handleDeleteMultipleImg = (index) => {
    setMultiFile((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onSubmit = async (data) => {
    try {
      console.log(data, "=====data");
      const formData = new FormData();
      formData.append("productName", data.productName);
      formData.append("Product_Quantity", data.Product_Quantity);
      formData.append("unit", data.unit);
      formData.append("price", data.price);
      formData.append("productDescription", data.productDescription);
      formData.append("thumbnail", data.thumbnail); // Use the file from form
      if (data.itemImage) {
        Array.from(data.itemImage).forEach((file) => {
          formData.append("itemImage", file); // Append multiple product images
        });
      }
      const response = await instance({
        url: `/admin/product/product-update/${id}`,
        method: "PUT",
        data: formData,
      });
      toast.success("Product created successfully");
      // Reset form and state
      setFile(null); // Clear single image
      setMultiFile([]); // Clear multiple images
      reset(); // Reset react-hook-form fields
    } catch (error) {
      console.log(error, "===error");
      toast.error("Error while creating product");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="h-full border-2 w-full p-5 rounded-2xl">
        <div>
          <h1 className="text-[2rem] font-semibold mb-5">Add New Product</h1>

          <div className="w-full">
            <h1 className="font-semibold text-[1.2rem] mb-5">Product Info</h1>

            {/* Product Name */}
            <div className="flex gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="productname"
                  className="font-medium text-gray-500 mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  className={`border-[1px] h-[2rem] rounded-md p-2 ${
                    errors.productName ? "input-error" : ""
                  }`}
                  id="productname"
                  placeholder="Product name"
                  {...register("productName", {
                    required: "Product Name is required",
                  })}
                />
                {errors.productName && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors?.productName?.message}
                  </span>
                )}
              </div>

              {/* Quantity */}
              <div className="flex flex-col">
                <label
                  htmlFor="quantity"
                  className="font-medium text-gray-500 mb-2"
                >
                  Quantity
                </label>
                <input
                  defaultValue={productData?.Product_Quantity}
                  type="number"
                  className={`border-[1px] h-[2rem] rounded-md p-2 ${
                    errors.Product_Quantity ? "input-error" : ""
                  }`}
                  id="quantity"
                  placeholder="Product quantity"
                  {...register("Product_Quantity", {
                    required: "Product Quantity is required",
                  })}
                />
                {errors.Product_Quantity && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors?.Product_Quantity?.message}
                  </span>
                )}
              </div>

              {/* Unit */}
              <div className="flex flex-col">
                <label
                  htmlFor="unit"
                  className="font-medium text-gray-500 mb-2"
                >
                  Unit
                </label>
                <input
                  defaultValue={productData?.unit}
                  type="text"
                  className={`border-[1px] h-[2rem] w-[3rem] rounded-md p-1 ${
                    errors.unit ? "input-error" : ""
                  }`}
                  id="unit"
                  placeholder="KG"
                  {...register("unit", {
                    required: "Product unit is required",
                  })}
                />
              </div>

              {/* Price */}
              <div className="flex flex-col">
                <label
                  htmlFor="price"
                  className="font-medium text-gray-500 mb-2"
                >
                  Price
                </label>
                <input
                  defaultValue={productData?.price}
                  type="number"
                  className={`border-[1px] h-[2rem] w-[10rem] rounded-md p-1 ${
                    errors.price ? "input-error" : ""
                  }`}
                  id="price"
                  placeholder="₹"
                  {...register("price", {
                    required: "Price is required",
                  })}
                />

                {errors.price && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.price.message}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col mt-5 border-b-2 pb-10">
              <label
                htmlFor="description"
                className="font-medium text-gray-500 mb-2"
              >
                Description
              </label>
              <textarea
                value={productData?.productDescription}
                id="description"
                rows={5}
                className="w-[15rem] border-[1px] p-1 rounded-md"
                {...register("productDescription")}
              />
            </div>

            {/* Product Image */}
            <h1 className="font-semibold text-[1.2rem] my-5">Product Image</h1>
            <div className="flex gap-10">
              {/* Thumbnail */}
              <div>
                <h1 className="font-medium text-gray-500 mb-2">
                  Product Thumbnail
                </h1>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
                <div className="w-[10rem] h-[3rem] bg-black flex justify-center items-center cursor-pointer rounded-2xl ">
                  <label
                    htmlFor="file"
                    className="text-white flex gap-1 cursor-pointer"
                  >
                    <Camera color="#ffffff" />
                    Upload image
                  </label>
                </div>

                {/* Display Thumbnail */}
                <div className="h-[8rem] w-[8rem] mt-5 rounded-xl overflow-hidden relative">
                  {file && (
                    <>
                      <CircleX
                        color="#bd0000"
                        className="m-1 absolute right-0 z-20"
                        onClick={handleDeleteImg}
                      />
                      <img
                        src={file}
                        className="w-full h-full block object-cover"
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Multi Image */}
              <div>
                <h1 className="font-medium text-gray-500 mb-2">
                  Product Images
                </h1>
                <input
                  type="file"
                  multiple
                  onChange={handleMultipleImg}
                  accept="image/*"
                  className="hidden"
                  id="multifile"
                />
                <div className="w-[10rem] h-[3rem] bg-black flex justify-center items-center cursor-pointer rounded-2xl">
                  <label
                    htmlFor="multifile"
                    className="text-white flex gap-1 cursor-pointer"
                  >
                    <Camera color="#ffffff" />
                    Upload images
                  </label>
                </div>

                {/* Display Multiple Images */}
                <div className="flex gap-5">
                  {multiFile?.map((value, index) => (
                    <div
                      key={index}
                      className="h-[8rem] w-[8rem] mt-5 rounded-xl overflow-hidden relative"
                    >
                      <CircleX
                        color="#bd0000"
                        className="m-1 absolute right-0 z-20"
                        onClick={() => handleDeleteMultipleImg(index)}
                      />
                      <img
                        src={value}
                        className="w-full h-full block object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-row gap-5 mt-5 w-full justify-end">
              <button
                type="submit"
                className="btn bg-[#FF5906] text-white hover:text-black"
              >
                Save
              </button>

              <div
                className="btn btn-outline"
                onClick={() => {
                  setFile(null); // Clear single image
                  setMultiFile([]); // Clear multiple images
                  reset(); // Reset react-hook-form fields
                }}
              >
                Clear
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};
