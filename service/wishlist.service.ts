import http from "@/api/interceptors";

interface Product {
  id: number;
  product_id: string;
  product_name: string;
  image_url: string | string[];
  cost: string;
  liked: boolean;
}

interface ProductResponse {
  data: any;
  status: number;
  products: Product[];
}

export const getWishlist = async (page: number, limit: number): Promise<ProductResponse> => {
  try {
    const response = await http.get(`/wishlist?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw error;
  }
};