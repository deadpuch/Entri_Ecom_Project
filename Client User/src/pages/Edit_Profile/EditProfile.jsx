import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useFetch } from "../../hooks/useFetch";
import { Camera, ChevronLeft } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";


export const EditProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [data] = useFetch("/user/profile");
  const [file, setFile] = useState();

  useEffect(() => {
    setValue("User_name", data?.User_name);
    setValue("Email", data?.Email);
  }, [data]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("user_name", data.user_name);
      formData.append("Email", data.Email);
      formData.append("profileImg", data.thumbnail);
      const response = await axiosInstance({
        url: "/user/profile-update",
        method: "PUT",
        data: formData,
      });

      toast.success("profile Updated");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
    setValue("thumbnail", selectedFile); // Set the thumbnail file manually
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full h-screen justify-center  flex-col mx-4 "
    >
      <div className="flex top-0 w-full justify-between fixed z-10 bg-white py-4 ">
        <div className="flex items-center">
          <Link to="/user-profile/my-profile">
            <ChevronLeft />
          </Link>
          <h2 className="ms-3 text-xl">My Profile</h2>
        </div>
      </div>
      <h1 className="font-semibold text-xl mb-5">Edit Profile</h1>

      <div className="h-auto md:ms-5 rounded-2xl bg-[#f4f4f8]  p-5 px-2 md:px-10">
        <div>
          <div className="h-20 w-20 bg-black rounded-full relative overflow-hidden">
            <div className="h-20 w-20 bg-black rounded-full opacity-45 absolute z-10" />
            {file && (
              <div className="h-20 w-20 bg-black rounded-full absolute z-10">
                <img src={file} className="w-full h-full block object-cover" />
              </div>
            )}
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />

            <label
              htmlFor="file"
              className="text-white flex gap-1 cursor-pointer p-5 absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Camera color="#ffffff" />
            </label>
            <img
              src={data?.profilePic}
              alt={data?.User_name}
              className="w-full h-full block object-cover"
            />
          </div>

          <div className="flex flex-wrap mt-5 justify-between ">
            {/* user Name */}
            <div className="flex flex-col w-full">
              <input
                type="text"
                name=""
                id="user_name"
                placeholder="Name"
                className=" h-10 p-2  bg-transparent  border-b-[1px]  md:w-[20rem] "
                {...register("User_name")}
              />
            </div>

            {/*Email  */}
            <div className="flex w-full flex-col my-5">
              <input
                type="text"
                name=""
                id="mail"
                className=" h-10 p-2  bg-transparent  border-b-[1px] w-full md:w-[20rem]  "
                {...register("Email")}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end">
          <button className="btn bg-blue-500 my-10 text-white w-full md:w-">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
