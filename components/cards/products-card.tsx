'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from 'next/navigation';
import CardButton from '@/public/basket.svg';
import Img1 from '@/public/1.jpg';
import { getProduct, like } from '@/service/products.service';
import basket from "@/service/basket.service"

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

        const productsWithLikeState: any = response.products.map((product) => ({
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
      const updatedData = data.map((item) =>
        item.product_id === productId ? { ...item, liked: !item.liked } : item
      );

      setData(updatedData);

      const isLiked = updatedData.find(item => item.product_id === productId)?.liked;
      const updatedLikedItems = isLiked
        ? [...likedItems, productId]
        : likedItems.filter((itemId) => itemId !== productId);

      setLikedItems(updatedLikedItems);
      localStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));

      const response: any = await like(productId);
      console.log('Like Response:', response);

      if (response.data !== true) {
        const revertData = data.map((item) =>
          item.product_id === productId ? { ...item, liked: !item.liked } : item
        );
        setData(revertData);

        const revertLikedItems = likedItems.filter((itemId) => itemId !== productId);
        setLikedItems(revertLikedItems);
        localStorage.setItem('likedItems', JSON.stringify(revertLikedItems));
      }
    } catch (error) {
      console.error('Error liking product:', error);
      const revertData = data.map((item) =>
        item.product_id === productId ? { ...item, liked: !item.liked } : item
      );
      setData(revertData);

      const revertLikedItems = likedItems.filter((itemId) => itemId !== productId);
      setLikedItems(revertLikedItems);
      localStorage.setItem('likedItems', JSON.stringify(revertLikedItems));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addToBasket = async (product_id: any) => {
    try {
      const product = { productId: product_id, quantity: 1 };
      const response = await basket.post(product);
      console.log("Basket Response:", response);

      if (response.data === true) {
        console.log("Product added to basket successfully.");
      } else {
        console.error("Failed to add product to basket:", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              className="rounded-md w-full h-full"
              fill
              style={{ borderRadius: '8px' }}
              layout="fill"
              objectFit="cover"
            />
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(item.product_id);
              }}
              className="absolute top-2 right-2 p-1"
              style={{
                minWidth: 'unset',
                padding: '0',
                color: item.liked ? 'red' : 'white',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              {item.liked ? (
                <FavoriteIcon style={{ color: 'red', fontSize: 24 }} />
              ) : (
                <FavoriteBorderIcon style={{ color: 'black', fontSize: 24 }} />
              )}
            </Button>
          </div>
          <div>
            <p className="text-lg text-black font-normal">{item.product_name.slice(0, 25)}...</p>
          </div>
          <div>
            <p className="text-lg text-[#000] font-bold">{item.cost}UZS</p>
          </div>
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation(); // Bu parent hodisasini to'xtatadi
              addToBasket(item.product_id);
            }}
            sx={{
              position: 'relative', // Bu yerda z-index ishlashi uchun relative pozitsiya qo'shamiz
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
              zIndex: 10,
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
