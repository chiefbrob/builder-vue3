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
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/pages/contact/ContactView.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/pages/contact/ContactsView.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/views/errors/ErrorNotFound.vue')
  }
]
