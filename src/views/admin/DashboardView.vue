<script setup>
// Data Dummy Ringkasan
const stats = [
  { label: 'Total Pesanan', value: '125', icon: '📦' },
  { label: 'Pendapatan Hari Ini', value: 'Rp 1.500.000', icon: '💰' },
  { label: 'Menu Aktif', value: '12', icon: '🍔' },
  { label: 'Pelanggan', value: '45', icon: 'busts_in_silhouette' }
]
</script>

<template>
  <div class="space-y-6 md:space-y-8">
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <div 
        v-for="(stat, index) in stats" 
        :key="index"
        class="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4 hover:shadow-md transition-shadow"
      >
        <div class="text-3xl md:text-4xl">{{ stat.icon }}</div>
        <div>
          <h4 class="font-market text-gray-500 text-[10px] md:text-xs uppercase tracking-widest">{{ stat.label }}</h4>
          <p class="font-potta text-[#3E2723] text-xl md:text-2xl">{{ stat.value }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 min-h-[250px] md:min-h-[300px] flex items-center justify-center">
      <p class="font-market text-gray-400 text-sm md:text-base text-center">
        Grafik Penjualan akan muncul di sini...
      </p>
    </div>

  </div>
</template>