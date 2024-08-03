import http from "@/api/interceptors";

interface Product {
  id: number;
  product_id: string; // Assuming you have a separate field for `product_id`
  product_name: string;
  image_url: string | string[];
  cost: string;
  liked: boolean; // Add this field to reflect the "like" status
}

interface ProductResponse {
  data: any;
  status: number;
  products: Product[];
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

export const getProductId = async (product_id: string): Promise<Product> => {
  try {
    const response = await http.get(`/product/${product_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const like = async (product_id: string): Promise<void> => {
  try {
    await http.post(`/like/${product_id}`);
  } catch (error) {
    console.error("Error liking the product:", error);
    throw error;
  }
};