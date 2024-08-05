"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import click from "@/public/click.png";
import payme from "@/public/payme.png";
import basket from "@/service/basket.service";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface Product {
  cost: number;
  product_id: number;
  product_name: string;
  pricePerUnit: number;
  image_url: string[];
  count: number;
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const response = await basket.get();
      const initializedProducts = response.data.map((product: { count: any }) => ({
        ...product,
        count: product.count || 0,
      }));
      setProducts(initializedProducts);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCard = async (id: number) => {
    const updatedProducts = products.filter(
      (product) => product.product_id !== id
    );
    setProducts(updatedProducts);
    try {
      await basket.delete(id);
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const decrementCount = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === id
          ? { ...product, count: Math.max(product.count - 1, 0) }
          : product
      )
    );
  };

  const incrementCount = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product_id === id
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  };

  useEffect(() => {
    getData();
  }, []);

  const totalSum = products.reduce(
    (total, product) => total + product.count * product.cost,
    0
  );

  const totalQuantity = products.reduce(
    (total, product) => total + product.count,
    0
  );

  const totalPrice = totalSum;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-custom-gray bg-[#F2F2F2] p-[20px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[40px] lg:flex-row">
            <div className="w-full max-w-[713px] h-auto rounded-lg bg-white p-4">
              <div className="flex justify-between items-center pt-[20px] pb-[15px]">
                <h1 className="text-[24px] font-medium text-[#000]">Ваша корзина</h1>
                <button onClick={() => setProducts([])} className="text-red-500">
                  Очистить все
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {products.map((product) => (
                  <div
                    key={product.product_id}
                    className="font-Fira-sans max-w-[655px] flex flex-col sm:flex-row border rounded-lg overflow-hidden p-4 bg-custom-gray relative mb-4"
                  >
                    <button
                      onClick={() => deleteCard(product.product_id)}
                      className="absolute flex justify-center text-red-500 items-center top-2 right-2 w-[32px] h-[32px] rounded-[50%] bg-white"
                    >
                      <DeleteOutlineOutlinedIcon />
                    </button>
                    <div className="flex flex-col sm:flex-col lg:flex-row">
                      <div className="w-full sm:w-[145px] sm:h-[120px] flex-shrink-0 mr-4">
                        <Image
                          src={product.image_url[0]}
                          alt={product.product_name}
                          width={145}
                          height={120}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between mt-4 sm:mt-0">
                        <div className="font-bold text-xl mb-2">
                          <h1 className="w-full text-xl text-[#1F1D14] font-normal leading-normal">
                            {product.product_name}
                          </h1>
                        </div>
                        <div className="flex items-center gap-[6px]">
                          <button
                            onClick={() => decrementCount(product.product_id)}
                            className="flex text-[#000] justify-center bg-white items-center border w-[32px] h-[32px] font-bold rounded-[50%]"
                          >
                            -
                          </button>
                          <span className="text-[16px] text-[#000]">{product.count}</span>
                          <button
                            onClick={() => incrementCount(product.product_id)}
                            className="flex justify-center text-[#000] bg-white items-center border w-[32px] h-[32px] font-bold rounded-[50%]"
                          >
                            +
                          </button>
                          <span className="pl-[20px] text-[16px] font-normal text-[#000]">
                            {(product.count * product.cost).toLocaleString()} uzs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="cursor-pointer border-bottom pt-[15px] pb-[15px] text-blue-600">
                Все информация о доставке
              </h3>
              <div className="mb-[40px]">
                <p className="max-w-[384px] text-[#000] text-[16px]">
                  Если у вас имеется вопросы позвоните по номеру:{" "}
                  <span className="text-blue-600 cursor-pointer">+998 (99) 995 55 65</span>
                </p>
              </div>
            </div>
            <div className="w-full max-w-[504px] h-auto mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="text-xl text-[#000] font-medium mb-2">Итого</div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xl text-[#000]">Кол-во товаров:</span>
                  <span className="text-xl text-[#000] text-medium">{totalQuantity}</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xl text-[#000]">Сумма:</span>
                  <span className="text-xl text-[#000] text-medium">{totalPrice.toLocaleString()} UZS</span>
                </div>
                <div className="text-xl font-medium text-[#000] mb-4">Ваши данные</div>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Имя / Фамилия
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Имя / Фамилия"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Ваш номер
                    </label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="+998 _ _ _ _ _ _ _"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="address"
                    >
                      Адрес доставки
                    </label>
                    <div className="relative">
                      <input
                        id="address"
                        type="text"
                        placeholder="Область/город/улица/дом"
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      />
                      <button
                        type="button"
                        className="absolute right-0 top-0 p-[11px] rounded-[5px] bg-yellow-500"
                      >
                        <HiOutlineLocationMarker className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-lg font-semibold mb-2">Тип оплаты</div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <button
                      type="button"
                      className="flex justify-center items-center px-[25px] py-[17px] text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                    >
                      <Image src={click} alt="click" />
                    </button>
                    <button
                      type="button"
                      className="flex justify-center items-center px-[25px] py-[17px] text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                    >
                      <Image
                        src={payme}
                        alt="payme"
                        className="w-[80px] h-[38px]"
                      />
                    </button>
                    <button
                      type="button"
                      className="flex justify-center items-center px-[25px] py-[17px] text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                    >
                      Через карту
                    </button>
                    <button
                      type="button"
                      className="flex justify-center items-center px-[25px] py-[17px] text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                    >
                      Банковский счёт
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-[40px] py-[20px] mt-[50px] text-white bg-yellow-500 rounded-lg font-semibold"
                  >
                    Купить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
