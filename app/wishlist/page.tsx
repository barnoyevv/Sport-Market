'use client';

import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Board from '@/public/board.svg';
import List from '@/public/list.svg';
import Image from 'next/image';
import WishlistCard from '@/components/cards/wishlist-card';

function valuetext(value: number) {
  return `${value}$`;
}

const Index: React.FC = () => {
  const [value, setValue] = useState<number[]>([20, 37]);
  const [category, setCategory] = useState<string>('');

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start gap-4 lg:gap-6 px-4 py-12 bg-[#F2F2F2] sm:px-6 lg:px-16 xl:px-24">
        <div className="p-6 w-full lg:w-[350px] max-w-md bg-white shadow-lg rounded-lg flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-[#000]">Фильтр</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-[#000]">Цена</p>
              <div className="p-4 bg-[#F2F2F2] rounded-lg">
                <Slider
                  getAriaLabel={() => 'Price range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  sx={{
                    color: '#FBD029',
                    '& .MuiSlider-thumb': {
                      '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: '0px 0px 0px 8px rgba(251, 208, 41, 0.16)',
                      },
                    },
                    '& .MuiSlider-rail': {
                      color: '#ccc',
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-[#000]">Артикул:</p>
              <input
                type="text"
                placeholder="Article"
                className="w-full p-3 bg-[#F2F2F2] rounded-lg text-[#000] focus:outline-none focus:border-[#FBD029] focus:ring-1 focus:ring-[#FBD029]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-[#000]">Выберите категорию:</p>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 bg-[#F2F2F2] rounded-lg text-[#000] focus:outline-none focus:border-[#FBD029] focus:ring-1 focus:ring-[#FBD029]"
              >
                <option value="" disabled>Все</option>
                <option value="category1">Категория 1</option>
                <option value="category2">Категория 2</option>
                <option value="category3">Категория 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-[#000]">Новинка:</p>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 bg-[#F2F2F2] rounded-lg text-[#000] focus:outline-none focus:border-[#FBD029] focus:ring-1 focus:ring-[#FBD029]"
              >
                <option value="" disabled>Все</option>
                <option value="category1">Категория 1</option>
                <option value="category2">Категория 2</option>
                <option value="category3">Категория 3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-[#000]">Акция:</p>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 bg-[#F2F2F2] rounded-lg text-[#000] focus:outline-none focus:border-[#FBD029] focus:ring-1 focus:ring-[#FBD029]"
              >
                <option value="" disabled>Все</option>
                <option value="category1">Категория 1</option>
                <option value="category2">Категория 2</option>
                <option value="category3">Категория 3</option>
              </select>
            </div>
            <div className="w-full">
              <button className="w-full py-3 bg-[#FBD029] text-[#000] font-semibold rounded-lg hover:bg-[#f7b81f] transition-colors">
                Показать результат
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between">
            <div className="flex items-center gap-1 w-full sm:w-auto mb-4 sm:mb-0">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 bg-white rounded-lg text-black text-sm focus:outline-none focus:border-[#FBD029] focus:ring-1 focus:ring-[#FBD029]"
              >
                <option value="" disabled>Сортировать</option>
                <option value="category1">Категория 1</option>
                <option value="category2">Категория 2</option>
              </select>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 bg-white rounded-lg text-black text-sm focus:outline-none focus:border-[#FBD029] focus:ring-1 focus:ring-[#FBD029]"
              >
                <option value="" disabled>Все продукты</option>
                <option value="category1">Категория 1</option>
                <option value="category2">Категория 2</option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex px-8 md:block py-2 justify-center cursor-pointer bg-white rounded-lg gap-1">
                <p className="text-sm text-black">Кард</p>
              </div>
              <div className="flex px-8 md:block py-2 justify-center items-center cursor-pointer bg-white rounded-lg gap-1">
                <p className="text-sm text-black opacity-40">Лист</p>
              </div>
            </div>
          </div>
          <WishlistCard />
          <div className="w-full bg-white rounded-lg cursor-pointer flex items-center justify-center py-4 mt-5">
            <p className="text-lg text-black">Показать ещё</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start w-full gap-4 px-4 pt-12 pb-8 bg-[#F2F2F2] sm:px-6 lg:px-16 xl:px-24">
        <div>
          <h2 className="text-2xl text-[#1F1D14] font-medium">Реконмендуемые продукты</h2>
        </div>
        <WishlistCard />
      </div>
    </div>
  );
}

export default Index;
