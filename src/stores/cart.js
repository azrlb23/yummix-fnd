import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  
  // STATE BARU: Mengontrol status modal checkout secara global
  const isCheckoutOpen = ref(false)

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[^0-9]/g, '')) || 0
  }

  const subtotalPrice = computed(() => {
    return items.value.reduce((total, item) => {
      return total + (parsePrice(item.price) * item.quantity)
    }, 0)
  })

  function addItem(product) {
    const existingItem = items.value.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  function decreaseItem(productId) {
    const index = items.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      if (items.value[index].quantity > 1) {
        items.value[index].quantity--
      } else {
        items.value.splice(index, 1)
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  // FUNCTION BARU: Membuka/Menutup Checkout
  function toggleCheckout() {
    isCheckoutOpen.value = !isCheckoutOpen.value
  }

  return { 
    items, 
    totalItems, 
    subtotalPrice, 
    addItem, 
    decreaseItem, 
    clearCart,
    // Return state & action baru
    isCheckoutOpen,
    toggleCheckout
  }
})