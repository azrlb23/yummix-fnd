<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'
import MenuCard from '@/components/MenuCard.vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

defineProps({
  items: {
    type: Array,
    required: true
  }
})

const modules = [Pagination, Navigation, EffectCoverflow]
</script>

<template>
  <div class="w-full relative px-0 md:px-0 max-w-[1200px]">
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
      class="mySwiper py-8 md:py-12"
    >
      <swiper-slide 
        v-for="item in items" 
        :key="item.id"
        class="max-w-[260px] sm:max-w-[300px] md:max-w-[350px]"
      >
         <MenuCard :item="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow: visible;
}

@media (min-width: 768px) {
  .swiper {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 260px; 
  opacity: 0.5;
  transition: all 0.3s ease;
  transform: scale(0.85);
}

@media (min-width: 768px) {
  .swiper-slide {
    width: 320px;
  }
}

.swiper-slide-active {
  opacity: 1;
  transform: scale(1.05);
  z-index: 10;
}

:deep(.swiper-pagination-bullet) {
  background: #C62E2E;
  opacity: 0.3;
  width: 8px;
  height: 8px;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 10px;
  height: 10px;
}
</style>