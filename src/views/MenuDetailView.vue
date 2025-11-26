<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const router = useRouter()
const menuStore = useMenuStore()
const cartStore = useCartStore()

// Ambil ID dari URL (misal /menu/1)
const itemId = route.params.id

// Cari item di store
const item = computed(() => menuStore.getItemById(itemId))

// Fungsi Tambah ke Keranjang
const addToCart = () => {
  if (item.value) {
    cartStore.addItem(item.value)
    cartStore.isCheckoutOpen = true // Opsional: Langsung buka keranjang
  }
}

// Fungsi Kembali
const goBack = () => router.push('/menu')
</script>

<template>
  <div class="w-full bg-[#FFF6E0] flex flex-col font-sans">

    <main class="flex-grow flex items-center justify-center py-12 px-6">
      
      <div v-if="item" class="max-w-5xl w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] animate-fade-up">
        
        <div class="md:w-1/2 bg-[#F2F0E4] flex items-center justify-center p-10 relative">
          <button @click="goBack" class="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#3E2723] shadow-md hover:scale-110 transition-transform z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
          </button>
          
          <div class="relative w-full h-[300px] md:h-[400px]">
             <div class="absolute inset-0 bg-[#C62E2E]/10 rounded-full blur-3xl scale-75"></div>
             <img :src="item.img" :alt="item.name" class="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500">
          </div>
        </div>

        <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
          
          <div class="mb-6">
            <span class="bg-[#C62E2E] text-white px-3 py-1 rounded-full text-xs font-market tracking-widest uppercase">
              {{ item.category }} / {{ item.type }}
            </span>
          </div>

          <h1 class="font-potta text-[#3E2723] text-4xl md:text-5xl mb-4 leading-tight">
            {{ item.name }}
          </h1>

          <div class="flex items-center gap-4 mb-6">
            <p class="font-market text-[#C62E2E] text-2xl md:text-3xl">
              {{ menuStore.formatPrice(item.price) }}
            </p>
            <div class="flex items-center gap-1 text-yellow-500 text-sm font-bold">
              <span>★</span><span>{{ item.rating }}</span>
            </div>
          </div>

          <p class="font-poppins text-[#5D4037] text-base leading-relaxed mb-8">
            {{ item.description }}
          </p>

          <div class="grid grid-cols-3 gap-4 mb-8 border-t border-b border-gray-100 py-4">
            <div class="text-center">
              <span class="block font-bold text-[#3E2723]">Kalori</span>
              <span class="text-xs text-gray-500">{{ item.calories }}</span>
            </div>
            <div class="text-center border-l border-gray-100">
              <span class="block font-bold text-[#3E2723]">Waktu</span>
              <span class="text-xs text-gray-500">15 Min</span>
            </div>
            <div class="text-center border-l border-gray-100">
              <span class="block font-bold text-[#3E2723]">Porsi</span>
              <span class="text-xs text-gray-500">1 Orang</span>
            </div>
          </div>

          <div class="flex gap-4">
            <button @click="addToCart" class="flex-1 bg-[#C62E2E] text-white py-3.5 rounded-full font-market text-lg shadow-lg hover:bg-[#9E2222] transition-transform active:scale-95 tracking-widest">
              ADD TO CART
            </button>
            <button class="w-14 h-14 rounded-full border-2 border-[#C62E2E] flex items-center justify-center text-[#C62E2E] hover:bg-[#C62E2E] hover:text-white transition-colors">
              ♥
            </button>
          </div>

        </div>

      </div>
      
      <div v-else class="text-center">
        <h2 class="font-potta text-2xl">Menu tidak ditemukan :(</h2>
        <button @click="goBack" class="mt-4 underline text-[#C62E2E]">Kembali ke Menu</button>
      </div>

    </main>

  </div>
</template>

<style scoped>
.animate-fade-up { animation: fadeUp 0.6s ease-out; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>