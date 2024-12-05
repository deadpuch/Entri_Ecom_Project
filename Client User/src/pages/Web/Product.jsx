import React from "react";
import { ProductCard } from "../../components/user-components/ProductCard";

export const Product = () => {
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

      <main className="hidden md:block">
        <section className="mt-28 2xl:container 2xl:mx-auto ">
          {/* category */}
          <div>
            <ul className="flex gap-10 w-full justify-center mb-16">
              <li>Fruits</li>
              <li>Veg</li>
              <li>Non veg</li>
              <li>flex</li>
            </ul>
          </div>

          <div className=" 2xl:columns-4 lg:columns-3 md:columns-3 gap-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
    </>
  );
};
