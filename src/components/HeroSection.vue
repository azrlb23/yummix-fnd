<script setup>
import heroImage from '@/assets/Hero.png'
</script>

<template>
  <section class="relative w-full min-h-[calc(100vh-120px)] flex items-center justify-center px-6 lg:px-20 pb-8 pt-4">
    <div v-animate class="grid md:grid-cols-2 items-center gap-12 lg:gap-20 max-w-7xl mx-auto w-full delay-200">
      
      <div class="text-left space-y-6 order-2 md:order-1">
        <h1 class="text-4xl md:text-4xl lg:text-6xl font-black text-[#3E2723] leading-[1.1] tracking-tight">
          Di Setiap Gigitan, <br />
          Ada <span class="text-[#3E2723]">Kebahagiaan.</span>
        </h1>

        <p class="text-[#5D4037] text-base md:text-lg leading-relaxed max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </p>

        <div class="flex flex-wrap items-center gap-4 pt-4">
          <button class="bg-[#BF360C] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg hover:bg-[#9E2B09] hover:-translate-y-1 transition-all duration-300">
            EXPLORE MENU
          </button>

          <div class="relative group">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#BF360C]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </span>
            <button class="bg-[#D7CCC8]/50 text-[#3E2723] pl-10 pr-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#D7CCC8]/80 transition-colors uppercase">
              Search
            </button>
          </div>
        </div>
      </div>

      <div class="relative flex justify-center md:justify-end order-1 md:order-2">
        <div class="absolute inset-0 bg-[#BF360C] opacity-10 blur-[60px] rounded-full scale-75 translate-y-4"></div>
        
        <img
          :src="heroImage"
          alt="Yummix Food"
          class="relative w-full max-w-[350px] md:max-w-[1000px] object-contain drop-shadow-2xl z-10 animate-float"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi floating halus agar gambar terlihat hidup */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>