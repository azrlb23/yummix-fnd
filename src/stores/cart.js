import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  // Menghitung total barang (qty)
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  // Helper: Mengubah "RP 15.000" menjadi angka 15000
  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[^0-9]/g, '')) || 0
  }

  // Menghitung Subtotal Harga
  const subtotalPrice = computed(() => {
    return items.value.reduce((total, item) => {
      return total + (parsePrice(item.price) * item.quantity)
    }, 0)
  })

  // Tambah Item
  function addItem(product) {
    const existingItem = items.value.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  // Kurangi Item
  function decreaseItem(productId) {
    const index = items.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      if (items.value[index].quantity > 1) {
        items.value[index].quantity--
      } else {
        // Jika sisa 1 dan dikurangi, hapus dari keranjang
        items.value.splice(index, 1)
      }
    }
  }

  // Kosongkan Keranjang (Setelah sukses bayar)
  function clearCart() {
    items.value = []
  }

  return { items, totalItems, subtotalPrice, addItem, decreaseItem, clearCart }
})