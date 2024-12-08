import React, { useEffect } from "react";
import { ProductCard } from "../../components/user-components/ProductCard";
import { useFetch } from "../../hooks/useFetch";
import { SkeltonCard } from "../../components/user-components/SkeltonCard";

export const Product = () => {
  const [items, loading, error] = useFetch("/products/get-allProduct");

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="md:hidden">
        <section>
          {/* top */}

          <div className="flex">
            <input type="text" placeholder="search" className="border-2" />
            <div>filter</div>
          </div>
        </section>

        {/* products List */}

        <section>
          <div>wishlist</div>

          <div className="mt-5 flex-wrap flex">
            <div className="h-[200px] w-[150px] bg-slate-500"></div>
          </div>

          <h1>Name of the Products</h1>

          <div>
            <button>Add to cart </button>
          </div>
        </section>
      </main>

      <main className="hidden md:block h-screen">
        <section className="mt-28 2xl:container xl:container lg:container md:container mx-auto ">
          {/* category */}
          <div>
            <ul className="flex gap-10 w-full justify-center mb-16">
              <li>Fruits</li>
              <li>Veg</li>
              <li>Non veg</li>
              <li>flex</li>
            </ul>
          </div>

          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3">
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
