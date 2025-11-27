import { createRouter, createWebHistory } from 'vue-router'

import CustomerLayout from '@/layouts/CustomerLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import MenuDetailView from '../views/MenuDetailView.vue'
import AdminDashboard from '@/views/admin/DashboardView.vue'
import MenuManagementView from '@/views/admin/MenuManagementView.vue'
import OrderManagementView from '@/views/admin/OrderManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CustomerLayout, 
      children: [
        { path: '', name: 'home', component: HomeView },
        { path: 'menu', name: 'menu', component: MenuView },
        { path: 'menu/:id', name: 'menu-detail',component: MenuDetailView }
      ]
    },

    {
      path: '/admin',
      component: AdminLayout,
      children: [
        { path: '', name: 'admin-dashboard', component: AdminDashboard },
        { path: 'menu', name: 'admin-menu', component: MenuManagementView },
        { path: 'orders', name: 'admin-orders', component: OrderManagementView }
      ]
    }
  ],
  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 0 }
    return { top: 0 }
  }
})

export default router