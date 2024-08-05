import http from "@/api/interceptors";

const basket = {
  get: () => http.get("/user-baskets"),
  post: (product: any) => http.post("/basket", product), // to'g'ri URL formatida
  delete: (productId: any) => http.delete("/basket", { data: { productId } }), // DELETE metodidan foydalaniladi
};

export default basket;
