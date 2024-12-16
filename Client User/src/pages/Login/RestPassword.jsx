import React from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const RestPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance({
        url: "/user/reset-password",
        method: "PUT",
        data,
      });
      toast.success("Password changed successfully");
      navigate("/login")
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };
  return (
    <section className="grid sm:grid-cols-2 grid-cols-1">
      <div className="password_bg w-full h-screen sm:block hidden" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-screen w-full flex justify-center items-center">
          <div className="w-[500px] px-5">
            <h1 className="font-bold text-[1.5rem]">Rest Password</h1>

            <div className=" my-10">
              <div className="flex flex-col mb-5">
                <label htmlFor="mail" className="text-sm text-gray-400">Mail Id</label>
                <input
                  type="text"
                  className={`border-b h-10 p-2 ${
                    errors.Email ? "input-error" : ""
                  }`}
                  id="mail"
                  {...register("Email", {
                    required: "Email Required",
                  })}
                />
                {errors.Email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors?.Email?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-2">
                <label htmlFor="password" className="text-sm text-gray-400">Password</label>
                <input
                  type="password"
                  className={`border-b h-10  p-2 ${
                    errors.updatedPassword ? "input-error" : ""
                  }`}
                  id="password"
                  {...register("updatedPassword", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.updatedPassword && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.updatedPassword.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col mb-2">
                <label htmlFor="confirm_password" className="text-sm text-gray-400">Confirm Password</label>
                <input
                  type="password"
                  className={`border-b h-10 p-2 ${
                    errors.confirm_password ? "input-error" : ""
                  }`}
                  id="confirm_password"
                  {...register("confirm_password", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === getValues("confirm_password") ||
                      "Passwords do not match",
                  })}
                />
                {errors.confirm_password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.confirm_password.message}
                  </span>
                )}
              </div>

              <button className="btn w-full bg-green-300 my-8" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};