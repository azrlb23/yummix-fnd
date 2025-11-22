<script setup>
import { defineProps } from 'vue'
import { useCartStore } from '@/stores/cart' // 1. Import Store Pinia

// Menerima data item dari MenuView
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

// 2. Inisialisasi Store
const cartStore = useCartStore()

// 3. Fungsi Tambah ke Keranjang
const addToCart = () => {
  cartStore.addItem(props.item)
}
</script>

<template>
  <div class="bg-[#D94436] rounded-[2.5rem] h-[420px] w-full relative flex flex-col justify-end pb-8 shadow-xl transition-transform duration-500 menu-card">
    
    <div class="absolute -top-20 left-1/2 transform -translate-x-1/2 w-56 h-56 transition-all duration-500 z-20">
      <img 
        :src="item.img" 
        :alt="item.name" 
        class="w-full h-full object-contain drop-shadow-2xl filter contrast-110"
      >
    </div>

    <div class="text-center text-white px-6 z-10">
      <h3 class="font-potta text-2xl tracking-wide mb-1">{{ item.name }}</h3>
      <p class="font-market text-xs tracking-widest opacity-90 uppercase mb-3">{{ item.type }}</p>
      <p class="font-market text-xl mb-6">{{ item.price }}</p>
      
      <div class="flex justify-center gap-4">
        
        <button class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#D94436] transition-colors cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </button>
        
        <button 
          @click="addToCart"
          class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#D94436] transition-colors cursor-pointer active:scale-90"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>

      </div>
    </div>

  </div>
</template>

<style scoped>
/* Style ini penting agar gambar yang 'floating' tidak terpotong */
.menu-card {
  overflow: visible; 
}
</style>