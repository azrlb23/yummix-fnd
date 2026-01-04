<script setup>
import StatusBadge from './StatusBadge.vue'

const props = defineProps({
  order: {
    type: Object,
    required: true
  },
  isExpanded: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle', 'update-status'])

const formatRupiah = (val) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val).replace('IDR', 'RP')
}

const btnBaseClass = "px-4 py-2 rounded-lg text-[10px] md:text-xs font-bold transition-colors text-center uppercase tracking-wider"
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all hover:shadow-md">
    
    <div 
      class="p-4 md:p-5 cursor-pointer bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
      @click="emit('toggle')"
    >
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        <div class="flex items-center gap-3 md:gap-4 w-full md:w-auto">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-[#C62E2E]/10 flex items-center justify-center text-[#C62E2E] font-bold text-xs">
            #{{ order.id.split('-')[1] }}
          </div>
          
          <div class="flex-grow">
            <h4 class="font-potta text-[#3E2723] text-base md:text-lg leading-tight">
              {{ order.customerName }}
            </h4>
            <p class="text-[10px] md:text-xs text-gray-500 font-market mt-1">
              {{ order.items.length }} Items • {{ order.date }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between w-full md:w-auto gap-4 md:gap-6 mt-2 md:mt-0 pl-[52px] md:pl-0">
          <p class="font-market text-[#3E2723] font-bold text-base md:text-lg">
            {{ formatRupiah(order.total) }}
          </p>
          
          <div class="flex items-center gap-3">
            <StatusBadge :status="order.status" />
            
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
              class="w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0"
              :class="isExpanded ? 'rotate-180' : ''"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>

      </div>
    </div>

    <div v-if="isExpanded" class="p-4 md:p-5 border-t border-gray-100 bg-white animate-fade-in">
      
      <div class="space-y-3 mb-6">
        <div v-for="(item, idx) in order.items" :key="idx" class="flex justify-between items-start text-xs md:text-sm">
          <div class="flex gap-3">
            <span class="font-bold text-[#C62E2E] min-w-[24px]">{{ item.quantity }}x</span>
            <div>
              <span class="text-[#3E2723] font-bold">{{ item.name }}</span>
              <p v-if="item.note" class="text-xs text-gray-400 italic mt-0.5">"{{ item.note }}"</p>
            </div>
          </div>
          <span class="text-gray-600 font-market">{{ formatRupiah(item.price * item.quantity) }}</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 items-start sm:items-center">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 sm:mb-0 sm:mr-auto">
          Update Status:
        </p>
        
        <div class="grid grid-cols-2 sm:flex gap-2 w-full sm:w-auto">
          <button 
            @click.stop="emit('update-status', 'Cooking')" 
            :class="[btnBaseClass, 'bg-blue-50 text-blue-600 hover:bg-blue-100']"
          >
            👨‍🍳 MASAK
          </button>
          <button 
            @click.stop="emit('update-status', 'Ready')" 
            :class="[btnBaseClass, 'bg-green-50 text-green-600 hover:bg-green-100']"
          >
            ✅ SIAP
          </button>
          <button 
            @click.stop="emit('update-status', 'Completed')" 
            :class="[btnBaseClass, 'bg-gray-100 text-gray-600 hover:bg-gray-200']"
          >
            🏁 SELESAI
          </button>
          <button 
            @click.stop="emit('update-status', 'Cancelled')" 
            :class="[btnBaseClass, 'bg-red-50 text-red-600 hover:bg-red-100']"
          >
            ❌ TOLAK
          </button>
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