import http from "@/api/interceptors";

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

export const getProductId = async (product_id:string) => {
  try {
    const response = await http.get(`/products/${product_id}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}
