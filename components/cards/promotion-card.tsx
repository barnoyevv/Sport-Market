'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import CardButton from '@/public/basket.svg';
import { getProduct } from '@/service/products.service';

interface IParams {
  limit: number;
  page: number;
}

interface IndexProps {
  params: IParams;
}

const Index: React.FC<IndexProps> = ({ params }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct({params: {page:1, limit: 4}});
      console.log(result);
      
      if (result) {
        setData(result.products);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div className="flex-wrap sm:flex sm:justify-between w-full gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="py-[15px] px-[20px] flex flex-col gap-3 sm:w-[300px] w-full rounded-md bg-[#fff]"
        >
          <div className="relative">
            <Image
              src={item.image_url}
              alt="product image"
              width={300}
              height={300}
              className="object-cover rounded-md"
            />
            <FavoriteBorderIcon
              className="absolute top-2 right-2 text-black rounded-full p-1 cursor-pointer"
              style={{ fontSize: 24 }}
            />
          </div>
          <p className="text-lg text-black font-normal">{item.product_name}</p>
          <div>
            <p className="text-lg text-[#FF1313] font-bold">{item.cost}</p>
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
              gap: '8px',
            }}
          >
            <Image src={CardButton} alt="CardButton" width={20} height={20} />
            Корзина
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Index;
