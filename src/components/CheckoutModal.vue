<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps({ isOpen: Boolean })
const emit = defineEmits(['close'])

const cartStore = useCartStore()
const step = ref(1)
const fee = 2000

const formatRupiah = (val) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val).replace('IDR', 'RP')
}

const totalPrice = computed(() => cartStore.subtotalPrice + fee)

const toPayment = () => {
  if (cartStore.items.length > 0) step.value = 2
}

const doPayment = () => {
  step.value = 3
  setTimeout(() => cartStore.clearCart(), 500)
}

const close = () => {
  emit('close')
  setTimeout(() => step.value = 1, 300)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity" 
        @click.self="close"
      >
        <div class="modal-card w-[95%] md:w-full max-w-5xl bg-[#FFF8E7] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative h-auto max-h-[90vh]">
          
          <div class="bg-[#C62E2E] px-4 py-4 md:px-8 md:py-5 flex justify-between items-center text-white shrink-0">
            <div class="flex gap-3 md:gap-4 items-center">
              <svg v-if="step === 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6 md:w-8 md:h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
              
              <button v-if="step === 2" @click="step = 1" class="w-8 h-8 bg-white text-[#C62E2E] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
              </button>
            </div>

            <h2 class="font-potta text-lg md:text-2xl uppercase tracking-wider">
              {{ step === 2 ? 'Payment' : (step === 3 ? 'Success' : 'Checkout') }}
            </h2>

            <button @click="close" class="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6 md:w-8 md:h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div class="flex-grow p-4 md:p-8 overflow-y-auto custom-scroll">

            <div v-if="step === 1" class="flex flex-col lg:flex-row gap-6 md:gap-8 h-full">
              <div class="flex-1 space-y-3 md:space-y-4">
                <div v-if="cartStore.items.length === 0" class="text-center py-10 md:py-20 opacity-50 font-market text-lg md:text-xl">
                  Keranjang masih kosong.
                </div>
                
                <div v-for="item in cartStore.items" :key="item.id" class="bg-[#F2F0E4] p-3 md:p-4 rounded-xl flex flex-col gap-3 shadow-sm border border-[#3E2723]/5">
                  <div class="flex items-center gap-3 md:gap-4 w-full">
                    <div class="flex-shrink-0 bg-white p-1 rounded-lg h-fit">
                      <img :src="item.img" class="w-16 h-16 md:w-20 md:h-20 object-contain" />
                    </div>
                    
                    <div class="flex-grow text-left">
                      <h4 class="font-potta text-[#3E2723] text-base md:text-lg uppercase leading-tight">{{ item.name }}</h4>
                      <span class="inline-block bg-[#3E2723]/10 text-[#5D4037] text-[10px] px-2 py-0.5 rounded-full font-bold tracking-wider mb-1">
                        {{ item.type }}
                      </span>
                      <p class="font-market text-[#5D4037] text-sm md:text-base font-bold mt-1">{{ item.price }}</p>
                    </div>

                    <div class="flex flex-col gap-1 md:gap-2 items-center justify-center pl-2 border-l border-[#3E2723]/10">
                       <button @click="cartStore.addItem(item)" class="w-6 h-6 md:w-8 md:h-8 bg-[#F59E0B] text-white rounded md:rounded-md font-bold hover:bg-[#D97706] flex items-center justify-center text-sm md:text-lg">+</button>
                       <span class="font-market text-[#3E2723] text-sm md:text-base font-bold">{{ item.quantity }}</span>
                       <button @click="cartStore.decreaseItem(item.id)" class="w-6 h-6 md:w-8 md:h-8 bg-[#3E2723] text-white rounded md:rounded-md font-bold hover:bg-black flex items-center justify-center text-sm md:text-lg">-</button>
                    </div>
                  </div>

                  <div class="w-full relative">
                    <input 
                      v-model="item.note"
                      type="text" 
                      placeholder="Catatan (Pedas, Tanpa Sayur)..." 
                      class="w-full bg-white border border-[#3E2723]/10 rounded-lg px-3 py-2 text-xs font-market text-[#3E2723] placeholder-[#3E2723]/40 focus:outline-none focus:border-[#C62E2E] transition-all"
                    >
                  </div>
                </div>
              </div>

              <div v-if="cartStore.items.length > 0" class="lg:w-[320px] bg-white p-5 md:p-6 rounded-xl shadow-sm h-fit border border-[#3E2723]/5 text-left space-y-3 md:space-y-4 flex-shrink-0">
                 <div class="space-y-2 pb-4 border-b border-dashed border-[#3E2723]/30 text-sm md:text-base">
                   <div class="flex justify-between font-market text-[#5D4037]"><span>TOTAL ITEMS</span><span>{{ cartStore.totalItems }}</span></div>
                   <div class="flex justify-between font-market text-[#5D4037]"><span>SUBTOTAL</span><span>{{ formatRupiah(cartStore.subtotalPrice) }}</span></div>
                   <div class="flex justify-between font-market text-[#5D4037]"><span>FEE</span><span>{{ formatRupiah(fee) }}</span></div>
                 </div>
                 
                 <div class="flex justify-between font-potta text-[#3E2723] text-lg md:text-xl">
                   <span>TOTAL</span>
                   <span>{{ formatRupiah(totalPrice) }}</span>
                 </div>

                 <button @click="toPayment" class="w-full bg-[#C62E2E] text-white font-market py-2.5 md:py-3 rounded-full shadow-lg hover:bg-[#9E2222] active:scale-95 transition-all mt-2 uppercase tracking-widest text-sm md:text-base">
                   ORDER NOW
                 </button>
              </div>
            </div>

            <div v-else-if="step === 2" class="flex flex-col items-center justify-center h-full py-4">
              <div class="bg-[#F2F0E4] p-6 md:p-10 rounded-3xl shadow-lg flex flex-col md:flex-row gap-8 items-center w-full border border-[#3E2723]/10">
                
                <div class="w-48 h-48 md:w-64 md:h-64 bg-[#D1D5DB] rounded-2xl flex items-center justify-center text-[#3E2723] font-potta text-xl md:text-2xl tracking-widest shadow-inner shrink-0">
                  BARCODE
                </div>

                <div class="flex-grow space-y-5 text-left w-full">
                  <div>
                    <label class="font-market text-[#5D4037] text-[10px] md:text-xs uppercase tracking-widest ml-1">Virtual Account Number</label>
                    <div class="bg-[#E5E7EB] px-3 py-2 md:px-4 md:py-3 rounded-xl text-[#3E2723] font-market tracking-widest flex justify-between items-center mt-1 text-sm md:text-base">
                      <span class="truncate mr-2">8800 1234 5678 9999</span>
                      <span class="text-[10px] bg-white px-2 py-1 rounded text-[#5D4037] border border-gray-300 cursor-pointer shrink-0">COPY</span>
                    </div>
                  </div>

                  <div>
                    <label class="font-market text-[#5D4037] text-[10px] md:text-xs uppercase tracking-widest ml-1">Payment Method</label>
                    <div class="bg-[#E5E7EB] px-3 py-2 md:px-4 md:py-3 rounded-xl text-[#3E2723] font-market tracking-widest flex justify-between items-center mt-1 text-sm md:text-base">
                      <span>VIRTUAL ACCOUNT</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                    </div>
                  </div>

                  <div class="flex items-center justify-end gap-3 pt-2">
                     <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D1D5DB] flex items-center justify-center text-[8px] md:text-[10px] text-[#5D4037] font-bold text-center leading-tight">
                       ACCOUNT
                     </div>
                     <button @click="doPayment" class="bg-[#C62E2E] text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-market shadow-lg hover:bg-[#9E2222] active:scale-95 transition-all text-sm md:text-base">
                       Konfirmasi
                     </button>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="flex flex-col items-center justify-center text-center h-full space-y-6 py-10 animate-fade-up">
              <h2 class="font-potta text-[#3E2723] text-3xl md:text-5xl">Pembelian berhasil!</h2>
              <p class="font-market text-[#5D4037] text-xs md:text-sm tracking-widest uppercase max-w-xs md:max-w-md">
                PESANAN ANDA AKAN SEGERA DIPROSES OLEH KAMI. TERIMA KASIH TELAH BERBELANJA DI YUMMIX.
              </p>
              <div class="w-4 h-4 bg-[#D1D5DB] rounded-full"></div>
              <button @click="close" class="bg-[#C62E2E] text-white px-10 py-2.5 md:px-12 md:py-3 rounded-full font-market shadow-lg hover:bg-[#9E2222] active:scale-95 transition-all uppercase tracking-widest text-sm md:text-base">
                Kembali
              </button>
            </div>

          </div>
          
          <div class="text-center pb-4 md:pb-6 pt-2 shrink-0">
            <p class="font-market text-[#5D4037] text-[10px] tracking-widest uppercase">COPYRIGHT 2025.</p>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.custom-scroll::-webkit-scrollbar { width: 4px; }
.custom-scroll::-webkit-scrollbar-thumb { background: #D7CCC8; border-radius: 10px; }
.custom-scroll::-webkit-scrollbar-track { background: transparent; }

.animate-fade-up { animation: fadeUp 0.5s ease-out; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

.modal-enter-active .modal-card, .modal-leave-active .modal-card { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
.modal-enter-from .modal-card, .modal-leave-to .modal-card { transform: scale(0.9) translateY(30px); opacity: 0; }
</style>