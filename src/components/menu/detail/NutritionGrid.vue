<script setup>
defineProps({
  calories: {
    type: String,
    default: '-'
  }
})
</script>

<template>
  <div class="grid grid-cols-3 gap-4 mb-8 border-t border-b border-gray-100 py-4">
    <div class="text-center">
      <span class="block font-bold text-[#3E2723]">Kalori</span>
      <span class="text-xs text-gray-500">{{ calories }}</span>
    </div>
    <div class="text-center border-l border-gray-100">
      <span class="block font-bold text-[#3E2723]">Waktu</span>
      <span class="text-xs text-gray-500">15 Min</span>
    </div>
    <div class="text-center border-l border-gray-100">
      <span class="block font-bold text-[#3E2723]">Porsi</span>
      <span class="text-xs text-gray-500">1 Orang</span>
    </div>
  </div>
</template>