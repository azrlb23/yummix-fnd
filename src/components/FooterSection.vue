<script setup>
import { RouterLink } from 'vue-router'

const footerLinks = [
  {
    title: 'Service',
    items: [
      { label: 'Online Order', url: '/menu', isRouter: true }
    ]
  },
  {
    title: 'Quick links',
    items: [
      { label: 'Menu', url: '/menu', isRouter: true },
      { label: 'Reviews', url: '/#review', isRouter: false }
    ]
  },
  {
    title: 'About',
    items: [
      { label: 'Our Story', url: '/#about', isRouter: false }
    ]
  },
  {
    title: 'Help',
    items: [
      { label: 'Contact', url: 'https://wa.me/628981708857?text=Halo%20Yummix,%20saya%20butuh%20bantuan.', isRouter: false },
      { label: 'Support', url: 'mailto:azrielalbian23@gmail.com', isRouter: false },
      { label: 'FAQ', url: '#', isRouter: false }
    ]
  }
]
</script>

<template>
  <footer id="contact" class="w-full pt-20 pb-10 px-6 lg:px-20 bg-[#FFF6E0] text-[#3E2723]">
    
    <div class="max-w-[1300px] mx-auto w-full pl-0 lg:pl-20">
      
      <div class="flex flex-col md:flex-row md:justify-between lg:justify-center items-start gap-12 lg:gap-28 mb-20">
        
        <div class="flex-shrink-0 space-y-8">
          <h2 class="font-potta text-5xl md:text-5xl leading-tight">
            Subscribe Our <br> 
            Newsletter
          </h2>

          <div class="flex gap-4">
            <a 
              href="https://www.instagram.com/yummix.fnd/" 
              target="_blank"
              class="w-10 h-10 bg-[#C62E2E] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>

            <a 
              href="#"
              @click.prevent
              class="w-10 h-10 bg-[#C62E2E] rounded-full flex items-center justify-center text-white shadow-md cursor-default opacity-70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 text-left">
          <div v-for="(section, index) in footerLinks" :key="index" class="space-y-6">
            <h3 class="font-potta text-xl text-[#3E2723]">
              {{ section.title }}
            </h3>
            
            <ul class="space-y-4">
              <li v-for="(item, i) in section.items" :key="i">
                
                <RouterLink 
                  v-if="item.isRouter"
                  :to="item.url" 
                  class="font-market text-[#5D4037] text-l tracking-widest hover:text-[#C62E2E] transition-colors uppercase block cursor-pointer"
                >
                  {{ item.label }}
                </RouterLink>

                <a 
                  v-else
                  :href="item.url" 
                  :target="item.url.startsWith('http') ? '_blank' : '_self'"
                  class="font-market text-[#5D4037] text-l tracking-widest hover:text-[#C62E2E] transition-colors uppercase block cursor-pointer"
                >
                  {{ item.label }}
                </a>

              </li>
            </ul>
          </div>
        </div>

      </div>

      <div class="text-center pt-10">
        <p class="font-market text-[#5D4037] text-xs tracking-widest uppercase">
          COPYRIGHT 2025.
        </p>
      </div>

    </div>
  </footer>
</template>