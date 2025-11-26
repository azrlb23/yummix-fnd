<script setup>
defineProps({
  subCategories: {
    type: Array,
    required: true
  },
  activeFilter: {
    type: String,
    required: true
  }
})

defineEmits(['update:filter'])
</script>

<template>
  <div class="mb-8 md:mb-12 relative z-10 w-full flex justify-start md:justify-center overflow-x-auto px-4 pb-2 no-scrollbar">
    <div class="bg-[#C62E2E] p-1.5 rounded-full flex items-center shadow-inner gap-1 min-w-max">
      <button 
        v-for="sub in subCategories" 
        :key="sub"
        @click="$emit('update:filter', sub)"
        class="px-5 py-2 md:px-6 rounded-full font-market text-xs md:text-sm tracking-wider uppercase transition-all duration-300 whitespace-nowrap"
        :class="activeFilter === sub 
          ? 'bg-white text-[#C62E2E] shadow-md' 
          : 'bg-transparent text-white hover:bg-white/20'"
      >
        {{ sub }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>