import './assets/main.css'
import axios from 'axios'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/scss/style.scss'
import 'bootstrap'

import App from './App.vue'
import router from './router'
import useStorage from './composables/storage/useStorage'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')

const baseURL = 'https://laravel.test/api'
const token = useStorage('token')

const instance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token.value}` }
})

window.axios = instance
