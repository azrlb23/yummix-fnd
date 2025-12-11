<script setup>
import { ref } from 'vue'
import aboutImage from '@/assets/about-image.png' 
import ReviewModal from '@/components/ReviewModal.vue' 

const showReviewModal = ref(false)
</script>

<template>
  <section id="about" class="w-full py-16 lg:py-20 px-6 lg:px-20 bg-[#FFF6E0] relative z-10">
    <div class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center">
      
      <div v-animate class="relative flex justify-center md:justify-start order-1 md:order-1">
        <div class="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[6px] border-white/50 shadow-xl relative z-20">
          <img :src="aboutImage" alt="About Yummix" class="w-full h-full object-cover" />
        </div>
        <div class="absolute -bottom-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-[#FFB300] rounded-full z-10 opacity-50 blur-xl"></div>
      </div>

      <div class="text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-2 relative z-20">
        <h2 v-animate class="font-potta text-3xl md:text-5xl text-[#3E2723] leading-tight">
          Bukan Sekedar <br> Sajian Biasa.
        </h2>

        <p v-animate class="font-poppins text-[#5D4037] text-sm md:text-lg leading-relaxed px-2 md:px-0">
          YUMMIX lahir dari keinginan sederhana: menghadirkan makanan yang praktis, 
          mengenyangkan, dan bikin bahagia. Kami siap menemani keseharianmu.
        </p>

        <div v-animate class="grid grid-cols-2 gap-y-4 gap-x-4 py-4 md:py-6 max-w-xs mx-auto md:mx-0 md:max-w-none">
          <div class="flex items-center gap-2 md:gap-3 justify-start">
            <span class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#BF360C]"></span>
            <span class="font-market text-[#3E2723] text-xs md:text-sm tracking-widest text-left">BAHAN SEGAR</span>
          </div>
          <div class="flex items-center gap-2 md:gap-3 justify-start">
             <span class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#BF360C]"></span>
             <span class="font-market text-[#3E2723] text-xs md:text-sm tracking-widest text-left">HARGA BERSAHABAT</span>
          </div>
          <div class="flex items-center gap-2 md:gap-3 justify-start">
             <span class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#BF360C]"></span>
             <span class="font-market text-[#3E2723] text-xs md:text-sm tracking-widest text-left">SAUS SPESIAL</span>
          </div>
          <div class="flex items-center gap-2 md:gap-3 justify-start">
             <span class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#BF360C]"></span>
             <span class="font-market text-[#3E2723] text-xs md:text-sm tracking-widest text-left">100% HALAL</span>
          </div>
        </div>

        <button 
          @click="showReviewModal = true"
          class="bg-[#BF360C] text-white px-9 py-3 md:px-8 md:py-3.5 rounded-full font-bold text-xs md:text-sm shadow-lg hover:bg-[#9E2B09] transition-all duration-300 active:scale-95 relative z-30 cursor-pointer pointer-events-auto"
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