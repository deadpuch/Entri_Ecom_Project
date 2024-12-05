import { ChevronLeft, Link, ShoppingBag, Star } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { ProductImgCard } from "../../components/user-components/ProductImgCard";
import { Testimonial } from "../../components/user-components/Testimonial";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProduct] = useFetch(`/products/product-details/${id}`);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

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
        <section className="h-[100vh] items-center flex w-full justify-center">
          <div>
            {/* side img */}
            <div className="flex h-[500px] mx-4 ">
              <div className=" gap-5  overflow-y-scroll scrollbar-hide">
                <div className="bg-black h-[80px] w-[80px] rounded-2xl my-4"></div>
                <div className="bg-black h-[80px] w-[80px] rounded-2xl my-4"></div>
                <div className="bg-black h-[80px] w-[80px] rounded-2xl my-4"></div>
                <div className="bg-black h-[80px] w-[80px] rounded-2xl my-4"></div>
                <div className="bg-black h-[80px] w-[80px] rounded-2xl my-4"></div>
                <div className="bg-black h-[80px] w-[80px] rounded-2xl my-4"></div>
                <div className="bg-black h-[80px] w-[80px] rounded-2xl my-4"></div>
                <div className="bg-black h-[80px] w-[80px] rounded-2xl my-4"></div>
              </div>
              {/* main img */}
              <div className="h-[500px] w-[400px] bg-red-500 ms-5 rounded-2xl">
                <img src="" alt="" />
              </div>
            </div>
          </div>

          <div className="mx-4 max-w-[500px] h-[500px] flex flex-col justify-between  ">
            <div>
              <h1>product Name</h1>
              <h1>INR:1100 ₹</h1>
              <h1>Review</h1>
              <div>
                <h1>Description</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi possimus nulla beatae deleniti iste autem mollitia ut
                  quia ab ad quaerat, provident eveniet labore recusandae et at
                  totam. Veritatis, reprehenderit?
                </p>
              </div>
            </div>

            <div className="my-4">
              <button className="btn w-full mb-4">Add to Bag</button>
              <button className="btn bg-red-400 w-full">
                Add to Favourate
              </button>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full py-10 h-[100vh] bg-[#fefae0]">
          <div className="w-full flex justify-center flex-col">
            <h1 className="w-full flex justify-center font-outFit font-bold text-[3rem] ">
              What our customer say!
            </h1>

            <p className="text-center mx-5 px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est
              fuga tempore vero quisquam, quos quia velit officiis voluptatem
              corrupti libero laboriosam iste doloribus ipsam consectetur alias
              maiores nulla cum.
            </p>
          </div>

          <div className=" w-full flex justify-end">
            <button className="btn">Add Your FeedBack</button>
          </div>
          <div className="flex items-center h-full w-full justify-center">
            <Testimonial />
          </div>
        </section>
      </main>
    </>
  );
};
