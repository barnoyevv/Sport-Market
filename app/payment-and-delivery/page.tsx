'use client';
import React from 'react';
import Image from 'next/image';
import ProductCard from '@/components/cards/products-card';
import Slash from '@/public/slash.svg';

const Index = () => {
  const data = [
    {
      header1: 'Способы оплаты',
      header2: 'Доставка',
      parag1: `Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и выбрать тот товар, который Вы хотите купить.

После перехода в Корзину, откроется список товаров, которые Вы добавили. Далее, нажимаем кнопку «Оформить заказ».

В окне, появится «Контактная информация» и «Способы доставки», которые Вам необходимо заполнить.

Вы можете выбрать более подходящий для Вас способ оплаты:
-Оплата на месте;
-Оплата по терминалу;
-Оплата через платёжные системы, такие как CLICK, Payme.

Оплатить покупки можно наличными при получении. Убедительная просьба вначале ознакомиться с товаром, убедиться в отсутствии дефектов в присутствии курьера, после чего оплачивать сумму.`,
      parag2: `Тарифы на доставку товаров по Ташкенту:
-20.000 сум для товаров до 150.000 сум
-Бесплатная доставка для всех товаров от 150.000 сум

Тарифы на доставку товаров по всех регионов:
-Платная доставка для всех товаров по согласованной цене
-Бесплатная установка для всех тренажеров`,
    }
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start gap-4 lg:gap-6 px-4 py-12 bg-[#F2F2F2] sm:px-6 lg:px-16 xl:px-24">
        <div className="p-4 w-full hidden lg:flex lg:w-[300px] h-[300px] max-w-md bg-white shadow-lg rounded-lg flex-col gap-4">
          <div className='flex items-center gap-2'>
            <Image src={Slash} alt='Slash' />
            <h2 className="text-[18px] font-normal text-[#000]">Оплата и Доставка</h2>
          </div>
        </div>
        <div className='bg-[#fff] w-full rounded-lg p-[20px] md:p-[50px]'>
          {
            data.map((item, index) => (
              <div key={index} className='flex flex-col gap-[20px] md:gap-[30px]'>
                <h1 className='text-[26px] text-[#000] font-medium'>{item.header1}</h1>
                <p className='text-[16px] text-[#000] font-normal max-w-[700px]'>{item.parag1.split('\n').map((text, i) => (
                  <React.Fragment key={i}>
                    {text}<br />
                  </React.Fragment>
                ))}</p>
                <h2 className='text-[22px] text-[#000] font-medium'>{item.header2}</h2>
                <p className='text-[16px] text-[#000] font-normal max-w-[700px]'>{item.parag2.split('\n').map((text, i) => (
                  <React.Fragment key={i}>
                    {text}<br />
                  </React.Fragment>
                ))}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start w-full gap-4 px-4 pt-12 pb-8 bg-[#F2F2F2] sm:px-6 lg:px-16 xl:px-24">
        <div>
          <h2 className="text-2xl text-[#1F1D14] font-medium">Акция</h2>
        </div>
        <ProductCard />
      </div>
    </div>
  );
}

export default Index;
