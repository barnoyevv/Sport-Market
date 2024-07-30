import React from 'react'
import Image from 'next/image'
import adventage1 from '@/public/ad1.svg'
import adventage2 from '@/public/ad2.svg'
import adventage3 from '@/public/ad3.svg'
import adventage4 from '@/public/ad4.svg'

const catalog = [
  {text: "Доставка по всему Узбекистану", src: adventage1, alt: "adventage1"},
  {text: "Доставка по всему Узбекистану", src: adventage2, alt: "Catalog2"},
  {text: "Скидки и акции", src: adventage3, alt: "Catalog3"},
  {text: "Широкий ассортимент товаров", src: adventage4, alt: "Catalog4"},
]

const Index = () => {
  return (
    <div className="flex-wrap md:flex md:justify-between w-full gap-2">
      {catalog.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-[#fff] gap-[30px] md:h-[250px] md:w-[20%] w-full mb-2 md:m-0 p-[40px] rounded-lg"
        >
          <Image 
            src={item.src} 
            alt={item.alt} 
            className="object-cover rounded-md"
          />
          <p className="text-lg text-black font-normal mb-2">{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Index
