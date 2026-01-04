<script setup>
import { useCartStore } from '@/stores/cart'
import { useMenuStore } from '@/stores/menu'
import { useToastStore } from '@/stores/toast'
import NutritionGrid from '@/components/menu/detail/NutritionGrid.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
const menuStore = useMenuStore()
const toastStore = useToastStore()

const addToCart = () => {
  cartStore.addItem(props.item)
  cartStore.isCheckoutOpen = true // Buka modal cart
  toastStore.showToast(`${props.item.name} DITAMBAHKAN!`)
}
</script>

<template>
  <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
    
    <div class="mb-6">
      <span class="bg-[#C62E2E] text-white px-3 py-1 rounded-full text-xs font-market tracking-widest uppercase">
        {{ item.category }} / {{ item.type }}
      </span>
    </div>

    <h1 class="font-potta text-[#3E2723] text-4xl md:text-5xl mb-4 leading-tight">
      {{ item.name }}
    </h1>

    <div class="flex items-center gap-4 mb-6">
      <p class="font-market text-[#C62E2E] text-2xl md:text-3xl">
        {{ menuStore.formatPrice(item.price) }}
      </p>
      <div class="flex items-center gap-1 text-yellow-500 text-sm font-bold">
        <span>★</span><span>{{ item.rating }}</span>
      </div>
    </div>

    <p class="font-poppins text-[#5D4037] text-base leading-relaxed mb-8">
      {{ item.description }}
    </p>

    <NutritionGrid :calories="item.calories" />

    <div class="flex gap-4">
      <button 
        @click="addToCart" 
        class="flex-1 bg-[#C62E2E] text-white py-3.5 rounded-full font-market text-lg shadow-lg hover:bg-[#9E2222] transition-transform active:scale-95 tracking-widest"
      >
        ADD TO CART
      </button>
    </div>

  </div>
</template>