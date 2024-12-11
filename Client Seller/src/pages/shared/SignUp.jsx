import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { instance } from "../../config/AxiosInstance";

export const SignUp = () => {
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
      const response = await instance({
        url: "/sales/signup",
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
      <section className="grid sm:grid-cols-2 grid-cols-1">
        {/* form */}
        <div className="with-[500px] py-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="h-screen w-full flex justify-center items-center py-5">
              <div>
                <h1 className="font-bold text-[clamp(0.8rem,5vw,1rem)] md:mb-0 mb-5">
                  JOIN US FOR A <br />{" "}
                  <span className="text-[clamp(0.8rem,5vw,2rem)]">
                    HEALTHIER FUTURE
                  </span>{" "}
                </h1>

                <div className="h-fit md:my-5 ">
                  <div className="flex gap-5">
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="user_name"
                        className="text-sm text-gray-400"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        className={`border-b md:h-5 h-6  p-2 ${
                          errors.name ? "input-error" : ""
                        }`}
                        id="user_name"
                        {...register("name", {
                          required: "user name Required",
                        })}
                      />
                      {errors.name && (
                        <span className="text-red-500 text-sm mt-1">
                          {errors?.name?.message}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col mb-5">
                      <label htmlFor="mail" className="text-sm text-gray-400">
                        Mail Id
                      </label>
                      <input
                        type="text"
                        className={`border-b md:h-5 h-6   p-2 ${
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
                  </div>

                  <div className="flex gap-5">
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="company_name"
                        className="text-sm text-gray-400"
                      >
                        company name
                      </label>
                      <input
                        type="text"
                        className={`border-b md:h-5 h-6  p-2 ${
                          errors.company_name ? "input-error" : ""
                        }`}
                        id="company_name"
                        {...register("company_name", {
                          required: "company name Required",
                        })}
                      />
                      {errors.company_name && (
                        <span className="text-red-500 text-sm mt-1">
                          {errors?.company_name?.message}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col mb-5">
                      <label htmlFor="mail" className="text-sm text-gray-400">
                        Mobile
                      </label>
                      <input
                        type="text"
                        className={`border-b md:h-5 h-6   p-2 ${
                          errors.mobile ? "input-error" : ""
                        }`}
                        id="mail"
                        {...register("mobile", {
                          required: "mobile number Required",
                        })}
                      />
                      {errors.mobile && (
                        <span className="text-red-500 text-sm mt-1">
                          {errors?.mobile?.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-400"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className={`border-b md:h-5 h-6  p-2 ${
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
                      <label
                        htmlFor="confirm_password"
                        className="text-sm text-gray-400"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className={`border-b md:h-5 h-6   p-2 ${
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
                  </div>

                  <button
                    className="btn w-full bg-green-300 my-5 hover:bg-orange-400 text-white"
                    type="submit"
                  >
                    Sign up
                  </button>
                  <div className="border-b-2 my-5 " />

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
