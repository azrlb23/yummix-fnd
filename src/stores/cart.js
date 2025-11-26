import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  
  // State untuk mengontrol Modal Checkout
  const isCheckoutOpen = ref(false)

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  // PERBAIKAN DISINI: Menghapus logika parsing string karena data harga sekarang sudah Number
  const subtotalPrice = computed(() => {
    return items.value.reduce((total, item) => {
      // Pastikan harga valid, jika tidak default ke 0
      const price = Number(item.price) || 0
      return total + (price * item.quantity)
    }, 0)
  })

  function addItem(product) {
    const existingItem = items.value.find((item) => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      // Menambahkan item baru dengan default quantity 1 dan note kosong
      items.value.push({ ...product, quantity: 1, note: '' })
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
    isCheckoutOpen,
    toggleCheckout
  }
})