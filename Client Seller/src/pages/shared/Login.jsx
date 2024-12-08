import React from "react";
import toast from "react-hot-toast/headless";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { instance } from "../../config/AxiosInstance";

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
      console.log(data, "====data");
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
      <div className="backdrop flex justify-center items-center"></div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-screen w-full flex justify-center items-center">
          <div>
            <h1 className="font-bold text-2xl">
              Hey <br /> <span className="text-[2.5rem]"> What's Up</span>{" "}
            </h1>

            <div className="w-80 h-80 my-10">
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
                    required: "password Required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors?.password?.message}
                  </span>
                )}
              </div>
              <Link to={"/rest-password"}>
                <h3 className=" underline mb-10 text-blue-500 cursor-pointer">
                  Forgot Password ?
                </h3>
              </Link>

              <button className="btn w-full bg-green-300" type="submit">
                Login
              </button>
              <div className="border-b-2 my-10 " />
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
