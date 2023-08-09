export const auth = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue')
  },
  {
    path: '/password/reset',
    name: 'password-reset',
    component: () => import('@/views/auth/PasswordResetView.vue')
  }
]
