import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/'

export const axiosInstance = axios.create({
  baseURL: BASE_URL
})

axiosInstance.interceptors.request.use((req) => {
  if (window.localStorage.getItem('userCredentials')) {
    req.headers.Authorization = `Token ${
      JSON.parse(window.localStorage.getItem('userCredentials')).token
    }`
  }

  return req
})
