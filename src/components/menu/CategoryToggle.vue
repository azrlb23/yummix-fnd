<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="bg-[#C62E2E] p-1 rounded-full flex items-center relative w-[220px] h-[45px] md:w-[240px] md:h-[50px] shadow-inner">
    <button 
      @click="$emit('update:modelValue', 'FOOD')"
      class="flex-1 h-full rounded-full font-market text-sm md:text-base tracking-widest transition-all duration-300 z-10"
      :class="modelValue === 'FOOD' 
        ? 'bg-white text-[#C62E2E] shadow-md' 
        : 'text-white hover:text-white/80'"
    >
      FOOD
    </button>
    <button 
      @click="$emit('update:modelValue', 'DRINKS')"
      class="flex-1 h-full rounded-full font-market text-sm md:text-base tracking-widest transition-all duration-300 z-10"
      :class="modelValue === 'DRINKS' 
        ? 'bg-white text-[#C62E2E] shadow-md' 
        : 'text-white hover:text-white/80'"
    >
      DRINKS
    </button>
  </div>
</template>