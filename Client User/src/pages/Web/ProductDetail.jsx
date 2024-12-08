import {
  ChevronLeft,
  Link,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { ProductImgCard } from "../../components/user-components/ProductImgCard";
import { Testimonial } from "../../components/user-components/Testimonial";
import { SingleProductSkeleton } from "./SingleProductSkeleton";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { RateReview } from "../../components/user-components/RateReview";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProduct, loading, error] = useFetch(
    `/products/product-details/${id}`
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [mainImage, setMainImage] = useState(singleProduct?.productImage[0]);
  const [count, setCount] = useState(1);
  const [showRateReview, setShowRateReview] = useState(false);

  const [testmonial] = useFetch(`/user/review//product-review/${id}`);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    if (singleProduct?.productImage?.length > 0) {
      setMainImage(singleProduct.productImage[0]); // Set the first image as default
    }
  }, [singleProduct]);

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance({
        url: `/cart/addItems/${id}`,
        method: "POST",
        data,
      });

      toast.success("product added to cart");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      navigate("/login");
    }
  };

  const handleAddFeedbackClick = () => {
    setShowRateReview(true); // Show RateReview component
  };

  const handleCancel = () => {
    setShowRateReview(false); // Hide RateReview component
  };

  return (
    <>
      <main className="relative md:hidden">
        {/* Top */}
        <div className=" flex fixed top-0 bg-white w-full justify-between drop-shadow-sm px-4 p-2 z-20">
          <div className="flex">
            <ChevronLeft onClick={() => navigate("/")} />
            <h2 className="ms-3">{singleProduct?.productName}</h2>
          </div>

          <div>
            <ShoppingBag />
          </div>
        </div>

        {/* Card section */}

        <ProductImgCard img={singleProduct} />

        <section className=" h-auto mx-4">
          <div className=" w-full flex flex-col items-center ">
            <div className="w-full flex justify-between mt-5 ">
              <h1 className="font-outFit font-bold text-lg">
                {singleProduct?.productName}
              </h1>
              <div className="flex gap-2 p-1 px-2 bg-white border-1 rounded-full drop-shadow-md ">
                {" "}
                <Star fill={"#ffc800"} stroke="0" />
                4.7
              </div>
            </div>

            <div className="w-full h-[60vh] ">
              <h1 className="mt-4">Description</h1>
              <p className="mt-2 text-sm ">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                velit, neque maxime omnis tenetur modi optio placeat ad quaerat
                harum corporis impedit consectetur? Officiis pariatur iste
                maxime, at corrupti deleniti.
                {/* {singleProduct?.productDescription} */}
              </p>
            </div>
          </div>
        </section>

        <div className="fixed bottom-0 mb-10 w-full px-4  h-auto pt-8 bg-[#f4f4f4] rounded-t-3xl">
          <div>
            <div className="flex justify-between mb-4 ">
              <div>Quantity</div>
              <div>{`Total : ₹ ${singleProduct?.price}`}</div>
            </div>

            <button className="w-[100%] btn bg-green-300 mb-4">
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <main className="hidden md:block">
        {/* main */}
        <section className="h-[100vh] items-center flex justify-center 2xl:container xl:container lg:container md:container mx-auto">
          {loading ? (
            <SingleProductSkeleton />
          ) : (
            <>
              {/* side img */}
              <div>
                <div className="flex h-[30rem] mx-4">
                  <div className="gap-5 overflow-y-scroll scrollbar-hide">
                    {singleProduct?.productImage.map((value, index) => (
                      <div
                        key={index}
                        className="bg-black h-[80px] w-[80px] rounded-2xl my-4 overflow-hidden border-none drop-shadow-md cursor-pointer"
                        onMouseEnter={() => setMainImage(value)} // Update main image on hover
                      >
                        <img
                          src={value}
                          alt=""
                          className="block w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* main img */}
                  <div className="h-[30rem] w-[30rem] bg-red-500 ms-5 rounded-2xl overflow-hidden drop-shadow-md">
                    <img
                      src={mainImage}
                      alt="Main Product"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="mx-4 h-[30rem] flex flex-col justify-between  ">
                <div>
                  <h1 className="font-semibold text-2xl mb-2">
                    {singleProduct?.productName}
                  </h1>
                  <h1 className="font-semibold font-outFit text-lg mb-1">
                    INR:{singleProduct?.price} ₹
                  </h1>
                  <div className="flex w-20">
                    {Array.from({ length: 5 }, () => (
                      <Star fill="#111" strokeWidth={0} />
                    ))}
                  </div>

                  <div className="w-[8rem] flex justify-between px-2 py-2 rounded-full border-2 my-5 me-3  ">
                    <div
                      onClick={() => count > 1 && setCount(count - 1)}
                      className=" cursor-pointer"
                    >
                      <Minus />
                    </div>

                    <span>{count}</span>
                    <div
                      onClick={() => setCount(count + 1)}
                      className=" cursor-pointer"
                    >
                      <Plus />
                    </div>
                  </div>

                  <div>
                    <h1 className="font-semibold text-md my-2">Description</h1>
                    <p className="text-sm text-gray-400">
                      {singleProduct?.productDescription}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="hidden"
                    value={singleProduct?.price || 0}
                    {...register("price")}
                  />
                  <input
                    type="hidden"
                    value={count}
                    {...register("quantity")}
                  />
                  <div className="my-4">
                    <button className="btn w-full mb-4" type="submit">
                      Add to Bag
                    </button>
                    <div className="btn bg-red-400 w-full">
                      Add to Favourate
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </section>

        {/* Testimonial */}
        <section className="w-full py-10 h-[100vh] bg-[#fefae0] relative">
          <div className="2xl:container mx-auto">
            <div className="w-full flex justify-center flex-col ">
              <h1 className="w-full flex justify-center font-outFit font-bold text-[3rem] ">
                What our customer say!
              </h1>

              <p className="text-center mx-5 px-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                est fuga tempore vero quisquam, quos quia velit officiis
                voluptatem corrupti libero laboriosam iste doloribus ipsam
                consectetur alias maiores nulla cum.
              </p>
            </div>

            <div className=" w-full flex justify-end">
              <button className="btn" onClick={handleAddFeedbackClick}>
                Add Your FeedBack
              </button>
            </div>
            {showRateReview && <RateReview onCancel={handleCancel} />}
            <div className="flex items-center gap-5 h-full w-full justify-center mt-10">
              {testmonial?.map((value) => (
                <Testimonial data={value} key={value._id} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
