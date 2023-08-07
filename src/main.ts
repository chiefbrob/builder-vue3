import './assets/main.css'
import axios from 'axios'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/scss/style.scss'
import 'bootstrap'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const instance = axios.create({
  baseURL: 'https://laravel.test/api/',
  headers: { 'X-Custom-Header': 'foobar' }
})

window.axios = instance
