<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AdminSidebar from '@/components/admin/AdminSidebar.vue'
import AdminHeader from '@/components/admin/AdminHeader.vue' // Import Header Baru

const isSidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen w-full bg-gray-100 flex font-sans relative">
    
    <Transition name="fade">
      <div 
        v-if="isSidebarOpen" 
        class="fixed inset-0 bg-black/50 z-30 lg:hidden"
        @click="isSidebarOpen = false"
      ></div>
    </Transition>

    <AdminSidebar 
      :is-open="isSidebarOpen" 
      @close="isSidebarOpen = false" 
    />

    <main class="flex-1 lg:ml-64 p-4 md:p-8 overflow-y-auto w-full">
      
      <AdminHeader @open-sidebar="isSidebarOpen = true" />

      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
      
    </main>

  </div>
</template>

<style scoped>
.page-enter-active, .page-leave-active { transition: opacity 0.3s ease; }
.page-enter-from, .page-leave-to { opacity: 0; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>