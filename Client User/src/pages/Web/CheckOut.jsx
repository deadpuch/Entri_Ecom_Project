import React, { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { loadStripe } from "@stripe/stripe-js";
import { Link, useNavigate, useParams } from "react-router-dom";

export const CheckOut = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [cartData] = useFetch("/cart/showItems");
  const [addressData] = useFetch("/user/get-address");

  const adminId =cartData?.[0]?.products?.[0]?.productId?.admin_data 
  const sellerId= cartData?.[0]?.products?.[0]?.productId?.seller_data;
   
   

  const userId = cartData?.[0]?.userId;

  useEffect(() => {
    setValue("Mobile", addressData?.[0]?.Mobile);
    setValue("Address", addressData?.[0]?.Address);
    setValue("Name", addressData?.[0]?.Name);
    setValue("Country", addressData?.[0]?.Country);
    setValue("City", addressData?.[0]?.City);
    setValue("City", addressData?.[0]?.City);
    setValue("Zip", addressData?.[0]?.Zip);
    setValue("State", addressData?.[0]?.State);
  }, [addressData]);

  const onSubmit = async (data) => {
    try {
      // Step 1: Add Shipping Address
      const addressResponse = await axiosInstance({
        url: "/user/add-address",
        method: "POST",
        data,
        cartData,
      });
      toast.success("Address Added");

      // Step 2: Create Stripe Checkout Session
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_Publishable_key
      );
      const session = await axiosInstance({
        url: "/payment/create-checkout-session",
        method: "POST",
        data: {
          products: cartData?.[0]?.products,
          userId: userId,
          sellerId: sellerId,
          adminId:adminId
        },
      });

      if (session?.data?.sessionId) {
        // Step 3: Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
          sessionId: session?.data?.sessionId,
        });

        if (result.error) {
          toast.error(result.error.message);
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
      console.error(error);
    }
  };

  return (
    <section className="md:h-screen md:justify-center md:w-[40vw] md:container md:mx-auto md:pt-20 h-auto flex-col flex pt-5 mx-4">
      <div className="md:hidden flex items-center">
        <Link to="/cart">
          <ChevronLeft />
        </Link>
        <h2 className="ms-3 font-semibold text-2xl">Checkout</h2>
      </div>

      {/* progress bar */}
      <div className=" w-full flex flex-col items-center justify-center mt-5 mb-10">
        <div className="flex">
          <div className="flex items-center">
            <div className="h-[15px] w-[15px] rounded-full bg-black" />
            <div className="border-t-[1px] border-black w-[5rem] h-0" />
          </div>
          <div className="flex items-center">
            <div className="h-[15px] w-[15px] rounded-full border-[1px] border-black" />
            <div className="border-t-[1px] border-black w-[5rem] h-0" />
          </div>
          <div className="flex items-center">
            <div className="h-[15px] w-[15px] rounded-full border-[1px] border-black" />
          </div>
        </div>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="my-8">
            <input
              type="Number"
              className={`border-b-[1px] border-gray-300  flex w-full ${
                errors.Mobile ? "input-error" : ""
              }`}
              {...register("Mobile", {
                required: "Mobile number Required",
              })}
              placeholder="Mobile"
            />
            {errors.Mobile && (
              <span className="text-red-500 text-sm mt-1">
                {errors?.Mobile?.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              className={`border-b-[1px] border-gray-300  flex w-full ${
                errors.Name ? "input-error" : ""
              }`}
              {...register("Name", {
                required: "Name Required",
              })}
              placeholder="Name"
            />
            {errors.Mobile && (
              <span className="text-red-500 text-sm mt-1">
                {errors?.Name?.message}
              </span>
            )}
          </div>

          <div className="my-8">
            <input
              type="text"
              className={`border-b-[1px] border-gray-300  flex w-full ${
                errors.Address ? "input-error" : ""
              }`}
              {...register("Address", {
                required: "Address Required",
              })}
              placeholder="Address"
            />
            {errors.Mobile && (
              <span className="text-red-500 text-sm mt-1">
                {errors?.Address?.message}
              </span>
            )}
          </div>

          <div className="flex gap-5 mb-10">
            <div className="w-full">
              <input
                type="text"
                className={`border-b-[1px] border-gray-300  flex w-full ${
                  errors.Country ? "input-error" : ""
                }`}
                {...register("Country", {
                  required: "Country Required",
                })}
                placeholder="Country"
              />
              {errors.Country && (
                <span className="text-red-500 text-sm mt-1">
                  {errors?.Country?.message}
                </span>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                className={`border-b-[1px] border-gray-300  flex w-full ${
                  errors.State ? "input-error" : ""
                }`}
                {...register("State", {
                  required: "State Required",
                })}
                placeholder="State"
              />
              {errors.State && (
                <span className="text-red-500 text-sm mt-1">
                  {errors?.State?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full">
              <input
                type="text"
                className={`border-b-[1px] border-gray-300  flex w-full ${
                  errors.City ? "input-error" : ""
                }`}
                {...register("City", {
                  required: "City Required",
                })}
                placeholder="City"
              />
              {errors.City && (
                <span className="text-red-500 text-sm mt-1">
                  {errors?.City?.message}
                </span>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                className={`border-b-[1px] border-gray-300  flex w-full ${
                  errors.Zip ? "input-error" : ""
                }`}
                {...register("Zip", {
                  required: "Zip code Required",
                })}
                placeholder="Zip code"
              />
              {errors.Zip && (
                <span className="text-red-500 text-sm mt-1">
                  {errors?.Zip?.message}
                </span>
              )}
            </div>
          </div>

          <button
            className="btn w-full bg-black text-white my-20 "
            type="submit"
          >
            NEXT
          </button>
        </div>
      </form>
    </section>
  );
};
