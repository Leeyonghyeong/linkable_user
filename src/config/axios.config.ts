import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'url' : 'http://192.168.219.141:3001/api',
})

export default instance
