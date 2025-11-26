<script setup>
import { useToastStore } from '@/stores/toast'
const toastStore = useToastStore()
</script>

<template>
  <Teleport to="body">
    <Transition name="toast">
      <div 
        v-if="toastStore.isVisible"
        class="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl min-w-[300px] justify-center border border-white/10"
        :class="toastStore.type === 'success' ? 'bg-[#3E2723] text-white' : 'bg-red-600 text-white'"
      >
        <svg v-if="toastStore.type === 'success'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 text-[#4ADE80]">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
        
        <span class="font-market tracking-widest text-sm uppercase">{{ toastStore.message }}</span>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* Efek membal */
}

.toast-enter-from,
.toast-leave-to {
  transform: translate(-50%, -20px); /* Muncul dari atas */
  opacity: 0;
}
</style>