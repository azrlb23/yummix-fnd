import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore('toast', () => {
  const isVisible = ref(false)
  const message = ref('')
  const type = ref('success')

  let timeout = null

  function showToast(msg, toastType = 'success') {
    message.value = msg
    type.value = toastType
    isVisible.value = true

    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      isVisible.value = false
    }, 3000)
  }

  return { isVisible, message, type, showToast }
})