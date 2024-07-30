import http from "@/api/interceptors";

export const getProduct = async (params: any) => {
  try {
    const response = await http.get('/products', { params });
    
    // Check for the status and expected response structure
    if (response.status === 200 && response?.data && Array.isArray(response.data.products) && typeof response.data.total_count === 'number') {
      return {
        products: response?.data?.products,
        totalCount: response?.data?.total_count,
      };
    } else {
      console.error("Unexpected response format:", response);
      return { products: [], totalCount: 0 };
    }
  } catch (error) {
    console.log(error);
    
  }
};
