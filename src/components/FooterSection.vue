<script setup>
const footerLinks = [
  {
    title: 'Service',
    items: ['Online Order', 'Pre-Reservation']
  },
  {
    title: 'Quick links',
    items: ['Menu', 'Reviews', 'Blogs']
  },
  {
    title: 'About',
    items: ['Our Story', 'Benefits', 'Career', 'Our Chefs']
  },
  {
    title: 'Help',
    items: ['Contact', 'Support', 'FAQ']
  }
]
</script>

<template>
  <footer id="contact" class="w-full pt-16 pb-10 px-6 lg:px-20 bg-[#FFF6E0] text-[#3E2723]">
    
    <div class="max-w-[1200px] mx-auto w-full lg:pl-10 text-center lg:text-left">
      
      <div class="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-20 mb-16">
        
        <div class="flex flex-col items-center lg:items-start space-y-6 lg:w-auto w-full">
          <h2 class="font-potta text-3xl md:text-5xl leading-tight">
            Subscribe Our <br class="hidden lg:block"> 
            Newsletter
          </h2>

          <div class="flex items-center border-b border-[#5D4037] py-2 w-full max-w-[300px] mx-auto lg:mx-0">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              class="appearance-none bg-transparent border-none w-full text-[#5D4037] font-market tracking-widest text-sm placeholder-[#5D4037]/60 focus:outline-none text-center lg:text-left"
            >
            <button class="flex-shrink-0 bg-[#F59E0B] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#D97706] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          <div class="flex gap-4 justify-center lg:justify-start">
            <a href="#" class="w-10 h-10 bg-[#C62E2E] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" class="w-10 h-10 bg-[#C62E2E] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 w-full lg:w-auto">
          
          <div v-for="(section, index) in footerLinks" :key="index" class="space-y-4">
            <h3 class="font-potta text-lg md:text-xl text-[#3E2723]">
              {{ section.title }}
            </h3>
            
            <ul class="space-y-3">
              <li v-for="(item, i) in section.items" :key="i">
                <a href="#" class="font-market text-[#5D4037] text-xs md:text-sm tracking-widest hover:text-[#C62E2E] transition-colors uppercase block">
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <div class="text-center pt-10 border-t border-[#3E2723]/10 lg:border-none">
        <p class="font-market text-[#5D4037] text-[10px] md:text-xs tracking-widest uppercase">
          COPYRIGHT 2025.
        </p>
      </div>

    </div>
  </footer>
</template>