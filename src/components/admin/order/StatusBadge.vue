<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    required: true
  }
})

const badgeClass = computed(() => {
  switch (props.status) {
    case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
    case 'Cooking': return 'bg-blue-100 text-blue-700 border-blue-200'
    case 'Ready': return 'bg-green-100 text-green-700 border-green-200'
    case 'Completed': return 'bg-gray-100 text-gray-600 border-gray-200'
    case 'Cancelled': return 'bg-red-100 text-red-600 border-red-200'
    default: return 'bg-gray-50 text-gray-500'
  }
})
</script>

<template>
  <span 
    class="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border uppercase tracking-wider whitespace-nowrap"
    :class="badgeClass"
  >
    {{ status }}
  </span>
</template>