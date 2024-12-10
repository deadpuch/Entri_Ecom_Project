import React, { useEffect } from "react";
import { ProductCard } from "../../components/user-components/Web/ProductCard";
import { useFetch } from "../../hooks/useFetch";
import { SkeltonCard } from "../../components/user-components/Web/SkeltonCard";
import { ChevronLeft, Link, Search, SlidersHorizontal } from "lucide-react";
import { MobileProductCard } from "../../components/user-components/Mobile Components/MobileProductCard";
import { CateogaryList } from "../../components/user-components/Mobile Components/CateogaryList";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const [items, loading] = useFetch("/products/get-allProduct");
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };


  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="md:hidden">
        <div className="flex w-full justify-between fixed z-10 bg-white py-4 px-4">
          <div onClick={handleBack}>
            <ChevronLeft color="#000000" />
          </div>
          <div className="flex gap-5">
            <Search color="#000000" />
            <SlidersHorizontal color="#000000" />
          </div>
        </div>
        <section className="h-auto pt-10 pb-16 mx-4 ">
          <div className="w-full flex justify-center my-5">
            <div className="cursor-pointer">
              <CateogaryList />
            </div>
          </div>

          <div className="apigridChange grid grid-cols-1 xs:grid-cols-3 xxs:grid-cols-2 gap-5">
            {loading ? (
              Array.from({ length: items?.length }, () => <SkeltonCard />)
            ) : (
              <>
                {items?.map((value, index) => (
                  <MobileProductCard data={value} key={index} />
                ))}
              </>
            )}
          </div>
        </section>
      </main>

      <main className="hidden md:block h-screen pt-20">
        <section className="md:container mx-auto ">
          {/* category */}
          <div className="my-10">
            <CateogaryList />
          </div>

          <div className=" grid grid-cols-3 xl:grid-cols-4 gap-3">
            {loading ? (
              Array.from({ length: items?.length }, () => <SkeltonCard />)
            ) : (
              <>
                {items?.map((value, index) => (
                  <ProductCard data={value} key={index} />
                ))}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};
