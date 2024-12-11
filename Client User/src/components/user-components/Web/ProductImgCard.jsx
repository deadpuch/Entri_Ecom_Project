import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carosal.css";

export const ProductImgCard = ({ img }) => {
  const arrayImg = img?.productImage?.[0];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
    >
      {arrayImg?.map((value) => (
        <SwiperSlide>
          <div className="w-auto h-[300px] overflow-hidden rounded-2xl drop-shadow-md aspect-[16/9] mt-4">
            <img
              src={value}
              alt=""
              className="w-full h-full object-cover block "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
