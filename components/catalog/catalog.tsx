import React from 'react'
import Image from 'next/image'
import Catalog1 from '@/public/catalog1.png'
import Catalog2 from '@/public/catalog2.png'
import Catalog3 from '@/public/catalog3.png'
import Catalog4 from '@/public/catalog4.png'
import Catalog5 from '@/public/catalog5.png'
import Catalog6 from '@/public/catalog6.png'

const catalog = [
  {text: "Тренажеры", src: Catalog1, alt: "Catalog1", color: "#D3E5F2"},
  {text: "Мячи", src: Catalog2, alt: "Catalog2", color: "#E2C6BE"},
  {text: "Спротивные обуви", src: Catalog3, alt: "Catalog3", color: "#DADBE0"},
  {text: "Спортивные одежды", src: Catalog4, alt: "Catalog4", color: "#E2EEC0"},
  {text: "Водный спорт", src: Catalog5, alt: "Catalog5", color: "#C2BCE8"},
  {text: "Горный спорт", src: Catalog6, alt: "Catalog6", color: "#ABA520"},
]

const Index = () => {
  return (
    <div className="flex-wrap sm:flex sm:justify-between w-full gap-4">
      {catalog.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between sm:h-[250px] sm:w-[190px] w-full mb-2 sm:m-0 p-4 rounded-lg cursor-pointer"
          style={{ backgroundColor: item.color }}
        >
          <p className="text-lg text-black font-normal mb-2">{item.text}</p>
          <Image 
            src={item.src} 
            alt={item.alt} 
            className="object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  )
}

export default Index
