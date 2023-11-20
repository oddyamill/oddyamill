import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
