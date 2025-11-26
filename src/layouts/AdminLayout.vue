<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isSidebarOpen = ref(false)

const adminLinks = [
  { name: 'Dashboard', path: '/admin' },
  { name: 'Manajemen Menu', path: '/admin/menu' },
  { name: 'Pesanan Masuk', path: '/admin/orders' },
  { name: 'Logout', path: '/' } 
]
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

    <aside 
      class="w-64 bg-[#C62E2E] text-white flex flex-col fixed h-full shadow-xl z-40 transition-transform duration-300 ease-in-out"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
    >
      <div class="p-6 flex items-center justify-between lg:justify-center border-b border-white/10">
        <h1 class="font-potta text-2xl tracking-widest">ADMIN</h1>
        <button @click="isSidebarOpen = false" class="lg:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav class="flex-grow p-4 space-y-2 overflow-y-auto">
        <RouterLink 
          v-for="link in adminLinks" 
          :key="link.path" 
          :to="link.path"
          @click="isSidebarOpen = false" 
          class="block px-4 py-3 rounded-lg font-market text-sm tracking-widest transition-colors hover:bg-white/10"
          active-class="bg-white text-[#C62E2E]"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <div class="p-4 text-center text-xs font-market opacity-50">
        YUMMIX ADMIN v1.0
      </div>
    </aside>

    <main class="flex-1 lg:ml-64 p-4 md:p-8 overflow-y-auto w-full">
      
      <header class="mb-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm lg:bg-transparent lg:shadow-none lg:p-0">
        
        <div class="flex items-center gap-4">
          <button @click="isSidebarOpen = true" class="lg:hidden text-[#3E2723]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-7 h-7">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <h2 class="font-potta text-[#3E2723] text-xl md:text-3xl">
            Control Panel
          </h2>
        </div>

        <div class="flex items-center gap-3">
           <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#3E2723] text-white flex items-center justify-center font-bold text-xs md:text-base">A</div>
           <span class="font-market text-[#3E2723] hidden md:inline">Admin User</span>
        </div>
      </header>

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