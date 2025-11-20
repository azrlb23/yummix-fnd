import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/HomeView.vue') 
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 0 
      }
    }

    return { top: 0 }
  }
})

export default router