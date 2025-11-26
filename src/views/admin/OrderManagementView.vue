<script setup>
import { ref } from 'vue'
import { useOrderStore } from '@/stores/order'

const orderStore = useOrderStore()
const activeOrderId = ref(null) // Untuk toggle accordion detail

// Toggle detail pesanan
const toggleDetail = (id) => {
  activeOrderId.value = activeOrderId.value === id ? null : id
}

// Format Rupiah
const formatRupiah = (val) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val).replace('IDR', 'RP')
}
</script>

<template>
  <div class="space-y-6">
    
    <div class="flex justify-between items-end">
      <div>
        <h2 class="font-potta text-[#3E2723] text-3xl">Pesanan Masuk</h2>
        <p class="font-market text-gray-500 text-sm">Pantau dan update status pesanan pelanggan.</p>
      </div>
    </div>

    <div class="space-y-4">
      
      <div v-if="orderStore.orders.length === 0" class="text-center py-10 bg-white rounded-xl border border-gray-200">
        <p class="font-market text-gray-400">Belum ada pesanan masuk hari ini.</p>
      </div>

      <div 
        v-for="order in orderStore.orders" 
        :key="order.id" 
        class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all hover:shadow-md"
      >
        <div 
          class="p-5 flex flex-col md:flex-row justify-between items-center gap-4 cursor-pointer bg-gray-50/50"
          @click="toggleDetail(order.id)"
        >
          <div class="flex items-center gap-4 w-full md:w-auto">
            <div class="w-10 h-10 rounded-full bg-[#C62E2E]/10 flex items-center justify-center text-[#C62E2E] font-bold text-xs">
              #{{ order.id.split('-')[1] }}
            </div>
            <div>
              <h4 class="font-potta text-[#3E2723] text-lg">{{ order.customerName }}</h4>
              <p class="text-xs text-gray-500 font-market">{{ order.items.length }} Items • {{ order.date }}</p>
            </div>
          </div>

          <div class="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <p class="font-market text-[#3E2723] font-bold text-lg">{{ formatRupiah(order.total) }}</p>
            
            <span 
              class="px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider"
              :class="orderStore.getStatusColor(order.status)"
            >
              {{ order.status }}
            </span>
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
              class="w-5 h-5 text-gray-400 transition-transform duration-300"
              :class="activeOrderId === order.id ? 'rotate-180' : ''"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>

        <div v-if="activeOrderId === order.id" class="p-5 border-t border-gray-100 bg-white animate-fade-in">
          
          <div class="space-y-3 mb-6">
            <div v-for="(item, idx) in order.items" :key="idx" class="flex justify-between items-start text-sm">
              <div class="flex gap-3">
                <span class="font-bold text-[#C62E2E] min-w-[20px]">{{ item.quantity }}x</span>
                <div>
                  <span class="text-[#3E2723]">{{ item.name }}</span>
                  <p v-if="item.note" class="text-xs text-gray-400 italic mt-0.5">"{{ item.note }}"</p>
                </div>
              </div>
              <span class="text-gray-600 font-market">{{ formatRupiah(item.price * item.quantity) }}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest self-center mr-auto">Update Status:</p>
            
            <button @click.stop="orderStore.updateStatus(order.id, 'Cooking')" class="px-4 py-2 rounded-lg text-xs font-bold bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
              👨‍🍳 MASAK
            </button>
            <button @click.stop="orderStore.updateStatus(order.id, 'Ready')" class="px-4 py-2 rounded-lg text-xs font-bold bg-green-50 text-green-600 hover:bg-green-100 transition-colors">
              ✅ SIAP SAJI
            </button>
            <button @click.stop="orderStore.updateStatus(order.id, 'Completed')" class="px-4 py-2 rounded-lg text-xs font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              🏁 SELESAI
            </button>
            <button @click.stop="orderStore.updateStatus(order.id, 'Cancelled')" class="px-4 py-2 rounded-lg text-xs font-bold bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
              ❌ TOLAK
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>