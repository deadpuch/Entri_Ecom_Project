import { Mail, Instagram, Facebook, Youtube } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="hidden md:block ">
      {/* mail listing */}
      <section className="bg-[#F9FCE4]">
        <div className="2xl:container xl:grid lg:grid md:grid mx-auto grid grid-cols-3 p-4">
          <div>
            <h1 className="font-semibold mb-2">JOIN OUR MAILING LIST</h1>
            <p className="text-sm">
              Subscribe to get special offers, for giveaways, and
              once-in-a-lifetime deals.
            </p>
          </div>

          <div className="flex justify-center items-center ">
            <div>
              <div className="relative ">
                <input
                  type="text"
                  placeholder="email"
                  className="w-[300px] px-3 py-1 rounded-full"
                />
                <div className="absolute right-0 top-0 p-1 px-3">
                  <Mail />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <Instagram />
            <Facebook />
            <Youtube />
          </div>
        </div>
      </section>

      {/* Main footer */}

      <section className="bg-[#478E6E]">
        <div className="2xl:container 2xl:mx-auto grid grid-cols-4 p-5 items-start ">
          <div>
            <div className="w-[100px] mb-2">
              <img src="/PNG/LOGO .png" alt="" className="w-full block " />
            </div>

            <div>
              <p className="text-white">
                SRM PHARMA: A GMP-certified Ayurveda pharmacy from Kerala,
                harmonizing ancient wisdom with modern advancements for enhanced
                well-being. Experience authentic herbal goodness.
              </p>
            </div>
          </div>

          <div className="flex justify-start flex-col ms-10 ">
            <h1 className="text-lg font-medium text-[#F9FCE4]">Quick Links</h1>

            <ul className="text-white mt-5"> 
              <li>Home</li>
              <li>Product</li>
              <li>About</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Become a Seller</li>
            </ul>
          </div>

          <div className="text-lg font-medium text-[#F9FCE4]">Contact us</div>

          <div className="text-lg font-medium text-[#F9FCE4]">Email Us</div>
        </div>
      </section>
    </footer>
  );
};
