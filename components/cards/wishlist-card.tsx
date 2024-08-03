'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import CardButton from '@/public/basket.svg';
import { like } from '@/service/products.service';
import { getWishlist } from '@/service/wishlist.service';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const getData = async () => {
    try {
      const response = await getWishlist(1, 4);
      if (response?.products) {
        const productsWithLikeState: any = response.products.map((product) => ({
          ...product,
          liked: true,
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

  const moveSingle = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  const handleLike = async (productId: string) => {
    try {
      const response: any = await like(productId);
      if (response) {
        const productsWithLikeState: any = data.map((product) =>
          product.product_id === productId
            ? { ...product, liked: !product.liked }
            : product
        );
        setData(productsWithLikeState);
      }
      window.location.reload()
    } catch (error) {
      console.error('Error liking the product:', error);
    }
  };

  return (
    <div className="flex-wrap sm:flex sm:justify-between w-full gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="py-[15px] px-[20px] flex flex-col gap-3 sm:w-[300px] w-full rounded-md bg-[#fff] cursor-pointer"
          onClick={() => moveSingle(item.id)}
        >
          <div className="relative w-full h-[200px]"> {/* Set explicit height for the image container */}
            <Image
              src={Array.isArray(item.image_url) && item.image_url[0] ? item.image_url[0] : Img1}
              alt="product image"
              className="object-cover rounded-md"
              fill
              style={{ borderRadius: '8px' }} // Ensure image has rounded corners
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
