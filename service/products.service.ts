import http from "@/api/interceptors";
import Cookies from "js-cookie";
import { Cookie } from "next/font/google";

interface ProductResponse {
  products: Product[];
}

interface Product {
  id: number;
  product_name: string;
  image_url: string;
  cost: string;
}

export const getProduct = async (page: number, limit: number): Promise<ProductResponse> => {
  try {
    const response = await http.get(`/products?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductId = async () => {
  try {
    const id = Cookies.get('product_id')
    return http.get(`/product/${id}`)
  } catch (error) {
    console.log(error);
  }
}
