<script setup>
import { ref, computed } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

// Import Components
import NavbarSection from '@/components/NavbarSection.vue'
import FooterSection from '@/components/FooterSection.vue'

// Import Images
import noodlesImg from '@/assets/Noodles.png'
import kebabImg from '@/assets/Kebab.png'
import toastImg from '@/assets/Toast.png'
import squashImg from '@/assets/Squash.png'
import nonCoffeeImg from '@/assets/Non-Coffee.png'

// --- STATE & DATA ---
const activeCategory = ref('FOOD')
const activeSubFilter = ref('ALL')

const menuItems = {
  FOOD: [
    { id: 1, name: 'Spicy Noodles', price: 'RP 15.000', type: 'NOODLES', img: noodlesImg },
    { id: 2, name: 'Beef Kebab', price: 'RP 20.000', type: 'KEBAB', img: kebabImg },
    { id: 3, name: 'Choco Toast', price: 'RP 12.000', type: 'TOAST', img: toastImg },
    { id: 4, name: 'Chicken Kebab', price: 'RP 18.000', type: 'KEBAB', img: kebabImg },
    { id: 5, name: 'Cheese Toast', price: 'RP 14.000', type: 'TOAST', img: toastImg },
  ],
  DRINKS: [
    { id: 6, name: 'Lemon Squash', price: 'RP 10.000', type: 'SQUASH', img: squashImg },
    { id: 7, name: 'Taro Milk', price: 'RP 15.000', type: 'NON-COFFEE', img: nonCoffeeImg },
    { id: 8, name: 'Orange Squash', price: 'RP 10.000', type: 'SQUASH', img: squashImg },
    { id: 9, name: 'Matcha Latte', price: 'RP 18.000', type: 'NON-COFFEE', img: nonCoffeeImg },
    { id: 10, name: 'Berry Squash', price: 'RP 12.000', type: 'SQUASH', img: squashImg },
  ]
}

// --- COMPUTED ---
const currentItems = computed(() => menuItems[activeCategory.value])

const subCategories = computed(() => {
  const types = currentItems.value.map(item => item.type)
  return ['ALL', ...new Set(types)]
})

const filteredCarouselItems = computed(() => {
  if (activeSubFilter.value === 'ALL') return currentItems.value
  return currentItems.value.filter(item => item.type === activeSubFilter.value)
})

// --- SWIPER MODULES ---
const modules = [Pagination, Navigation, EffectCoverflow]

const setCategory = (cat) => {
  activeCategory.value = cat
  activeSubFilter.value = 'ALL'
}
</script>

<template>
  <div class="min-h-screen w-full bg-[#FFF6E0] flex flex-col font-sans">
    <NavbarSection />

    <main class="flex-grow flex flex-col items-center justify-center py-10 relative overflow-hidden">
      
      <!-- 1. SUB-CATEGORY TABS -->
      <div class="flex flex-wrap justify-center gap-4 mb-8 relative z-10 px-4">
        <button 
          v-for="sub in subCategories" 
          :key="sub"
          @click="activeSubFilter = sub"
          class="px-6 py-2 rounded-full font-market text-sm tracking-wider uppercase transition-all border-2"
          :class="activeSubFilter === sub 
            ? 'bg-[#C62E2E] text-white border-[#C62E2E]' 
            : 'bg-transparent text-[#C62E2E] border-[#C62E2E] hover:bg-[#C62E2E]/10'"
        >
          {{ sub }}
        </button>
      </div>

      <!-- 2. SWIPER CAROUSEL (Implemented based on your HTML structure) -->
      <div class="w-full relative px-4 md:px-0 max-w-[1200px]">
        <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :modules="modules"
          :initialSlide="1"
          class="mySwiper py-12"
        >
          <swiper-slide 
            v-for="item in filteredCarouselItems" 
            :key="item.id"
            class="max-w-[300px] sm:max-w-[350px]"
          >
            <!-- CARD CONTENT -->
            <div class="bg-[#D94436] rounded-[2.5rem] h-[320px] w-full relative flex flex-col justify-end pb-8 shadow-xl transition-transform duration-500 menu-card">
              
              <!-- Image Floating -->
              <div class="absolute -top-20 left-1/2 transform -translate-x-1/2 w-56 h-56 transition-all duration-500 z-20">
                <img :src="item.img" :alt="item.name" class="w-full h-full object-contain drop-shadow-2xl filter contrast-110">
              </div>

              <!-- Text Content -->
              <div class="text-center text-white px-6 z-10">
                <h3 class="font-potta text-2xl tracking-wide mb-1">{{ item.name }}</h3>
                <p class="font-market text-xs tracking-widest opacity-90 uppercase mb-3">{{ item.type }}</p>
                <p class="font-market text-xl mb-6">{{ item.price }}</p>
                
                <!-- Action Buttons -->
                <div class="flex justify-center gap-4">
                  <button class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#D94436] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>
                  </button>
                  <button class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#D94436] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                  </button>
                </div>
              </div>

            </div>
          </swiper-slide>
        </swiper>
        
        <!-- Custom Pagination Styling handled by CSS below -->
      </div>

      <!-- 3. BOTTOM CONTROLS -->
      <div class="mt-8 flex flex-col items-center gap-8 relative z-10">
        <!-- Toggle -->
        <div class="bg-[#C62E2E] p-1.5 rounded-full flex shadow-lg">
          <button 
            @click="setCategory('FOOD')"
            class="px-8 py-2.5 rounded-full font-market tracking-widest transition-all text-sm md:text-base"
            :class="activeCategory === 'FOOD' ? 'bg-white text-[#C62E2E]' : 'text-white hover:bg-white/20'"
          >
            FOOD
          </button>
          <button 
            @click="setCategory('DRINKS')"
            class="px-8 py-2.5 rounded-full font-market tracking-widest transition-all text-sm md:text-base"
            :class="activeCategory === 'DRINKS' ? 'bg-white text-[#C62E2E]' : 'text-white hover:bg-white/20'"
          >
            DRINKS
          </button>
        </div>

        <!-- Order Btn -->
        <div class="flex items-center gap-6">
          <button class="text-[#C62E2E] hover:scale-110 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-9">
               <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
             </svg>
          </button>
          <button class="bg-[#C62E2E] text-white px-10 py-3.5 rounded-full font-market text-lg tracking-widest shadow-lg hover:bg-[#9E2222] transition-colors hover:-translate-y-1">
            ORDER NOW
          </button>
        </div>
      </div>

      <!-- Background Decor -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-gradient-to-b from-[#FFF6E0] to-[#FFE0B2]/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>

    </main>

    <FooterSection />
  </div>
</template>

<style scoped>
/* Konfigurasi Swiper Slide */
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  overflow: visible; /* Agar bayangan/gambar yang keluar tidak terpotong */
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 320px;
  /* Efek Blur/Opacity untuk item yang tidak aktif */
  opacity: 0.5;
  transition: all 0.3s ease;
  transform: scale(0.85); /* Mengecil jika tidak aktif */
}

/* Item yang AKTIF (Tengah) */
.swiper-slide-active {
  opacity: 1;
  transform: scale(1.05); /* Sedikit membesar */
  z-index: 10;
}

/* Modifikasi Pagination Dots Swiper */
:deep(.swiper-pagination-bullet) {
  background: #C62E2E;
  opacity: 0.3;
  width: 10px;
  height: 10px;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 12px;
  height: 12px;
}

/* Agar gambar bisa 'nongol' keluar dari kartu */
.menu-card {
  overflow: visible;
}
</style>