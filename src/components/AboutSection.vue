<script setup>
import { ref } from 'vue'
import aboutImage from '@/assets/about-image.png' 
import ReviewModal from '@/components/ReviewModal.vue' 

// 2. State untuk mengontrol modal
const showReviewModal = ref(false)
</script>

<template>
  <section id="about" class="w-full py-20 px-6 lg:px-20 bg-[#FFF6E0]">
    <div class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
      
      <div v-animate class="relative flex justify-center md:justify-start">
        <div class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[6px] border-white/50 shadow-xl">
          <img :src="aboutImage" alt="About Yummix" class="w-full h-full object-cover" />
        </div>
        <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FFB300] rounded-full -z-10 opacity-50 blur-xl"></div>
      </div>

      <div class="text-left space-y-6">
        <h2 v-animate class="font-potta text-4xl md:text-5xl text-[#3E2723] leading-tight delay-200">
          Bukan Sekedar <br> Sajian Biasa.
        </h2>

        <p v-animate class="font-poppins text-[#5D4037] text-base md:text-lg leading-relaxed delay-300">
          YUMMIX lahir dari keinginan sederhana: menghadirkan makanan yang praktis, 
          mengenyangkan, dan bikin bahagia. Kami siap menemani keseharianmu, 
          mulai dari sarapan cepat hingga teman lembur ngerjain tugas.
        </p>

        <div v-animate class="grid grid-cols-2 gap-y-4 gap-x-8 py-6 delay-500">
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded-full bg-[#BF360C]"></span>
            <span class="font-market text-[#3E2723] text-sm tracking-widest">BAHAN SEGAR</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded-full bg-[#BF360C]"></span>
            <span class="font-market text-[#3E2723] text-sm tracking-widest">HARGA BERSAHABAT</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded-full bg-[#BF360C]"></span>
            <span class="font-market text-[#3E2723] text-sm tracking-widest">SAUS SPESIAL</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-4 h-4 rounded-full bg-[#BF360C]"></span>
            <span class="font-market text-[#3E2723] text-sm tracking-widest">100% HALAL</span>
          </div>
        </div>

        <button 
          @click="showReviewModal = true"
          v-animate
          class="bg-[#BF360C] text-white px-10 py-3 rounded-full font-market text-lg shadow-lg hover:bg-[#9E2B09] hover:scale-105 transition-all text-center delay-700"
        >
          REVIEW
        </button>
      </div>

    </div>

    <ReviewModal 
      :is-open="showReviewModal" 
      @close="showReviewModal = false" 
    />

  </section>
</template>