<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: String,
    default: '📦'
  }
})
</script>

<template>
  <div class="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default">
    <div class="text-3xl md:text-4xl flex-shrink-0 bg-gray-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
      {{ icon }}
    </div>
    <div>
      <h4 class="font-market text-gray-500 text-[10px] md:text-xs uppercase tracking-widest mb-1">
        {{ label }}
      </h4>
      <p class="font-potta text-[#3E2723] text-xl md:text-2xl leading-tight">
        {{ value }}
      </p>
    </div>
  </div>
</template>