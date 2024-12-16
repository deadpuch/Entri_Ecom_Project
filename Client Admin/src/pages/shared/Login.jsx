import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { instance } from "../../config/AxiosInstance";
import toast from "react-hot-toast"


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
        url: "/admin/login",
        method: "POST",
        data,
      });
      navigate("/");
      toast.success("login successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <section className="grid grid-cols-2 ">
      <div className="backdrop flex justify-center items-center"></div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-screen w-full flex justify-center items-center">
          <div>
            <h1 className="font-bold text-2xl">
              Hello Admin <br />{" "}
              <span className="text-[2.5rem]"> Welcome</span>{" "}
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
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
