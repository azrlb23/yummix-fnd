import { createRouter, createWebHistory } from 'vue-router'

// Import Layouts
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

// Import Views
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import MenuDetailView from '../views/MenuDetailView.vue'
// ... import admin views lainnya ...
import AdminDashboard from '@/views/admin/DashboardView.vue'
import MenuManagementView from '@/views/admin/MenuManagementView.vue'
import OrderManagementView from '@/views/admin/OrderManagementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 1. RUTE PELANGGAN (Group Customer)
    {
      path: '/',
      component: CustomerLayout, // INDUK: Pakai Layout ini
      children: [
        {
          path: '', // URL: /
          name: 'home',
          component: HomeView,
        },
        {
          path: 'menu', // URL: /menu
          name: 'menu',
          component: MenuView
        },
        {
          path: 'menu/:id', // URL: /menu/1
          name: 'menu-detail',
          component: MenuDetailView
        },
      ]
    },

    // 2. RUTE ADMIN (Group Admin)
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
  // ... scrollBehavior tetap sama ...
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 0 }
    return { top: 0 }
  }
})

export default router