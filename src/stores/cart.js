import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // State: Menyimpan daftar item yang dibeli
  const items = ref([])

  // Getter: Menghitung total jumlah barang di keranjang
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  // Action: Fungsi untuk menambah barang
  function addItem(product) {
    // Cek apakah barang sudah ada di keranjang?
    const existingItem = items.value.find((item) => item.id === product.id)

    if (existingItem) {
      // Jika ada, tambah jumlahnya
      existingItem.quantity++
    } else {
      // Jika belum, masukkan sebagai item baru dengan jumlah 1
      items.value.push({ ...product, quantity: 1 })
    }
  }

  // Action: Fungsi untuk mengurangi barang (Opsional untuk nanti)
  function removeItem(productId) {
    const index = items.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      if (items.value[index].quantity > 1) {
        items.value[index].quantity--
      } else {
        items.value.splice(index, 1)
      }
    }
  }

  return { items, totalItems, addItem, removeItem }
})