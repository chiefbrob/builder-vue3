import { createRouter, createWebHistory } from 'vue-router'
import { system } from './system'
import { auth } from './auth'
import useDeepStorage from '@/composables/storage/useDeepStorage'
import useStorage from '@/composables/storage/useStorage'

const routes = [...auth, ...system]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

const user = useDeepStorage('user')
const originalTo = useStorage('original-to-path')

router.beforeEach((to, from, next) => {
  const auth = to.matched[0].meta

  if (auth?.requiresAuth === true || auth?.requiresAdmin === true) {
    if (!user.value) {
      originalTo.value = to.path
      next({ name: 'login' })
    } else {
      if (auth?.requiresAuth === true) {
        next()
      }

      if (auth?.requiresAdmin === true) {
        if (user.value.admin) {
          next()
        } else {
          next({ name: 'welcome' })
        }
      }
    }
  } else {
    if (auth?.requiresGuest === true) {
      if (!user.value) {
        next()
      } else {
        next({ name: 'home' })
      }
    } else {
      next()
    }
  }
})

export default router
