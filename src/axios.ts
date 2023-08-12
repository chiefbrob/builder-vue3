import axios from 'axios'
import useStorage from '@/composables/storage/useStorage'

const token = useStorage('token')
// let baseURL = process.env.VUE_APP_API_URL
const baseURL = 'https://laravel.test/api'

const axiosConfig = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token.value}`
  },
  timeout: 10000
}

export default axios.create(axiosConfig)
