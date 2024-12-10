import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import { useForm } from "react-hook-form";
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
      const response = await axiosInstance({
        url: "/user/login",
        method: "POST",
        data,
      });
      toast.success("Login Successfull");
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);

    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <main>
        <section className=" grid sm:grid-cols-2 grid-cols-1 ">
          <div className="LoginBg h-screen w-full sm:block hidden" />

          {/* second section */}
          <form onSubmit={handleSubmit(onSubmit)} className=" w-full h-s ">
            <div className="h-screen w-full flex justify-center items-center bg-white">
              <div className="h-fit sm:px-4">
                <h1 className="font-bold text-[clamp(0.8rem,5vw,1.5rem)]">
                  Hi Welcome to <br />{" "}
                  <span className="sm:text-[clamp(0.8rem,5vw,3rem)] text-[clamp(0.8rem,10vw,3rem)]"> SRM PHARMA</span>{" "}
                </h1>

                <div className=" h-fit my-10">
                  <div className="flex flex-col mb-5">
                    <label htmlFor="mail" className="text-sm text-gray-400">Mail Id</label>
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
                    <label htmlFor="password" className="text-sm text-gray-400">Password</label>
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
      </main>
    </>
  );
};
