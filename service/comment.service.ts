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

interface CommentResponse {
  Comment: any[];
}

export const getComment = async (page: number, limit: number, product_id: string): Promise<CommentResponse> => {
  try {
    const response = await http.get(`/product-comments?page=${page}&limit=${limit}&id=${product_id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addComment = async (product_id: string, commentText: string) => {
  try {
    const response = await http.post('/comment', { product_id, commentText });
    return response.data;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};
