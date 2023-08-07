export const system = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('@/views/pages/WelcomeView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/errors/ErrorNotFound.vue')
  }
]
