<script setup>
import StatCard from '@/components/admin/dashboard/StatCard.vue'
import SalesChart from '@/components/admin/dashboard/SalesChart.vue'

const stats = [
  { label: 'Total Pesanan', value: '125', icon: '📦' },
  { label: 'Pendapatan Hari Ini', value: 'Rp 1.500.000', icon: '💰' },
  { label: 'Menu Aktif', value: '12', icon: '🍔' },
  { label: 'Pelanggan', value: '45', icon: '👥' }
]
</script>

<template>
  <div class="space-y-6 md:space-y-8">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <StatCard 
        v-for="(stat, index) in stats" 
        :key="index"
        :label="stat.label"
        :value="stat.value"
        :icon="stat.icon"
      />
    </div>

    <SalesChart /> 

  </div>
</template>