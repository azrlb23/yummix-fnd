<script setup>
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import logoImg from '@/assets/logo-yummix.png'
import { useCartStore } from '@/stores/cart'
import CheckoutModal from '@/components/CheckoutModal.vue'

const cartStore = useCartStore()
const isMenuOpen = ref(false)
const isCartBumping = ref(false)

watch(() => cartStore.totalItems, (newVal, oldVal) => {
  if (newVal > oldVal) {
    isCartBumping.value = true
    setTimeout(() => {
      isCartBumping.value = false
    }, 300)
  }
})

const navLinks = [
  { name: 'HOME', path: '/' }, 
  { name: 'MENU', path: '/menu' }, 
  { name: 'ABOUT US', path: '/#about' }, 
  { name: 'CONTACT', path: '/#contact' }, 
]

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="w-full py-4 md:py-6 px-6 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-[100] bg-[#FFF6E0]/95 backdrop-blur-md transition-all duration-300">
    
    <div class="flex-shrink-0 cursor-pointer z-[101]">
      <RouterLink to="/">
        <img :src="logoImg" alt="YUMMIX Logo" class="h-10 md:h-12 w-auto object-contain" />
      </RouterLink>
    </div>

    <div class="hidden xl:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        class="font-bold text-sm tracking-wide transition-colors text-xl"
        :class="link.active ? 'text-[#FFB300]' : 'text-[#BF360C] hover:text-[#FFB300]'"
      >
        {{ link.name }}
      </RouterLink>
    </div>

    <div class="hidden md:flex items-center gap-4 lg:gap-6 mr-12 xl:mr-0">
      
      <button 
        @click="cartStore.isCheckoutOpen = true"
        class="relative text-[#BF360C] transition-transform"
        :class="{ 'scale-125': isCartBumping, 'hover:scale-110': !isCartBumping }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-7 lg:size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <span 
          v-if="cartStore.totalItems > 0" 
          class="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#FFF6E0]"
        >
          {{ cartStore.totalItems }}
        </span>
      </button>

      <button class="bg-[#BF360C] text-white px-5 py-2 lg:px-6 lg:py-2.5 rounded-full font-bold text-sm lg:text-l shadow-md hover:bg-[#9E2B09] transition-all">
        SIGN UP
      </button>
    </div>

    <button @click="isMenuOpen = true" class="xl:hidden text-[#BF360C] z-[101]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="isMenuOpen" 
          class="fixed inset-0 bg-black/50 z-[999] backdrop-blur-sm"
          @click="closeMenu"
        ></div>
      </Transition>

      <Transition name="slide-right">
        <div 
          v-if="isMenuOpen" 
          class="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-[#FFF6E0] z-[1000] shadow-2xl p-8 flex flex-col"
        >
          <div class="flex justify-end mb-8">
            <button @click="closeMenu" class="text-[#BF360C] hover:rotate-90 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex flex-col gap-6 items-center">
            <RouterLink 
              v-for="link in navLinks" 
              :key="link.name" 
              :to="link.path" 
              class="font-potta text-2xl text-[#3E2723] hover:text-[#BF360C] transition-colors"
              @click="closeMenu"
            >
              {{ link.name }}
            </RouterLink>

            <hr class="w-full border-[#3E2723]/20 my-2">

            <div class="flex flex-col gap-4 w-full md:hidden">
              <button 
                @click="cartStore.isCheckoutOpen = true; closeMenu()"
                class="flex items-center justify-center gap-2 w-full py-3 border-2 border-[#BF360C] rounded-full text-[#BF360C] font-bold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-5">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                CART ({{ cartStore.totalItems }})
              </button>
              
              <button class="w-full py-3 bg-[#BF360C] text-white rounded-full font-bold shadow-md">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <CheckoutModal 
      :is-open="cartStore.isCheckoutOpen" 
      @close="cartStore.isCheckoutOpen = false" 
    />

  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>