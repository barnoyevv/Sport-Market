
'use client';

import React from 'react';
import Image from 'next/image';
import PromotionCard from '@/components/cards/promotion-card';
import Slash from '@/public/slash.svg'
import Share from '@/public/share.svg'
import Print from '@/public/print.svg'

const Index = () => {
  
  const data = [
    {header: '7 SPORT MARKET', parag1: 'В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.', parag2: 'Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.', parag3: 'В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.', parag4: 'Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.', subscribe: 'Поделиться:', print: 'Распечатать:'}
  ]
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-start gap-4 lg:gap-6 px-4 py-12 bg-[#F2F2F2] sm:px-6 lg:px-16 xl:px-24">
        <div className="p-4 w-full hidden lg:flex lg:w-[250px] h-[300px] max-w-md bg-white shadow-lg rounded-lg flex-col gap-4">
          <div className='flex items-center gap-2'>
            <Image src={Slash} alt='Slash' />
            <h2 className="text-xl font-normal text-[#000]">О нас</h2>
          </div>
          <p className='text-xl text-[#000] ml-4'>Вканация</p>
        </div>
        <div className='bg-[#fff] w-full rounded-lg p-[20px] md:p-[50px]'>
          {
            data.map((item,index)=>{
              return <div key={index} className='flex flex-col gap-[20px] md:gap-[40px]'>
                <h1 className='text-[26px] text-[#000] font-medium'>{item.header}</h1>
                <p className='text-[16px] text-[#000] font-normal max-w-[700px]'>{item.parag1}</p>
                <p className='text-[16px] text-[#000] font-normal max-w-[700px]'>{item.parag2}</p>
                <p className='text-[16px] text-[#000] font-normal max-w-[700px]'>{item.parag3}</p>
                <p className='text-[16px] text-[#000] font-normal max-w-[700px]'>{item.parag4}</p>
                <div className='flex items-center gap-[20px] md:gap-[30px] justify-end pt-[20px] pr-[10px] mb-[30px]'>
                  <div className='flex gap-2'>
                    <p className='text-[14px] text-[#000] font-normal'>{item.subscribe}</p>
                    <Image src={Share} alt='Share'/>
                  </div>
                  <div className='flex gap-2'>
                    <p className='text-[14px] text-[#000] font-normal'>{item.print}</p>
                    <Image src={Print} alt='Print'/>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start w-full gap-4 px-4 pt-12 pb-8 bg-[#F2F2F2] sm:px-6 lg:px-16 xl:px-24">
        <div>
          <h2 className="text-2xl text-[#1F1D14] font-medium">Акция</h2>
        </div>
        <PromotionCard />
      </div>
    </div>
  );
}

export default Index;



