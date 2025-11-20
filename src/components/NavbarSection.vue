<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import logoImg from '@/assets/logo-yummix.png'

const navLinks = [
  { name: 'HOME', path: '/', active: true },
  { name: 'MENU', path: '#', active: false },
  { name: 'ABOUT US', path: '#', active: false },
  { name: 'REVIEW', path: '#', active: false },
  { name: 'CONTACT', path: '#', active: false },
]

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="w-full py-8 px-8 lg:px-20 flex items-center justify-between relative z-50">
    
    <div class="flex-shrink-0 cursor-pointer">
      <RouterLink to="/">
        <img :src="logoImg" alt="YUMMIX Logo" class="h-10 md:h-12 w-auto object-contain" />
      </RouterLink>
    </div>

    <div class="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
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

    <div class="hidden md:flex items-center gap-6">
      <button class="text-[#BF360C] hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>

      <button class="bg-[#BF360C] text-white px-6 py-2.5 rounded-full font-bold text-l shadow-md hover:bg-[#9E2B09] transition-all">
        SIGN UP
      </button>
    </div>

    <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-[#BF360C]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

    <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-[#FFF6E0] shadow-xl p-6 flex flex-col gap-4 md:hidden border-t border-[#BF360C]/20">
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.path"
        class="font-bold text-[#BF360C]"
        @click="isMenuOpen = false"
      >
        {{ link.name }}
      </RouterLink>
    </div>
  </nav>
</template>