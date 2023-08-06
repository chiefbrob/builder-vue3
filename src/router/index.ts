import { createRouter, createWebHistory } from 'vue-router'
import { system } from './system'
import { auth } from './auth'

const routes = [...auth, ...system]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
