import React from 'react';
import Image from 'next/image';
import Card1 from '@/public/card1.png';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import CardButton from '@/public/basket.svg';

const catalog = [
  { text: "Бутса Nike Mercurial Superfly 8 FG", src: Card1, alt: "Card1", price: "500 000 UZS", old_price: "750 000 UZS"},
  { text: "Бутса Nike Mercurial Superfly 8 FG", src: Card1, alt: "Card1", price: "500 000 UZS", old_price: "750 000 UZS"},
  { text: "Бутса Nike Mercurial Superfly 8 FG", src: Card1, alt: "Card1", price: "500 000 UZS", old_price: "750 000 UZS"},
  { text: "Бутса Nike Mercurial Superfly 8 FG", src: Card1, alt: "Card1", price: "500 000 UZS", old_price: "750 000 UZS"}
];

const Index = () => {
  return (
    <div className="flex-wrap sm:flex sm:justify-between w-full gap-4">
      {catalog.map((item, index) => (
        <div
          key={index}
          className="py-[15px] px-[20px] flex flex-col gap-3 sm:w-[300px] w-full rounded-md bg-[#fff]"
        >
          <div className="relative">
            <Image
              src={item.src}
              alt={item.alt}
              className="object-cover rounded-md"
            />
            <FavoriteBorderIcon
              className="absolute top-2 right-2 text-black rounded-full p-1 cursor-pointer"
              style={{ fontSize: 24 }}
            />
          </div>
          <p className="text-lg text-black font-normal">{item.text}</p>
          <div>
            <p className='text-lg text-[#FF1313] font-bold'>{item.price}</p>
            <p className='text-base text-[#1F1D14] opacity-50 font-normal line-through'>{item.old_price}</p>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FBD029',
              color: '#1F1D14',
              '&:hover': {
                backgroundColor: '#FBD029',
              },
              height: '40px',
              borderRadius: '5px',
              minWidth: 'max-content',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <Image src={CardButton} alt='CardButton' width={20} height={20}/>
            Корзина
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Index;
