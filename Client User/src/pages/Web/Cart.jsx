import { ChevronLeft, Minus, Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../components/user-components/Web/CartItem";
import { useFetch } from "../../hooks/useFetch";
import { MobCartListCard } from "../../components/user-components/Mobile Components/MobCartListCard";

export const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, loading, error, setData, setQuerry] =
    useFetch("/cart/showItems");

  const cardLoop = cartItems?.[0]?.products;

  const handleCheckout = async () => {
    navigate("/checkout");
  };

  return (
    <>
      <main className="md:hidden h-auto pb-16 pt-12">
        {/* top */}
        <div className="flex px-4 top-0 w-full justify-between fixed z-20 bg-white py-4 ">
          <div className="flex">
            <ChevronLeft onClick={() => navigate("/products")} />
            <h2 className="ms-3">Cart</h2>
          </div>
        </div>
        {cardLoop?.map((value) => (
          <MobCartListCard data={value} key={value._id} setData={setQuerry} />
        ))}

        <div className="mx-4 border-t-2 pt-3 flex justify-between items-center mb-4">
          <h1>Total Order Amount</h1>
          <h1 className="font-outFit text-xl font-semibold">
            ₹ {cartItems?.[0]?.totalPrice}
          </h1>
        </div>

        <div className="mx-4">
          <button
            className="btn w-full bg-black text-white"
            onClick={handleCheckout}
          >
            Procced to Checkout{" "}
          </button>
        </div>
      </main>

      <main className="hidden md:block h-[100vh] mt-28">
        <section className="flex justify-center">
          <div className=" w-[70vw]">
            <div className="cart_grid">
              <div>
                <h1 className="font-semibold text-[2rem]">Bag</h1>

                <div className="scrollbar_change h-[80vh] overflow-y-scroll ">
                  {cardLoop?.map((value) => (
                    <CartItem
                      data={value}
                      key={value._id}
                      setData={setQuerry}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-[2rem] font-semibold mb-10">Summary</h1>

                <div className="border-b-2">
                  <div className=" flex  justify-between mb-3">
                    <h1>subtotal</h1>
                    <h1>₹{cartItems?.[0]?.totalPrice}</h1>
                  </div>

                  <div className=" flex  justify-between mb-6">
                    <h1>Estimated Delivery & Handling</h1>
                    <h1>free</h1>
                  </div>
                </div>

                <div>
                  <div>
                    <div className="h-[4rem] mb-10 items-center border-b-2 flex  justify-between">
                      <h1 className="font-semibold text-[1.5em]">Total</h1>
                      <h1 className="font-semibold text-[1.5em] font-outFit">
                        ₹{cartItems?.[0]?.totalPrice}
                      </h1>
                    </div>
                    <button className="btn w-full" onClick={handleCheckout}>
                      Check Out
                    </button>
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
