import axios from 'axios'
import config from '../app/config'

const client = axios.create({
  baseURL: config.apiUrl
})

client.interceptors.request.use((config) => {
  return config
})

export default client
