<script setup>
import { ref } from 'vue'
const props = defineProps({ isOpen: Boolean })
const emit = defineEmits(['close'])
const isSuccess = ref(false)
const sendReview = () => isSuccess.value = true
const closeModal = () => {
  emit('close')
  setTimeout(() => isSuccess.value = false, 300)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 transition-opacity"
        @click.self="closeModal"
      >
        <div class="w-[90%] md:w-full max-w-2xl bg-[#FFF8E7] rounded-2xl overflow-hidden shadow-2xl transform transition-all scale-100 relative min-h-[300px] flex flex-col">
          
          <div v-if="!isSuccess" class="flex flex-col h-full">
            <div class="bg-[#C62E2E] px-4 py-3 md:px-6 md:py-4 flex justify-between items-center flex-shrink-0">
              <h3 class="font-potta text-white text-lg md:text-xl tracking-wider uppercase">Review</h3>
              <button @click="closeModal" class="text-white hover:text-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div class="p-5 md:p-8 flex-grow flex flex-col justify-between">
              <div class="flex flex-col md:flex-row gap-4 md:gap-6">
                <textarea 
                  class="w-full h-32 md:h-40 bg-[#F2F0E4] rounded-xl p-4 text-[#3E2723] font-poppins focus:outline-none focus:ring-2 focus:ring-[#C62E2E]/50 resize-none placeholder-[#3E2723]/40 text-sm md:text-base"
                  placeholder="Tulis pengalaman makanmu disini..."
                ></textarea>
                
                <div class="flex-shrink-0 hidden md:block">
                  <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C62E2E]">
                    <img src="https://i.pravatar.cc/150?img=3" alt="User" class="w-full h-full object-cover">
                  </div>
                </div>
              </div>

              <div class="flex justify-end mt-4 md:mt-6">
                <button @click="sendReview" class="bg-[#C62E2E] text-white font-market px-6 py-2 md:px-8 rounded-full shadow-md hover:bg-[#A02626] transition-transform hover:scale-105 tracking-wider text-sm md:text-base">
                  SEND
                </button>
              </div>
            </div>
          </div>

          <div v-else class="flex-grow flex flex-col items-center justify-center text-center p-8 md:p-10 animate-fade-up">
            <h2 class="font-potta text-[#3E2723] text-2xl md:text-4xl mb-2">Review Berhasil!</h2>
            <p class="font-market text-[#5D4037] text-[10px] md:text-sm tracking-widest uppercase opacity-80 mb-6">
              KRITIK DAN SARAN ANDA SANGAT BERARTI BAGI KAMI.
            </p>
            <div class="w-4 h-4 bg-[#D1D5DB] rounded-full mb-6"></div>
            <button @click="closeModal" class="bg-[#C62E2E] text-white px-8 py-2 md:px-10 md:py-2.5 rounded-full font-market shadow-lg hover:bg-[#9E2222] transition-transform active:scale-95 uppercase tracking-widest text-sm md:text-base">
              Kembali
            </button>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active .transform, .modal-leave-active .transform { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.modal-enter-from .transform, .modal-leave-to .transform { transform: scale(0.9) translateY(20px); opacity: 0; }
.animate-fade-up { animation: fadeUp 0.5s ease-out; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>