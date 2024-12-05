import React from "react";
import toast from "react-hot-toast/headless";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { instance } from "../../config/AxiosInstance";

export const Login = () => {
  const { register, handleSubmit } = useForm();
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
      toast.error("login failed");
      console.log(error);
    }
  };

  return (
    <section className="grid grid-cols-2 ">
      <div className="backdrop flex justify-center items-center"></div>

      <form
        className="w-full h-full flex justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-center items-center w-[20rem]">
          <div className="flex justify-start flex-col w-full">
            {/* Mail */}
            <div className="flex flex-col">
              <label htmlFor="mail">Mail</label>
              <input
                type="text"
                className="border-2 p-1 rounded-md "
                id="mail"
                {...register("Email")}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label htmlFor="password">password</label>
              <input
                type="text"
                className="border-2 p-1 rounded-md"
                id="password"
                {...register("password")}
              />
            </div>
          </div>
          <div className="w-full mt-10">
            <button className="w-full bg-[#FF5906] p-2 px-4 rounded-full text-white font-semibold">
              Login
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
