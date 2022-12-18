import axios from 'axios'
import { useUserSession } from '../generalHooks/useUserSession'

const BASE_URL = 'http://127.0.0.1:8000/'

const { userToken } = useUserSession()

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: 'Token ' + userToken
  }
})
