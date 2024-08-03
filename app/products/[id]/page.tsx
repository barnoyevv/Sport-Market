"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { getProductId } from "@/service/products.service";
import { useParams } from "next/navigation";
import { CircularProgress } from "@mui/material";
import Basket from "@/public/basket.svg";
import Options from "@/public/options.svg";
import Share from "@/public/share.svg";

interface ProductData {
  image_url: string[];
  product_name: string;
  description: string;
  count: number;
  made_in: string;
  cost: number;
}

const Loading = () => (
  <div
    className="loading-container"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <CircularProgress />
  </div>
);

const ProductImages: React.FC<{ images: string[] }> = ({ images }) => (
  <>
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full rounded-xl overflow-hidden"
      modules={[Navigation, Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={image}
            alt={`Product image ${index + 1}`}
            width={370}
            height={370}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="flex gap-2 mt-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-20 h-20 bg-white p-2 border-2 border-yellow-500 rounded-lg overflow-hidden"
        >
          <Image
            src={image}
            alt={`Thumbnail image ${index + 1}`}
            className="w-full h-full object-cover"
            width={370}
            height={370}
            priority
          />
        </div>
      ))}
    </div>
  </>
);

const Index = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<ProductData | null>(null);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await getProductId(id);
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (!products) {
    return <Loading />;
  }

  const { image_url, product_name, description, count, made_in, cost } = products;

  return (
    <div className="p-4 md:p-8 bg-gray-100">
      <div className="container">
        <div className="flex flex-col w-full md:flex-row gap-8 p-6 rounded-lg bg-white">
          <div className="md:w-1/2">
            <ProductImages images={image_url} />
          </div>
          <div className="md:w-1/2 md:p-8 p-2 bg-white">
            <h2 className="text-[32px] font-medium text-[#1F1D14] uppercase">{product_name}</h2>
            <p className="mt-2 text-[#1F1D14]">{description}</p>
            <p className="mt-6 text-[#1F1D14]">В наличии: {count} шт.</p>
            <p className="mt-2 text-[#1F1D14]">Страна производитель: {made_in}</p>
            <p className="mt-[40px] text-[#1F1D14] text-[24px] font-medium">{cost} UZS / 1 шт.</p>
            <div className="flex gap-4 mt-[30px]">
              <button className="flex items-center gap-[4px] px-5 py-3 bg-yellow-400 text-[#1F1D14] rounded-md">
                <Image src={Basket} alt="Add to Basket" />
                Корзина
              </button>
              <button className="flex items-center gap-[4px] px-5 py-3 border-2 border-yellow-400 text-[#1F1D14] rounded-md">
                <Image src={Options} alt="Compare Options" />
                Сравнить
              </button>
            </div>
            <div className="mt-[30px]">
              <button className="flex items-center gap-[4px] text-[#1F1D14] px-4 py-2 hover:bg-[#F2F2F2] rounded-lg">
                <Image src={Share} alt="Share Product" />
                Поделиться
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 container">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h2 className="text-[32px] font-medium text-[#000] mb-4">Описание</h2>
              <h4 className="text-[24px] font-medium text-[#1F1D14] mb-4">
                {product_name}
              </h4>
              <p className="text-[16px] text-[#000] font-normal mb-5">
                {description}
              </p>
              <ul className="flex w-full flex-wrap gap-4">
                <li className="w-1/2">
                  <h3 className="text-[20px] font-medium text-[#1F1D14]">Вес гантела:</h3>
                  <p className="text-[#1F1D14] text-[16px]">5кг</p>
                </li>
                <li className="w-1/2">
                  <h3 className="text-[20px] font-medium text-[#1F1D14]">Цвета:</h3>
                  <p className="text-[#1F1D14] text-[16px]">Синий, Красный</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h2 className="text-[32px] font-medium text-[#000] mb-4">Отзывы</h2>
              <div className="flex gap-4">
                <div>
                  <Image src="/avatar.svg" alt="User avatar" width={50} height={50} />
                </div>
                <div>
                  <p className="text-[20px] text-[#1F1D14] font-medium">Шахзод Анаров</p>
                  <p className="text-[16px] text-[#1F1D14] font-normal opacity-60">Клиент</p>
                  <p className="text-[16px] text-[#000] font-normal">
                    В составе томатов в большом количестве содержатся сахары,
                    ликопин, пектин, бетакаротин, витамины.
                  </p>
                  <div className="flex">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-400">★</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[16px] text-[#1F1D14] font-normal opacity-60 flex justify-end">
                Все отзывы
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
