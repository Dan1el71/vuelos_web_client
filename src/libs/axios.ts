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

authApi.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      localStorage.clear()
      window.location.href = '/login'
    }

    return Promise.reject(err)
  }
)

export default authApi
