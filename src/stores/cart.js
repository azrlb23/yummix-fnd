import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])
  const isProcessing = ref(false)

  const totalPrice = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  })

  async function checkout(customerData) {
    isProcessing.value = true
    try {
      // Simulate network process
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Simulate sending order to orderStore
      import('./order.js').then(({ useOrderStore }) => {
        const orderStore = useOrderStore()
        orderStore.addOrderLocally({
          customer_name: customerData.name,
          customer_whatsapp: customerData.whatsapp,
          payment_method: customerData.paymentMethod,
          total_price: totalPrice.value,
          status: 'Pending',
          items: cartItems.value.map(item => ({
            id: item.id,
            name: item.name,
            qty: item.quantity,
            price: item.price
          }))
        })
      })

      cartItems.value = []
      return true
    } catch (err) {
      console.error('Checkout error:', err)
      return false
    } finally {
      isProcessing.value = false
    }
  }

  function addItem(product) {
    const existing = cartItems.value.find(i => i.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cartItems.value.push({ ...product, quantity: 1 })
    }
  }

  function decreaseItem(id) {
    const existingIndex = cartItems.value.findIndex(i => i.id === id)
    if (existingIndex !== -1) {
      if (cartItems.value[existingIndex].quantity > 1) {
        cartItems.value[existingIndex].quantity--
      } else {
        cartItems.value.splice(existingIndex, 1)
      }
    }
  }

  function clearCart() {
    cartItems.value = []
  }

  function formatPrice(value) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value)
  }

  return { cartItems, totalPrice, isProcessing, checkout, addItem, decreaseItem, clearCart, formatPrice }
})