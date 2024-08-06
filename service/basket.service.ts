import http from "@/api/interceptors";

const basket = {
  get: () => http.get("/user-baskets"),
  post: (product: any) => http.post("/basket", product),
  delete: (productId: any) => http.post("/basket", { productId }),
};

export default basket;

