'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiHeart } from "react-icons/fi";
import Button from '@mui/material/Button';
import CardButton from '@/public/basket.svg';
import { getProduct, like } from '@/service/products.service';
import { useRouter } from 'next/navigation';
import basket from "@/service/basket.service"
import Img1 from '@/public/1.jpg';

interface Product {
  product_id: string;
  id: string;
  product_name: string;
  image_url: string | string[];
  cost: string;
  liked: boolean;
}

const Index = () => {
  const [data, setData] = useState<Product[]>([]);
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const router = useRouter();

  const getData = async () => {
    try {
      const response = await getProduct(1, 4);
      if (response?.products) {
        const storedLikedItems = localStorage.getItem('likedItems');
        const parsedLikedItems = storedLikedItems ? JSON.parse(storedLikedItems) : [];

        const productsWithLikeState:any = response.products.map((product) => ({
          ...product,
          liked: parsedLikedItems.includes(product.product_id),
        }));

        setData(productsWithLikeState);
        setLikedItems(parsedLikedItems);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const moveSingle = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  const handleLike = async (productId: string) => {
    try {
      const response:any = await like(productId);
      console.log('Like Response:', response);
      let updatedLikedItems: string[];
      if (response.data === true) {
        updatedLikedItems = [...likedItems, productId];
      } else {
        updatedLikedItems = likedItems.filter((itemId) => itemId !== productId);
      }
      setLikedItems(updatedLikedItems);
      localStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));
      const updatedData = data.map((item) =>
        item.product_id === productId ? { ...item, liked: response.data === true } : item
      );
      setData(updatedData);
    } catch (error) {
      console.error('Error liking product:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addToBasket = async (product_id: any) => {
    try {
      const response = await basket.post({ product_id }); 
      console.log('Basket response:', response);
    } catch (error) {
      console.error('Error adding to basket:', error);
    }
  }

  return (
    <div className="flex-wrap sm:flex sm:justify-between w-full gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="py-[15px] px-[20px] flex flex-col gap-3 sm:w-[300px] w-full rounded-md bg-[#fff] cursor-pointer"
          onClick={() => moveSingle(item.product_id)}
        >
          <div className="relative w-full h-[200px]">
            <Image
              src={Array.isArray(item.image_url) && item.image_url[0] ? item.image_url[0] : Img1}
              alt="product image"
              className="object-cover rounded-md"
              fill
              style={{ borderRadius: '8px' }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(item.product_id);
              }}
              className={`bg-transparent absolute top-2 right-2 p-1 rounded-full shadow-md transition-colors ${
                item.liked ? 'text-red-500' : 'text-[#FBD029]'
              }`}
            >
              <FiHeart size={24} />
            </button>
          </div>
          <p className="text-lg text-black font-normal">{item.product_name}</p>
          <div>
            <p className="text-lg text-[#000] font-bold">{item.cost}</p>
          </div>
          <Button
            variant="contained"
            onClick={() => addToBasket(item.product_id)}
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
