import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderStore = defineStore('order', () => {
  const orders = ref([])
  const isLoading = ref(false)

  const initialOrders = [
    {
      id: 101,
      customer_name: 'Budi Santoso',
      customer_whatsapp: '081234567890',
      payment_method: 'Qris',
      total_price: 53000,
      status: 'Pending',
      created_at: new Date(Date.now() - 3600000).toISOString(),
      items: [
        { id: 1, name: 'Yummix Signature Beef Burger', qty: 1, price: 35000 },
        { id: 3, name: 'Ice Taro Latte', qty: 1, price: 18000 }
      ]
    },
    {
      id: 102,
      customer_name: 'Siti Aminah',
      customer_whatsapp: '081987654321',
      payment_method: 'Cash',
      total_price: 25000,
      status: 'Selesai',
      created_at: new Date(Date.now() - 7200000).toISOString(),
      items: [
        { id: 2, name: 'Yummix Kebab Special', qty: 1, price: 25000 }
      ]
    }
  ]

  async function fetchOrders() {
    isLoading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 800))
      if (orders.value.length === 0) {
        // Sort descending by created_at natively since it's an array
        orders.value = [...initialOrders].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      }
    } catch (err) {
      console.error('Gagal ambil order:', err)
    } finally {
      isLoading.value = false
    }
  }

  function addOrderLocally(orderData) {
    const newId = orders.value.length > 0 ? Math.max(...orders.value.map(o => o.id)) + 1 : 101
    const newOrder = {
      ...orderData,
      id: newId,
      created_at: new Date().toISOString()
    }
    orders.value.unshift(newOrder)
  }

  function subscribeToOrders() {
    // No Supabase, so do nothing locally. Updates reflect immediately anyway.
    console.log('Mock: Subscribed to local orders')
  }

  async function updateStatus(id, newStatus) {
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
      const index = orders.value.findIndex(o => o.id === id)
      if (index !== -1) {
        orders.value[index].status = newStatus
      }
    } catch (err) {
      console.error('Gagal update status:', err)
    }
  }

  function formatPrice(value) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value)
  }

  function formatDate(dateString) {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
    })
  }

  return { orders, isLoading, fetchOrders, addOrderLocally, subscribeToOrders, updateStatus, formatPrice, formatDate }
})