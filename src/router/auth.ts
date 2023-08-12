export const auth = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/password/reset',
    name: 'password-reset',
    component: () => import('@/views/auth/PasswordResetView.vue'),
    meta: {
      requiresGuest: true
    }
  }
]
