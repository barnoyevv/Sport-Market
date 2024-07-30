import http from "@/api/interceptors";
import { saveAccessToken } from "@/helpers/auth-helpers";
import { IAuth } from "@/types/auth";
export const login = async (data: IAuth) => {
  try {
    const response = await http.post('/login', data)
    if (response.status === 200) {
      saveAccessToken(response?.data?.access_token)
    }
    return response.status
  } catch (error) {
    console.log(error)
  }
}