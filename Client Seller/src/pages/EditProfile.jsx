import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Camera } from "lucide-react";
import toast from "react-hot-toast";
import { useFetch } from "../hooks/userFetch";
import { instance } from "../config/AxiosInstance";

export const EditProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [data] = useFetch("admin/profile");
  const [file, setFile] = useState();

  useEffect(() => {
    setValue("name", data?.name);
    setValue("Email", data?.Email);
  }, [data]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("Email", data.Email);
      formData.append("adminProfileImg", data.thumbnail);
      const response = await instance({
        url: "/admin/profile-update",
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
    <form onSubmit={handleSubmit(onSubmit)} className=" w-[60vw] h-full  ">
      <h1 className="font-semibold text-xl mb-5">Edit Profile</h1>

      <div className="h-auto me-5 rounded-2xl bg-[#f4f4f8]  p-5 px-10">
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
            <div className="flex flex-col">
              <label
                htmlFor="user_name"
                className="text-[0.95rem] text-gray-400"
              >
                User Name
              </label>
              <input
                type="text"
                name=""
                id="user_name"
                className=" h-10 p-2 rounded-xl border-gray-300 border-[1px] w-[20rem] "
                {...register("name")}
              />
            </div>

            {/*Email  */}
            <div className="flex flex-col">
              <label htmlFor="mail" className="text-[0.95rem] text-gray-400">
                Email
              </label>
              <input
                type="text"
                name=""
                id="mail"
                className=" h-10 p-2 rounded-xl border-gray-300 border-[1px] w-[20rem] "
                {...register("Email")}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-end">
          <button className="btn bg-blue-500 my-10 text-white">Save</button>
        </div>
      </div>
    </form>
  );
};
