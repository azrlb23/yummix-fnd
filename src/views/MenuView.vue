<script setup>
import { ref, computed, watch } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useMenuStore } from '@/stores/menu' // Import Menu Store

// Import Components
import SubCategoryFilter from '@/components/menu/SubCategoryFilter.vue'
import MenuCarousel from '@/components/menu/MenuCarousel.vue'
import CategoryToggle from '@/components/menu/CategoryToggle.vue'

const cartStore = useCartStore()
const menuStore = useMenuStore() // Gunakan Menu Store

// State
const activeCategory = ref('FOOD')
const activeSubFilter = ref('ALL')

// Logic Data (Sekarang mengambil dari Store)
const currentItems = computed(() => {
  // Filter item dari store berdasarkan kategori aktif (FOOD/DRINKS)
  return menuStore.items.filter(item => item.category === activeCategory.value)
})

const subCategories = computed(() => {
  const types = currentItems.value.map(item => item.type)
  return ['ALL', ...new Set(types)]
})

const filteredCarouselItems = computed(() => {
  if (activeSubFilter.value === 'ALL') return currentItems.value
  return currentItems.value.filter(item => item.type === activeSubFilter.value)
})

watch(activeCategory, () => {
  activeSubFilter.value = 'ALL'
})
</script>

<template>
  <div class="w-full bg-[#FFF6E0] flex flex-col font-sans">
    <main class="flex-grow flex flex-col items-center justify-center py-6 md:py-10 relative overflow-hidden">
      
      <SubCategoryFilter 
        :sub-categories="subCategories"
        :active-filter="activeSubFilter"
        @update:filter="activeSubFilter = $event"
      />

      <MenuCarousel :items="filteredCarouselItems" />

      <div class="mt-6 md:mt-8 flex flex-col items-center gap-6 relative z-10">
        <CategoryToggle v-model="activeCategory" />
        <div>
          <button 
            @click="cartStore.isCheckoutOpen = true"
            class="bg-[#C62E2E] text-white px-8 py-3 md:px-10 md:py-3 rounded-full font-market text-base md:text-lg tracking-widest shadow-lg hover:bg-[#9E2222] transition-transform hover:-translate-y-1 active:scale-95"
          >
            ORDER NOW
          </button>
        </div>
      </div>

      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-gradient-to-b from-[#FFF6E0] to-[#FFE0B2]/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </main>
  </div>
</template>