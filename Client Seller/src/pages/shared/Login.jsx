import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { instance } from "../../config/AxiosInstance";
import toast from "react-hot-toast";

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await instance({
        url: "sales/login",
        method: "POST",
        data,
      });
      navigate("/");
      toast.success("login successfully");
    } catch (error) {
      toast.error("login failed");
      console.log(error);
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <section className="grid grid-cols-2 ">
      <div className="backdrop flex justify-center items-center" />

      <form onSubmit={handleSubmit(onSubmit)} className=" w-full h-s ">
        <div className="h-screen w-full flex justify-center items-center bg-white">
          <div className="h-fit sm:px-4">
            <h1 className="font-bold text-[clamp(0.8rem,5vw,1.5rem)]">
              Hi Welcome to <br />{" "}
              <span className="sm:text-[clamp(0.8rem,5vw,3rem)] text-[clamp(0.8rem,10vw,3rem)]">
                {" "}
                SRM PHARMA
              </span>{" "}
            </h1>

            <div className=" h-fit my-10">
              <div className="flex flex-col mb-5">
                <label htmlFor="mail" className="text-sm text-gray-400">
                  Mail Id
                </label>
                <input
                  type="text"
                  className={`border-b h-10  p-2 ${
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
                <label htmlFor="password" className="text-sm text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  className={`border-b h-10  p-2 ${
                    errors.password ? "input-error" : ""
                  }`}
                  id="password"
                  {...register("password", {
                    required: "password Required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors?.password?.message}
                  </span>
                )}
              </div>
              <Link to={"/reset_password"}>
                <h3 className=" underline mb-10 text-blue-500 cursor-pointer">
                  Forgot Password ?
                </h3>
              </Link>

              <button className="btn w-full bg-green-300" type="submit">
                Login
              </button>
              <div className="border-b-2 md:my-10 my-4  "></div>

              <div className="w-full flex justify-center items-center">
                <h1>
                  Don't have an account !
                  <span
                    className="underline text-blue-500 cursor-pointer"
                    onClick={handleSignup}
                  >
                    Sign Up
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
