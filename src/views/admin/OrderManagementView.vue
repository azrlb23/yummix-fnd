<script setup>
import { ref } from 'vue'
import { useOrderStore } from '@/stores/order'
import OrderCard from '@/components/admin/order/OrderCard.vue'

const orderStore = useOrderStore()
const activeOrderId = ref(null)

// Logic Toggle Accordion (Hanya satu yang terbuka)
const toggleDetail = (id) => {
  activeOrderId.value = activeOrderId.value === id ? null : id
}

// Logic Update Status
const handleStatusUpdate = (id, newStatus) => {
  orderStore.updateStatus(id, newStatus)
  // Opsional: Tutup detail setelah update status selesai
  if (['Completed', 'Cancelled'].includes(newStatus)) {
    activeOrderId.value = null
  }
}
</script>

<template>
  <div class="space-y-6">
    
    <div class="flex justify-between items-end border-b border-gray-200 pb-4">
      <div>
        <h2 class="font-potta text-[#3E2723] text-2xl md:text-3xl">Pesanan Masuk</h2>
        <p class="font-market text-gray-500 text-xs md:text-sm mt-1">
          Pantau dan update status pesanan pelanggan.
        </p>
      </div>
    </div>

    <div class="space-y-4 pb-10">
      
      <div v-if="orderStore.orders.length === 0" class="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
        <div class="text-4xl mb-3">📭</div>
        <p class="font-market text-gray-400 uppercase tracking-widest">Belum ada pesanan masuk hari ini.</p>
      </div>

      <OrderCard 
        v-for="order in orderStore.orders" 
        :key="order.id" 
        :order="order"
        :is-expanded="activeOrderId === order.id"
        @toggle="toggleDetail(order.id)"
        @update-status="(status) => handleStatusUpdate(order.id, status)"
      />

    </div>
  </div>
</template>