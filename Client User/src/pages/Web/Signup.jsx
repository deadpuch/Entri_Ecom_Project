import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";


export const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance({
        url: "/user/signup",
        method: "POST",
        data,
      });

      toast.success("Account created successfully");
      setTimeout(() => {
        navigate("/"), 5000;
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <main>
      <section className="grid grid-cols-2">
        {/* form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="h-screen w-full flex justify-center items-center">
              <div>
                <h1 className="font-bold text-2xl">
                  Hi Welcome to <br />{" "}
                  <span className="text-[2.5rem]"> SRM PHARMA</span>{" "}
                </h1>

                <div className="w-80 h-80 my-10">
                  <div className="flex flex-col mb-5">
                    <label htmlFor="user_name">User Name</label>
                    <input
                      type="text"
                      className={`border-2 h-10 rounded-full p-2 ${
                        errors.User_name ? "input-error" : ""
                      }`}
                      id="user_name"
                      {...register("User_name", {
                        required: "user name Required",
                      })}
                    />
                    {errors.User_name && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors?.User_name?.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col mb-5">
                    <label htmlFor="mail">Mail Id</label>
                    <input
                      type="text"
                      className={`border-2 h-10 rounded-full p-2 ${
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
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className={`border-2 h-10 rounded-full p-2 ${
                        errors.password ? "input-error" : ""
                      }`}
                      id="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters long",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col mb-2">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input
                      type="password"
                      className={`border-2 h-10 rounded-full p-2 ${
                        errors.confirm_password ? "input-error" : ""
                      }`}
                      id="confirm_password"
                      {...register("confirm_password", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === getValues("password") ||
                          "Passwords do not match",
                      })}
                    />
                    {errors.confirm_password && (
                      <span className="text-red-500 text-sm mt-1">
                        {errors.confirm_password.message}
                      </span>
                    )}
                  </div>

                  <button
                    className="btn w-full bg-green-300 my-5"
                    type="submit"
                  >
                    Sign up
                  </button>
                  <div className="border-b-2 my-7 "></div>

                  <div className="w-full flex justify-center items-center">
                    <h1>
                      Already have an account !
                      <span
                        className="underline text-blue-500 cursor-pointer"
                        onClick={handleLogin}
                      >
                        Login
                      </span>{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* img */}
        <div className="signup_img" />
      </section>
    </main>
  );
};
