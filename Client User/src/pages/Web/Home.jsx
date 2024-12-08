import React, { useEffect, useState } from "react";
import { Top } from "../../components/user-components/Top";
import { NavLink, useNavigate } from "react-router-dom";
import { Adcarosal } from "../../components/user-components/Adcarosal";
import { LatestProductCard } from "../../components/user-components/LatestProductCard";
import { axiosInstance } from "../../config/axiosInstance";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../../components/user-components/ProductCard";
import { Footer } from "../../components/user-components/Footer";
import { Testimonial } from "../../components/user-components/Testimonial";

export const Home = () => {
  const navigate = useNavigate();

  const [Item, loading, error] = useFetch("/products/latestproducts");

  const handleProductNavigate = () => {
    navigate("/products");
  };

  return (
    <>
      <main className="md:hidden">
        <Top />

        {/* search */}
        <section className="mt-20 mx-4 flex justify-between">
          <div>
            <input
              type="text"
              className="border-2 rounded-lg p-1 w-[75vw]"
              placeholder="search"
            />
          </div>

          <div className="bg-black p-1 w-9  flex items-center justify-center rounded-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z"
                fill="#F9F9F9"
              />
            </svg>
          </div>
        </section>

        {/* advirtisment */}

        <Adcarosal />

        {/* cateogry */}
        <section className="mt-5 ps-4 overflow-x-scroll scrollbar-hide">
          <ul className="flex gap-2">
            <NavLink
              to="#"
              style={({ isActive }) => {
                isActive ? "active" : "";
              }}
            >
              {" "}
              <li className="text-sm ">Fruits</li>
            </NavLink>
            <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
              Vegitable
            </li>
            <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
              jwellery
            </li>
            <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
              Vegitable
            </li>
            <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
              jwellery
            </li>
            <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
              Vegitable
            </li>
            <li className="border-2 px-3 rounded-full flex items-center justify-center text-sm ">
              jwellery
            </li>
          </ul>
        </section>

        {/* latest products */}
        <h2 className="my-5 text-[0.9rem] mx-4">Latest</h2>

        <div className="scrollbar-hide flex overflow-scroll drop-shadow-md">
          {Item?.map((value) => (
            <LatestProductCard key={value._id} item={value} />
          ))}
        </div>

        {/* Top deals*/}

        <section>
          <div className="mt-5 mx-5 mb-16">
            <div className="w-full h-[200px] bg-slate-500 rounded-lg"></div>
          </div>
        </section>
      </main>

      <main className="hidden md:block">
        {/* Hero Section */}

        <section className="mx-5 h-[100vh]">
          <div className=" w-full h-[90vh] relative rounded-3xl overflow-hidden">
            <div className="bg-black h-full w-full absolute top-0 left-0 z-10 opacity-50 "></div>
            <img
              src="/IMG/Hero_Section.webp"
              className="w-full h-full block object-cover"
              alt=""
            />
            <div className=" flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20">
              <h1 className="flex text-center justify-center font-outFit font-bold text-[3rem] text-white">
                Lorem, ipsum dolor sit amet{" "}
              </h1>
              <p className="text-center text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem similique voluptatibus provident eveniet sunt enim in,
                atque rerum repellat. Repellat quis doloremque fugit quod odit
                adipisci, harum eaque veritatis voluptate?
              </p>
              <div className="flex gap-5">
                <button className="btn btn-outline w-32 mt-10 border-white text-white ">
                  {" "}
                  Contact Us
                </button>
                <button
                  className="btn w-32 mt-10 "
                  onClick={handleProductNavigate}
                >
                  {" "}
                  Product
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Box */}

        <section className="2xl:container xl:container  lg:container md:container mx-auto my-16 h-[100vh] ">
          <div className="w-full flex justify-center my-10">
            <h1 className="font-outFit font-bold text-[3rem] text-center">
              Discover Wellness with Ayurveda's Essence
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <div className="grid-container h-[80vh]  ">
              <div className="item_1  bg-[#F9FCE3] flex justify-center items-center">
                <h1 className="font-medium text-[clamp(12px,2vw,40px)] p-5">
                  Discover Balance <br /> with Ayurveda
                </h1>
              </div>

              <div className="item_2 bg-[#EBF8A1] p-5 flex justify-center items-center">
                {" "}
                <h1 className="text-[clamp(12px,2vw,40px)] font-outFit font-semibold">
                  CURE
                </h1>
              </div>
              <div className="item_3 bg-slate-400 overflow-hidden">
                <img
                  src="/IMG/01.webp"
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="item_4 bg-slate-400 overflow-hidden ">
                <img
                  src="/IMG/02.webp"
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="item_5 bg-slate-400 overflow-hidden">
                <img
                  src="/IMG/04.jpg"
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="item_6 bg-slate-400 overflow-hidden ">
                <img
                  src="/IMG/03.jpg"
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="item_7  flex justify-center items-center overflow-hidden">
                <h1 className="font-bold text-[clamp(12px,2vw,40px)] text-white">
                  FEEL THE NATURE
                </h1>
              </div>
              <div className="item_8 bg-[#EBF8A1] p-5 flex justify-center items-center">
                <h1 className="text-[clamp(12px,2vw,40px)] font-outFit font-semibold">
                  1 vision
                </h1>
              </div>
              <div className="item_9 bg-slate-400 overflow-hidden">
                <img
                  src="/IMG/sara.jpg"
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skin Products */}

        <section className="2xl:container 2xl:mx-auto my-10 mx-4">
          <h1 className="font-Edu text-[1.5rem] mb-5">Care For Skin</h1>

          <div className="2xl:columns-4 md:columns-4 gap-4 ">
            {[...Array(4)].map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </section>

        {/* Testominaial */}

        <section className="w-full py-10 h-[100vh] bg-[#fefae0] mb-5">
          <div className="w-full flex justify-center flex-col">
            <h1 className="w-full flex justify-center font-outFit font-bold text-[3rem] ">
              What our customer say!
            </h1>

            <p className="text-center mx-5 px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est{" "}
              <br />
              fuga tempore vero quisquam,quos quia velit officiis voluptatem{" "}
              <br />
            </p>
          </div>
          <div className=" 2xl:container  2xl:mx-auto items-center h-full w-full gap-4  grid grid-cols-3">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </section>
      </main>
    </>
  );
};
