import React from "react";
import { Top } from "../../components/user-components/Web/Top";
import { useNavigate } from "react-router-dom";
import { Adcarosal } from "../../components/user-components/Web/Adcarosal";
import { LatestProductCard } from "../../components/user-components/Web/LatestProductCard";
import { useFetch } from "../../hooks/useFetch";
import { TesmonialFront } from "../../components/user-components/Web/TesmonialFront";
import { Search } from "lucide-react";
import { LatesSkele } from "../../components/skeleton/LatesSkele";
import { LatestCard } from "../../components/user-components/Web/LatestCard";
import { MobileProductSekel } from "../../components/skeleton/MobileProductSekel";

export const Home = () => {
  const navigate = useNavigate();

  const [Item, loading, error] = useFetch("/products/latestproducts");

  const handleProductNavigate = () => {
    navigate("/products");
  };

  return (
    <>
      <main className="md:hidden h-auto pb-16">
        <Top />

        {/* search */}
        <section className="mt-20 px-4 mx-4 flex justify-center">
          <div className="flex gap-5">
            <div>
              <input
                type="text"
                className="border-2 rounded-lg p-1 w-[75vw]"
                placeholder="search"
              />
            </div>

            <div className="bg-black p-1 w-9  flex items-center justify-center rounded-lg">
              <Search color="#ffffff" />
            </div>
          </div>
        </section>

        {/* advirtisment */}

        <Adcarosal />

        {/* cateogry */}
        <section className="mt-5 ps-4 overflow-x-scroll scrollbar-hide">
          <ul className="flex gap-5">
            <li>ALL</li>
            <li>FRUITS</li>
            <li>VEGITABLES</li>
          </ul>
        </section>

        {/* latest products */}
        <h2 className="my-5 text-[0.9rem] mx-4">latest Product</h2>

        <div className="scrollbar-hide flex overflow-scroll ">
          {loading
            ? Array.from({ length: 8 },() => <MobileProductSekel />)
              
            : Item?.map((value) => (
                <LatestProductCard key={value._id} item={value} />
              ))}
        </div>
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

        <section className="md:container mx-auto my-16 h-[100vh] ">
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

        <section className="md:container mx-auto my-10  ">
          <h1 className="font-Edu text-[1.5rem] mb-5">Latest products</h1>

          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 justify-items-center">
            {loading
              ? Array.from({ length: 8 },() => <LatesSkele/>)
              : Item?.map((value) => (
                  <LatestCard key={value._id} data={value} />
                ))}

            {}
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
          <div className="md:container mx-auto items-center h-full w-full gap-4  grid grid-cols-3">
            <TesmonialFront />
            <TesmonialFront />
            <TesmonialFront />
          </div>
        </section>
      </main>
    </>
  );
};
