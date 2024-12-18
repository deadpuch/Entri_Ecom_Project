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
import { ProductImgCard } from "../../components/user-components/Web/ProductImgCard";
import { Testimonial } from "../../components/user-components/Web/Testimonial";
import { SingleProductSkeleton } from "./SingleProductSkeleton";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";
import { RateReview } from "../../components/user-components/Web/RateReview";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProduct, loading, error] = useFetch(
    `/products/product-details/${id}`
  );
  const [testmonial] = useFetch(`/user/review/product-review/${id}`);

  const [mainImage, setMainImage] = useState(null);
  const [count, setCount] = useState(1);
  const [showRateReview, setShowRateReview] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    if (singleProduct?.productImage?.length > 0) {
      setMainImage(singleProduct?.productImage?.[0]?.[0]);
    }
  }, [singleProduct]);

  const handleWishlist = async () => {
    try {
      const response = await axiosInstance({
        url: "/user/wishlist/add",
        method: "POST",
        data: { productId: singleProduct?._id },
      });
      toast.success("Product added to wishlist");
    } catch (error) {
      console.log(error);
      toast.error("please Login");
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axiosInstance({
        url: `/cart/addItems/${id}`,
        method: "POST",
        data: {
          quantity: parseInt(count),
          price: singleProduct?.price,
        },
      });

      toast.success("product added to cart");
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
      <main className="relative h-auto pt-6 pb-52 md:hidden">
        {/* Top */}
        <div className="flex top-0 w-full justify-between fixed z-10 bg-white py-4 px-4">
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

            <div className="w-full ">
              <h1 className="mt-4 text-gray-700 font-semibold">Description</h1>
              <p className="mt-2 text-sm  text-gray-500">
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

        <div className="fixed bottom-0 pb-10 w-full px-4  h-auto pt-8 bg-[#f4f4f4] rounded-t-3xl">
          <div>
            <div className="flex justify-between items-center mb-4 ">
              <div className="w-[8rem] flex justify-between px-2 py-2 rounded-full border-2   ">
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
              <div className="font-semibold font-outFit text-[1.2rem]">{`Total : ₹ ${singleProduct?.price}`}</div>
            </div>

            <button
              className="w-[100%] btn bg-green-300 mb-6"
              onClick={handleAdd}
            >
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
                    {singleProduct?.productImage?.[0]?.map((value, index) => (
                      <div
                        key={index}
                        className="bg-black h-[80px] w-[80px] rounded-2xl my-4 overflow-hidden border-none drop-shadow-md cursor-pointer"
                        onMouseEnter={() => setMainImage(value)} // Update main image on hover
                      >
                        <img
                          src={
                            value ||
                            "https://res.cloudinary.com/dcojdq9rw/image/upload/v1733554359/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz_sk5xvo.jpg"
                          }
                          alt="products"
                          className="block w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* main img */}

                  <div className="h-[30rem] w-[30rem] bg-red-500 ms-5 rounded-2xl overflow-hidden drop-shadow-md">
                    <img
                      src={
                        mainImage ||
                        "https://res.cloudinary.com/dcojdq9rw/image/upload/v1733554359/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz_sk5xvo.jpg"
                      }
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
                    {Array.from({ length: 5 }, (key) => (
                      <Star fill="#111" />
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

                {/* <input
                    type="hidden"
                    value={singleProduct?.price || 0}
                    {...register("price")}
                  /> */}

                <div className="my-4">
                  <button className="btn w-full mb-4" onClick={handleAdd}>
                    Add to Bag
                  </button>
                  <div
                    className="btn bg-red-400 w-full"
                    onClick={handleWishlist}
                  >
                    Add to Favourate
                  </div>
                </div>
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
