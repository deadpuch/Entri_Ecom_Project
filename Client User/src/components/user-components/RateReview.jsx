import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export const RateReview = ({onCancel}) => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rating: "3", // Default rating set to 3
    },
  });

  const [feedbackCount, setFeedbackCount] = useState(0);
  const maxChars = 500;

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance({
        url: `/user/review/create_review/${id}`,
        method: "POST",
        data,
      });
      toast.success("Thank you for your review");
      reset();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleFeedbackChange = (e) => {
    const feedbackLength = e.target.value.length;
    setFeedbackCount(feedbackLength);
  };

  return (
    <div className="w-full h-screen top-[-29px] flex justify-center items-center absolute z-50 backdrop-blur-sm ">
      <form
        className="w-[25rem] h-[25rem] bg-white rounded-2xl p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-[2rem] font-semibold">Rate and Review </h1>
        <div className="mb-8">
          <div className="rating flex gap-2">
            <input
              type="radio"
              name="rating"
              value="1"
              className="mask mask-star-2 bg-orange-400"
              {...register("rating", { required: "Please select a rating" })}
            />
            <input
              type="radio"
              name="rating"
              value="2"
              className="mask mask-star-2 bg-orange-400"
              {...register("rating")}
            />
            <input
              type="radio"
              name="rating"
              value="3"
              className="mask mask-star-2 bg-orange-400"
              {...register("rating")}
              defaultChecked // Ensure the default 3-star rating is selected
            />
            <input
              type="radio"
              name="rating"
              value="4"
              className="mask mask-star-2 bg-orange-400"
              {...register("rating")}
            />
            <input
              type="radio"
              name="rating"
              value="5"
              className="mask mask-star-2 bg-orange-400"
              {...register("rating")}
            />
          </div>
          {errors.rating && (
            <p className="text-red-500 text-sm">{errors.rating.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            maxLength={maxChars}
            className="border-[1px] h-32 p-2"
            {...register("comment", {
              required: "Please provide your feedback",
              maxLength: {
                value: maxChars,
                message: `Feedback cannot exceed ${maxChars} characters`,
              },
            })}
            onChange={handleFeedbackChange}
          ></textarea>
          <div className="text-right text-sm text-gray-600">
            {feedbackCount}/{maxChars} characters
          </div>
          {errors.comment && (
            <p className="text-red-500 text-sm">{errors.comment.message}</p>
          )}
        </div>

        <div className="flex w-full justify-end gap-5 mt-10">
          <button type="submit" className="btn bg-blue-600 text-white">
            Save
          </button>
          <button
            type="button"
            className="btn"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
