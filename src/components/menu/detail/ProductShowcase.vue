<script setup>
import { useRouter } from 'vue-router'

defineProps({
  item: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const goBack = () => router.push('/menu')
</script>

<template>
  <div class="md:w-1/2 bg-[#F2F0E4] flex items-center justify-center p-10 relative">
    <button 
      @click="goBack" 
      class="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#3E2723] shadow-md hover:scale-110 transition-transform z-10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
    </button>
    
    <div class="relative w-full h-[300px] md:h-[400px]">
       <div class="absolute inset-0 bg-[#C62E2E]/10 rounded-full blur-3xl scale-75"></div>
       <img 
         :src="item.img" 
         :alt="item.name" 
         class="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
       >
    </div>
  </div>
</template>