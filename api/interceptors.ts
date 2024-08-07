import axios from 'axios'
import { getAccessToken } from '@/helpers/auth-helpers'
const http = axios.create({
  baseURL: "https://store.go-clothes.uz/v1"
})

http.interceptors.request.use((config) => {
  let access_token = getAccessToken()
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`
  }
  return config
})
export default http