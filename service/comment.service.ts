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

export const getComment = async (page: number, limit: number, product_id: string): Promise<ProductResponse> => {
  try {
    const response = await http.get(`/product-comments?page=${page}&limit=${limit}&id=${product_id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addComment = async (values: any) => {
  try {
    const response = await http.post('/comment', values);
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};