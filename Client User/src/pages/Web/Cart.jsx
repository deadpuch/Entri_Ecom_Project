import { ChevronLeft, Minus, Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../components/user-components/CartItem";
import { useFetch } from "../../hooks/useFetch";

export const Cart = () => {
  const navigate = useNavigate();
  const [cartItems,loading]=useFetch("")

  return (
    <>
      <main className="md:hidden">
        <div className=" flex fixed top-0 bg-white w-full justify-between drop-shadow-sm px-4 p-2 z-20">
          <div className="flex">
            <ChevronLeft onClick={() => navigate("/")} />
            <h2 className="ms-3">Cart</h2>
          </div>
        </div>

        <section className="mx-4 mt-16">
          <div className="flex my-4 justify-between">
            <div className="flex">
              <div className="bg-black h-[100px] w-[100px]">
                <img src="" alt="" />
              </div>
              <div>
                <h1>product name</h1>
                <h1>Price</h1>
              </div>
            </div>

            {/* Qunatity */}

            <div className="flex">
              <div>
                <Plus />
              </div>
              <input className="w-[20px] h-[20px] border-2" type="number" />
              <div>
                <Minus />
              </div>
            </div>
          </div>

          <div className="border-t-2 pt-3 flex justify-between">
            <h1>Total Order Amount</h1>
            <h1>₹100</h1>
          </div>

          <button className="btn w-full">Procced to Checkout </button>
        </section>
      </main>

      <main className="hidden md:block h-[100vh] mt-28">
        <section className="flex justify-center">
          <div className=" w-[70vw]">
            <div className="cart_grid">
              <div>
                <h1 className="font-semibold text-[2rem]">Bag</h1>

                <div className="scrollbar_change h-[80vh] overflow-y-scroll ">
                  <CartItem />
                </div>
              </div>
              <div>
                <h1 className="text-[2rem] font-semibold mb-10">Summary</h1>

                <div className="border-b-2">
                  <div className=" flex  justify-between mb-3">
                    <h1>subtotal</h1>
                    <h1>₹100</h1>
                  </div>

                  <div className=" flex  justify-between mb-6">
                    <h1>Estimated Delivery & Handling</h1>
                    <h1>₹100</h1>
                  </div>
                </div>

                <div>
                  <div>
                    <div className="h-[4rem] mb-10 items-center border-b-2 flex  justify-between">
                      <h1 className="font-semibold text-[1.5em]">Total</h1>
                      <h1 className="font-semibold text-[1.5em]">₹100</h1>
                    </div>
                    <button className="btn w-full">Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
