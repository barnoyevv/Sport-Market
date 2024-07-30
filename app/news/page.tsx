import React from 'react'
import NewsCard from '@/components/cards/news-card'
import PromotionCard from '@/components/cards/promotion-card'

const Index = () => {
  return (
    <div>
      <div className="flex flex-col items-center sm:items-start w-full gap-[10px] sm:gap-[20px] px-2 py-[60px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <div>
          <h2 className='text-[32px] text-[#1F1D14] font-medium'>ТОП продажа</h2>
        </div>
        <NewsCard />
        <button className="bg-[#F2F2F2] flex items-center justify-center border border-[#FBD029] text-black hover:bg-[#FBD029] hover:border-[#FBD029] h-10 rounded-[5px] px-4 text-sm lg:text-base w-full sm:w-auto">
          <p className='hidden lg:flex'>Показать ещё</p>
          <p className='flex lg:hidden'>Ещё</p>
        </button>
      </div>
      <div className="flex flex-col items-center sm:items-start w-full pb-[50px] lg:pb-[80px] gap-[10px] sm:gap-[20px] px-2 pt-[50px] bg-[#F2F2F2] sm:px-5 lg:px-24 xl:px-30">
        <div>
          <h2 className='text-[32px] text-[#1F1D14] font-medium'>Акция</h2>
        </div>
        <PromotionCard />
      </div>
    </div>
  )
}

export default Index
