import React, { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { axiosInstance } from "../../../config/axiosInstance";
import { useFetch } from "../../../hooks/useFetch";
import { Link } from "react-router-dom";

export const EditAddres = () => {
  const [addressData] = useFetch("/user/get-address");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("Mobile", addressData?.[0]?.Mobile);
    setValue("Address", addressData?.[0]?.Address);
    setValue("Name", addressData?.[0]?.Name);
    setValue("Country", addressData?.[0]?.Country);
    setValue("City", addressData?.[0]?.City);
    setValue("City", addressData?.[0]?.City);
    setValue("Zip", addressData?.[0]?.Zip);
    setValue("State", addressData?.[0]?.State);
  }, [addressData]);

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance({
        url: "/user/edit-address",
        method: "PUT",
        data,
      });
      toast.success("Address Changed");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <section className=" h-auto md:h-screen md:justify-center flex-col flex pt-5 md:pt-0 mx-4">
      <div className=" md:hidden flex items-center">
        <Link to="/user-profile/my-profile">
          <ChevronLeft />
        </Link>
        <h2 className="ms-3 font-semibold text-2xl">My profile</h2>
      </div>

      {/* form */}

      <h1 className="mt-8 text-xl">Edit Address</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div>
          <div className="my-8">
            <input
              type="Number"
              className={`border-b-[1px] border-gray-300  flex w-full ${
                errors.Mobile ? "input-error" : ""
              }`}
              {...register("Mobile", {
                required: "Mobile number Required",
              })}
              placeholder="Mobile"
            />
            {errors.Mobile && (
              <span className="text-red-500 text-sm mt-1">
                {errors?.Mobile?.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              className={`border-b-[1px] border-gray-300  flex w-full ${
                errors.Name ? "input-error" : ""
              }`}
              {...register("Name", {
                required: "Name Required",
              })}
              placeholder="Name"
            />
            {errors.Mobile && (
              <span className="text-red-500 text-sm mt-1">
                {errors?.Name?.message}
              </span>
            )}
          </div>

          <div className="my-8">
            <input
              type="text"
              className={`border-b-[1px] border-gray-300  flex w-full ${
                errors.Address ? "input-error" : ""
              }`}
              {...register("Address", {
                required: "Address Required",
              })}
              placeholder="Address"
            />
            {errors.Mobile && (
              <span className="text-red-500 text-sm mt-1">
                {errors?.Address?.message}
              </span>
            )}
          </div>

          <div className="flex gap-5 mb-10">
            <div className="w-full">
              <input
                type="text"
                className={`border-b-[1px] border-gray-300  flex w-full ${
                  errors.Country ? "input-error" : ""
                }`}
                {...register("Country", {
                  required: "Country Required",
                })}
                placeholder="Country"
              />
              {errors.Country && (
                <span className="text-red-500 text-sm mt-1">
                  {errors?.Country?.message}
                </span>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                className={`border-b-[1px] border-gray-300  flex w-full ${
                  errors.State ? "input-error" : ""
                }`}
                {...register("State", {
                  required: "State Required",
                })}
                placeholder="State"
              />
              {errors.State && (
                <span className="text-red-500 text-sm mt-1">
                  {errors?.State?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full">
              <input
                type="text"
                className={`border-b-[1px] border-gray-300  flex w-full ${
                  errors.City ? "input-error" : ""
                }`}
                {...register("City", {
                  required: "City Required",
                })}
                placeholder="City"
              />
              {errors.City && (
                <span className="text-red-500 text-sm mt-1">
                  {errors?.City?.message}
                </span>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                className={`border-b-[1px] border-gray-300  flex w-full ${
                  errors.Zip ? "input-error" : ""
                }`}
                {...register("Zip", {
                  required: "Zip code Required",
                })}
                placeholder="Zip code"
              />
              {errors.Zip && (
                <span className="text-red-500 text-sm mt-1">
                  {errors?.Zip?.message}
                </span>
              )}
            </div>
          </div>

          <button
            className="btn w-full bg-black text-white my-20 "
            type="submit"
          >
            SAVE
          </button>
        </div>
      </form>
    </section>
  );
};
