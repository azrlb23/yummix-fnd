<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMenuStore } from '@/stores/menu'

import ProductShowcase from '@/components/menu/detail/ProductShowcase.vue'
import ProductInfo from '@/components/menu/detail/ProductInfo.vue'

const route = useRoute()
const router = useRouter()
const menuStore = useMenuStore()

// Ambil ID dari URL
const itemId = route.params.id

// Cari item di store
const item = computed(() => menuStore.getItemById(itemId))

const goBack = () => router.push('/menu')
</script>

<template>
  <div class="w-full bg-[#FFF6E0] flex flex-col font-sans">

    <main class="flex-grow flex items-center justify-center py-12 px-6">
      
      <div 
        v-if="item" 
        class="max-w-5xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] animate-fade-up"
      >
        <ProductShowcase :item="item" />

        <ProductInfo :item="item" />
      </div>
      
      <div v-else class="text-center space-y-4">
        <h2 class="font-potta text-2xl text-[#3E2723]">Menu tidak ditemukan :(</h2>
        <p class="text-gray-500">Mungkin menu ini sudah dihapus atau link salah.</p>
        <button @click="goBack" class="underline text-[#C62E2E] font-bold">Kembali ke Menu</button>
      </div>

    </main>

  </div>
</template>

<style scoped>
.animate-fade-up { 
  animation: fadeUp 0.6s ease-out; 
}

@keyframes fadeUp { 
  from { opacity: 0; transform: translateY(30px); } 
  to { opacity: 1; transform: translateY(0); } 
}
</style>