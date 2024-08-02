'use client';

import React from 'react';
import Image from 'next/image';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Carousel from "@/components/carousel/carousel";
import Catalog from "@/components/catalog/catalog";
import ProductsCard from "@/components/cards/products-card";
import AdventagesCard from "@/components/cards/pros-card";
import usefulImg from "@/public/useful.png";

export default function Home() {

  return (
    <div>
      <div className="px-2 py-[40px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <Carousel />
      </div>
      <div className="flex flex-col items-center sm:items-start w-full gap-[10px] sm:gap-[20px] px-2 py-[20px] bg-[#fff] sm:px-5 lg:px-24 xl:px-30">
        <h2 className='text-[20px] text-[#1F1D14] font-medium'>Катаолог</h2>
        <Catalog />
      </div>
      <div className="flex flex-col items-center sm:items-start w-full gap-[10px] sm:gap-[20px] px-2 pt-[50px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <div className='flex justify-between w-full items-center'>
          <h2 className='text-[32px] text-[#1F1D14] font-medium'>Акция</h2>
        </div>
        <ProductsCard />
      </div>
      <div className="flex flex-col items-center sm:items-start w-full gap-[10px] sm:gap-[20px] px-2 pt-[50px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <div>
          <h2 className='text-[32px] text-[#1F1D14] font-medium'>Новинки</h2>
        </div>
        <ProductsCard />
      </div>
      <div className="flex flex-col items-center sm:items-start w-full gap-[10px] sm:gap-[20px] px-2 pt-[50px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <div>
          <h2 className='text-[32px] text-[#1F1D14] font-medium'>Продукты</h2>
        </div>
        <ProductsCard />
      </div>
      <div className="flex flex-col items-center sm:items-start w-full gap-[10px] sm:gap-[20px] px-2 py-[60px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <div>
          <h2 className='text-[32px] text-[#1F1D14] font-medium'>ТОП продажа</h2>
        </div>
        <ProductsCard />
      </div>
      <div className="flex flex-col items-center w-full xl:items-start gap-[10px] sm:gap-[20px] px-2 pb-[60px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <h2 className='text-[32px] text-[#1F1D14] font-medium'>Полезное</h2>
        <div className='w-full gap-[30px] flex-wrap xl:flex xl:justify-start'>
          <div className='py-[40px] px-[45px] mb-4 bg-[#fff] sm:h-[440px] h-[350px] w-full xl:w-[48%] rounded-lg flex flex-col justify-between'>
            <div className='max-w-[465px] flex flex-col gap-4'>
              <h2 className='sm:text-[32px] text-[22px] text-[#1F1D14] font-medium'>Как правильно выбрать эллиптический тренажер?</h2>
              <p className='sm:text-[16px] text-[12px] text-[#000] opacity-70 font-normal'>Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...</p>
            </div>
            <div className='flex items-center gap-[40px]'>
              <div className='flex items-center text-[12px] text-[#333] font-normal'>
                <CalendarTodayIcon />
                <p>27.01.2022</p>
              </div>
              <div className='flex items-center text-[12px] text-[#333] font-normal'>
                <RemoveRedEyeOutlinedIcon />
                <p>250</p>
              </div>
            </div>
          </div>
          <div className='xl:w-[48%] w-full h-[440px] gap-2 mb-4 bg-[#fff] flex flex-col items-center justify-center rounded-lg'>
            <Image src={usefulImg} alt='usefulImg' />
            <p className='text-[16px] text-black py-2 px-8 border-2 border-black cursor-pointer'>Посмотрет все</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full xl:items-start gap-[10px] sm:gap-[20px] px-2 pb-[60px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <h2 className='text-[32px] text-[#1F1D14] font-medium'>Примущества</h2>
        <AdventagesCard />
      </div>
      <div className="flex flex-col items-center w-full xl:items-start gap-[10px] sm:gap-[20px] px-2 pb-[60px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <h2 className='text-[32px] text-[#1F1D14] font-medium'>О нас</h2>
        <div className='w-full bg-[#1F1D14] lg:px-[80px] py-[20px] px-[20px] sm:py-[40px] sm:px-[50px] lg:py-[70px] lg:h-[360px]'>
          <p className='text-[12px] sm:text-[14px] md:text-[18px] text-[#fff] font-medium opacity-80 max-w-[719px] 2xl:max-w-[900px]'>Интернет магазин спортивных товаров 7MARKETSPORT.UZ предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. Ведется работа как с розничными покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок.</p>
        </div>
      </div>
    </div>
  );
}
