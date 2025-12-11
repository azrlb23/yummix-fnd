<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // 1. Import Router
import heroImage from '@/assets/Hero.png'

const router = useRouter() // 2. Initialize Router
const searchQuery = ref('') // 3. Variable for search input

// Function for Explore Menu
const goToMenu = () => {
  router.push('/menu')
}

// Function for Search
// const handleSearch = () => {
//   // Navigate to menu with query parameter
//   // Example result: /menu?q=kebab
//   router.push({ path: '/menu', query: { q: searchQuery.value } })
// }
</script>

<template>
  <section class="relative w-full flex items-center justify-center px-6 lg:px-20 min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-120px)] pb-10 md:pb-20">
    
    <div class="grid md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-20 max-w-7xl mx-auto w-full">
      
      <div class="text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-1">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-black text-[#3E2723] leading-[1.1] tracking-tight">
          Di Setiap Gigitan, Ada Kebahagiaan.<br />
        </h1>

        <p class="text-[#5D4037] text-sm md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          YUMMIX lahir dari keinginan sederhana: menghadirkan makanan yang praktis, 
          mengenyangkan, dan bikin bahagia. Kami siap menemani keseharianmu.
        </p>

        <div class="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2 md:pt-4">
          
          <button 
            @click="goToMenu"
            class="bg-[#BF360C] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold text-xs md:text-sm shadow-lg hover:bg-[#9E2B09] transition-all duration-300 active:scale-95"
          >
            EXPLORE MENU
          </button>

          <div class="relative group flex items-center">
            <!-- <span class="absolute left-4 text-[#BF360C] z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </span> -->
            
            <!-- <input 
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              type="text" 
              placeholder="Search..." 
              class="bg-[#D7CCC8]/50 text-[#3E2723] pl-10 pr-4 py-3 md:py-3.5 rounded-l-full font-bold text-xs md:text-sm focus:outline-none placeholder-[#3E2723]/50 w-32 md:w-48 transition-all"
            /> -->
            
            <!-- <button 
              @click="handleSearch"
              class="bg-[#D7CCC8] text-[#3E2723] px-4 py-3 md:py-3.5 rounded-r-full font-bold text-xs md:text-sm hover:bg-[#Cbb8b3] transition-colors uppercase"
            >
              GO
            </button> -->
          </div>

        </div>
      </div>

      <div class="relative flex justify-center md:justify-end order-1 md:order-2">
        <div class="absolute inset-0 bg-[#BF360C] opacity-10 blur-[40px] md:blur-[60px] rounded-full scale-75 translate-y-4"></div>
        <img 
          :src="heroImage" 
          alt="Yummix Food" 
          class="relative w-[400px] md:w-[600px] lg:w-[500px] object-contain drop-shadow-2xl z-10 animate-float"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.animate-float { animation: float 6s ease-in-out infinite; }
</style>