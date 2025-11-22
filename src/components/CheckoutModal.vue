<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps({ isOpen: Boolean })
const emit = defineEmits(['close'])

const cartStore = useCartStore()
const step = ref(1) // 1: Cart, 2: Payment, 3: Success

// Biaya Admin (Contoh)
const fee = 2000

// Format Rupiah
const formatRupiah = (val) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val).replace('IDR', 'RP')
}

// Hitung Total
const totalPrice = computed(() => cartStore.subtotalPrice + fee)

// Navigasi
const toPayment = () => {
  if (cartStore.items.length > 0) step.value = 2
}

const doPayment = () => {
  step.value = 3
  // Simulasi: Setelah sukses, kosongkan keranjang
  setTimeout(() => cartStore.clearCart(), 500)
}

const close = () => {
  emit('close')
  // Reset ke step 1 setelah animasi tutup selesai
  setTimeout(() => step.value = 1, 300)
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity" @click.self="close">
      
      <div class="w-full max-w-5xl bg-[#FFF8E7] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative min-h-[600px]">
        
        <div class="bg-[#C62E2E] px-8 py-5 flex justify-between items-center text-white">
          <div class="flex gap-4 items-center">
            <svg v-if="step === 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
            
            <button v-if="step === 2" @click="step = 1" class="w-8 h-8 bg-white text-[#C62E2E] rounded-full flex items-center justify-center hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            </button>
          </div>

          <h2 class="font-potta text-2xl uppercase tracking-wider">
            {{ step === 2 ? 'Payment' : (step === 3 ? 'Success' : 'Checkout') }}
          </h2>

          <button @click="close" class="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div class="flex-grow p-8 flex flex-col justify-center">

          <div v-if="step === 1" class="flex flex-col lg:flex-row gap-8 h-full">
            <div class="flex-1 space-y-4 overflow-y-auto max-h-[450px] pr-2 custom-scroll">
              <div v-if="cartStore.items.length === 0" class="text-center py-20 opacity-50 font-market text-xl">
                Keranjang masih kosong.
              </div>
              
              <div v-for="item in cartStore.items" :key="item.id" class="bg-[#F2F0E4] p-4 rounded-xl flex items-center gap-4 shadow-sm border border-[#3E2723]/5">
                <img :src="item.img" class="w-24 h-20 object-contain bg-white rounded-lg p-1" />
                
                <div class="flex-grow text-left">
                  <h4 class="font-potta text-[#3E2723] text-lg uppercase">{{ item.name }}</h4>
                  <p class="font-market text-[#5D4037] text-xs opacity-70">LOREM IPSUM</p>
                  <p class="font-market text-[#5D4037] text-base font-bold mt-1">{{ item.price }}</p>
                </div>

                <div class="flex flex-col gap-2 items-center">
                   <button @click="cartStore.addItem(item)" class="w-8 h-8 bg-[#F59E0B] text-white rounded font-bold hover:bg-[#D97706]">+</button>
                   <span class="font-market text-[#3E2723]">{{ item.quantity }}</span>
                   <button @click="cartStore.decreaseItem(item.id)" class="w-8 h-8 bg-[#3E2723] text-white rounded font-bold hover:bg-black">-</button>
                </div>
              </div>
            </div>

            <div v-if="cartStore.items.length > 0" class="lg:w-[320px] bg-white p-6 rounded-xl shadow-sm h-fit border border-[#3E2723]/5 text-left space-y-4">
               <div class="space-y-2 pb-4 border-b border-dashed border-[#3E2723]/30">
                 <div class="flex justify-between font-market text-[#5D4037]">
                   <span>TOTAL ITEMS</span>
                   <span>{{ cartStore.totalItems }}</span>
                 </div>
                 <div class="flex justify-between font-market text-[#5D4037]">
                   <span>SUBTOTAL</span>
                   <span>{{ formatRupiah(cartStore.subtotalPrice) }}</span>
                 </div>
                 <div class="flex justify-between font-market text-[#5D4037]">
                   <span>FEE</span>
                   <span>{{ formatRupiah(fee) }}</span>
                 </div>
               </div>
               
               <div class="flex justify-between font-potta text-[#3E2723] text-xl">
                 <span>TOTAL</span>
                 <span>{{ formatRupiah(totalPrice) }}</span>
               </div>

               <button @click="toPayment" class="w-full bg-[#C62E2E] text-white font-market py-3 rounded-full shadow-lg hover:bg-[#9E2222] active:scale-95 transition-all mt-4 uppercase tracking-widest">
                 ORDER NOW
               </button>
            </div>
          </div>

          <div v-else-if="step === 2" class="flex flex-col items-center justify-center h-full">
            <div class="bg-[#F2F0E4] p-10 rounded-3xl shadow-lg flex flex-col md:flex-row gap-10 items-center max-w-3xl w-full border border-[#3E2723]/10">
              
              <div class="w-64 h-64 bg-[#D1D5DB] rounded-2xl flex items-center justify-center text-[#3E2723] font-potta text-2xl tracking-widest shadow-inner">
                BARCODE
              </div>

              <div class="flex-grow space-y-6 text-left w-full">
                <div>
                  <label class="font-market text-[#5D4037] text-xs uppercase tracking-widest ml-1">Virtual Account Number</label>
                  <div class="bg-[#E5E7EB] px-4 py-3 rounded-xl text-[#3E2723] font-market tracking-widest flex justify-between items-center mt-1">
                    <span>8800 1234 5678 9999</span>
                    <span class="text-[10px] bg-white px-2 py-1 rounded text-[#5D4037] border border-gray-300">COPY</span>
                  </div>
                </div>

                <div>
                  <label class="font-market text-[#5D4037] text-xs uppercase tracking-widest ml-1">Payment Method</label>
                  <div class="bg-[#E5E7EB] px-4 py-3 rounded-xl text-[#3E2723] font-market tracking-widest flex justify-between items-center mt-1">
                    <span>VIRTUAL ACCOUNT</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                  </div>
                </div>

                <div class="flex items-center justify-end gap-4 pt-4">
                   <div class="w-12 h-12 rounded-full bg-[#D1D5DB] flex items-center justify-center text-[10px] text-[#5D4037] font-bold text-center leading-tight">
                     ACCOUNT
                   </div>
                   <button @click="doPayment" class="bg-[#C62E2E] text-white px-8 py-3 rounded-full font-market shadow-lg hover:bg-[#9E2222] active:scale-95 transition-all">
                     Konfirmasi
                   </button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="flex flex-col items-center justify-center text-center h-full space-y-8 animate-fade-up">
            <h2 class="font-potta text-[#3E2723] text-4xl md:text-5xl">Pembelian berhasil!</h2>
            <p class="font-market text-[#5D4037] text-sm tracking-widest uppercase max-w-md">
              PESANAN ANDA AKAN SEGERA DIPROSES OLEH KAMI. TERIMA KASIH TELAH BERBELANJA DI YUMMIX.
            </p>

            <div class="w-4 h-4 bg-[#D1D5DB] rounded-full"></div>

            <button @click="close" class="bg-[#C62E2E] text-white px-12 py-3 rounded-full font-market shadow-lg hover:bg-[#9E2222] active:scale-95 transition-all uppercase tracking-widest">
              Kembali
            </button>
          </div>

        </div>
        
        <div class="text-center pb-6 pt-2">
          <p class="font-market text-[#5D4037] text-[10px] tracking-widest uppercase">COPYRIGHT 2025.</p>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.custom-scroll::-webkit-scrollbar { width: 6px; }
.custom-scroll::-webkit-scrollbar-thumb { background: #D7CCC8; border-radius: 10px; }
.custom-scroll::-webkit-scrollbar-track { background: transparent; }

.animate-fade-up { animation: fadeUp 0.6s ease-out; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>