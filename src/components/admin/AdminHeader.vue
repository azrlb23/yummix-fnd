<script setup>
// Emit event untuk membuka sidebar di mobile
const emit = defineEmits(['open-sidebar'])
</script>

<template>
  <header class="mb-8 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm lg:bg-transparent lg:shadow-none lg:p-0">
    
    <div class="flex items-center gap-4">
      <button @click="emit('open-sidebar')" class="lg:hidden text-[#3E2723] hover:text-[#C62E2E] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <h2 class="font-potta text-[#3E2723] text-xl md:text-3xl">
        Control Panel
      </h2>
    </div>

    <div class="flex items-center gap-3">
       <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#3E2723] text-white flex items-center justify-center font-bold text-xs md:text-base shadow-md">
         A
       </div>
       <div class="hidden md:flex flex-col items-end">
         <span class="font-market text-[#3E2723] text-sm font-bold tracking-wide">Admin User</span>
         <span class="text-[10px] text-gray-500 uppercase tracking-wider">Manager</span>
       </div>
    </div>

  </header>
</template>