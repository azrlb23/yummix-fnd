<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity p-4"
      @click.self="closeModal"
    >
      
      <div class="w-full max-w-2xl bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all scale-100">
        
        <div class="bg-[#C62E2E] px-6 py-4 flex justify-between items-center">
          <h3 class="font-potta text-white text-xl tracking-wider uppercase">
            Review
          </h3>
          <button @click="closeModal" class="text-white hover:text-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="p-8 bg-white">
          
          <div class="flex gap-6">
            <textarea 
              class="w-full h-48 bg-[#F2F0E4] rounded-xl p-4 text-[#3E2723] font-poppins focus:outline-none focus:ring-2 focus:ring-[#C62E2E]/50 resize-none placeholder-[#3E2723]/40"
              placeholder="Tulis pengalaman makanmu disini..."
            ></textarea>

            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C62E2E]">
                <img src="https://i.pravatar.cc/150?img=3" alt="User" class="w-full h-full object-cover">
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-6">
            <button 
              @click="closeModal"
              class="bg-[#C62E2E] text-white font-market px-8 py-2 rounded-full shadow-md hover:bg-[#A02626] transition-transform hover:scale-105 tracking-wider"
            >
              SEND
            </button>
          </div>

        </div>

      </div>
    </div>

  </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>