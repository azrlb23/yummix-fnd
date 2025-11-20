<script setup>
import aboutImage from '@/assets/about-image.png' 
</script>

<template>
  <section id="about" class="w-full py-20 px-6 lg:px-20 bg-[#FFF6E0] pb-50">
    <div class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center delay-200">
      
      <div v-animate class="relative flex justify-center md:justify-start">
        <div class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-xl">
          <img 
            :src="aboutImage" 
            alt="About Yummix" 
            class="w-full h-full object-cover"
          />
        </div>
        
        <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FFB300] rounded-full -z-10 opacity-50 blur-xl"></div>
      </div>

      <div v-animate class="text-left space-y-6">
        <h2 class="font-potta text-4xl md:text-5xl text-[#3E2723] leading-tight">
          Bukan Sekedar <br>
          Sajian Biasa.
        </h2>

        <p class="font-poppins text-[#5D4037] text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        <div class="grid grid-cols-2 gap-y-4 gap-x-8 py-4">
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded-full bg-gray-300"></span>
            <span class="font-market text-[#3E2723] text-sm tracking-widest">BAHAN SEGAR</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded-full bg-gray-300"></span>
            <span class="font-market text-[#3E2723] text-sm tracking-widest">Resep Saus Spesial</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded-full bg-gray-300"></span>
            <span class="font-market text-[#3E2723] text-sm tracking-widest">Roti Lembut</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded-full bg-gray-300"></span>
            <span class="font-market text-[#3E2723] text-sm tracking-widest">Halal & Higienis</span>
          </div>
        </div>

        <button class="bg-[#BF360C] text-white px-10 py-3 rounded-full font-market text-lg shadow-lg hover:bg-[#9E2B09] hover:scale-105 transition-all">
          REVIEW
        </button>
      </div>

    </div>
  </section>
</template>