<script setup>
import { RouterLink } from 'vue-router'

// Menerima status apakah sidebar sedang terbuka (untuk mobile)
defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const adminLinks = [
  { name: 'Dashboard', path: '/admin' },
  { name: 'Manajemen Menu', path: '/admin/menu' },
  { name: 'Pesanan Masuk', path: '/admin/orders' },
  { name: 'Logout', path: '/' } 
]
</script>

<template>
  <aside 
    class="w-64 bg-[#C62E2E] text-white flex flex-col fixed h-full shadow-xl z-40 transition-transform duration-300 ease-in-out"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <div class="p-6 flex items-center justify-between lg:justify-center border-b border-white/10">
      <h1 class="font-potta text-2xl tracking-widest">ADMIN</h1>
      
      <button @click="emit('close')" class="lg:hidden text-white">
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
        @click="emit('close')" 
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
</template>