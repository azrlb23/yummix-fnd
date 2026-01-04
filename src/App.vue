<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'light')
})
</script>

<template>
  <RouterView />
</template>