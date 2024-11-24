import axios, { AxiosRequestHeaders } from 'axios'

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
  withCredentials: true,
})

authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')

  config.headers = {
    Authorization: `Bearer ${token}`,
  } as AxiosRequestHeaders

  return config
})

export default authApi
