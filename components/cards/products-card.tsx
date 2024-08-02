'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import CardButton from '@/public/basket.svg';
import { getProduct } from '@/service/products.service';
import { useRouter } from 'next/navigation';
import Img1 from '@/public/1.jpg';
import Link from 'next/link';
import Cookies from 'js-cookie';

interface Product {
  product_id: string;
  product_name: string;
  image_url: string;
  cost: string;
  liked: boolean;
}

const Index = () => {
  const [data, setData] = useState<Product[]>([]);
  const router = useRouter();

  const getData = async () => {
    try {
      const response = await getProduct(1, 4);
      if (response?.products) {
        const productsWithLikeState:any = response.products.map((product) => ({
          ...product,
          liked: false,
        }));
        setData(productsWithLikeState);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const moveSingle = (product_id:any) => {
    router.push(`/products/${product_id}`);
  };

  return (
    <div className="flex-wrap sm:flex sm:justify-between w-full gap-4">
      {data?.map((item, index) => (     
          <div
          key={index}
            className="py-[15px] px-[20px] flex flex-col gap-3 sm:w-[300px] w-full rounded-md bg-[#fff] cursor-pointer"
            onClick={moveSingle}
          >
            <div className="relative">
              <Image
                src={
                  Array.isArray(item.image_url) && item.image_url[0]
                    ? item.image_url[0]
                    : Img1
                }
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
              <p className="text-lg text-[#000] font-bold">{item.cost}</p>
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
