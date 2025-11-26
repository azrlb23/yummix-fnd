<script setup>
import heroImage from '@/assets/Hero.png'
</script>

<template>
  <section class="relative w-full flex items-center justify-center px-6 lg:px-20 min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-120px)] pb-10 md:pb-20">
    
    <div class="grid md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-20 max-w-7xl mx-auto w-full">
      
      <div class="text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-1">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-black text-[#3E2723] leading-[1.1] tracking-tight">
          Di Setiap Gigitan, <br />
          Ada <span class="text-[#3E2723]">Kebahagiaan.</span>
        </h1>

        <p class="text-[#5D4037] text-sm md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2 md:pt-4">
          <button class="bg-[#BF360C] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold text-xs md:text-sm shadow-lg hover:bg-[#9E2B09] transition-all duration-300">
            EXPLORE MENU
          </button>

          <div class="relative group">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#BF360C]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </span>
            <button class="bg-[#D7CCC8]/50 text-[#3E2723] pl-10 pr-6 py-3 md:pl-10 md:pr-8 md:py-3.5 rounded-full font-bold text-xs md:text-sm hover:bg-[#D7CCC8]/80 transition-colors uppercase">
              Search
            </button>
          </div>
        </div>
      </div>

      <div class="relative flex justify-center md:justify-end order-1 md:order-2">
        <div class="absolute inset-0 bg-[#BF360C] opacity-10 blur-[40px] md:blur-[60px] rounded-full scale-75 translate-y-4"></div>
        <img 
          :src="heroImage" 
          alt="Yummix Food" 
          class="relative w-[280px] md:w-[400px] lg:w-[500px] object-contain drop-shadow-2xl z-10 animate-float"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.animate-float { animation: float 6s ease-in-out infinite; }
</style>