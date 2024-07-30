"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./style.scss";

import ImageCarusel1 from "@/public/1.jpg";
import ImageCarusel2 from "@/public/2.jpg";
import ImageCarusel3 from "@/public/3.jpg";
import ImageCarusel4 from "@/public/4.jpg";

const Carousel = () => {
  const imgList = [
    ImageCarusel1,
    ImageCarusel2,
    ImageCarusel3,
    ImageCarusel4,
  ];

  return (
    <div className="w-full max-w-[1240px] h-[500px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true} // Enable infinite loop
        className="w-full h-full"
      >
        {imgList.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
            <div className="relative w-full h-full">
              <Image
                src={item}
                fill={true}
                alt="Carousel image"
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Carousel.displayName = "Carousel";
export default Carousel;
