import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrderStore = defineStore('order', () => {
  // State: Daftar Pesanan (Dummy Data Awal)
  const orders = ref([
    {
      id: 'ORD-001',
      customerName: 'Table 5',
      items: [
        { name: 'Spicy Noodles', quantity: 2, price: 15000, note: 'Pedas mampus' },
        { name: 'Lemon Squash', quantity: 2, price: 10000, note: '' }
      ],
      total: 52000,
      status: 'Selesai', // Pending, Cooking, Ready, Completed, Cancelled
      date: new Date().toLocaleString()
    },
    {
      id: 'ORD-002',
      customerName: 'Table 2',
      items: [
        { name: 'Beef Kebab', quantity: 1, price: 20000, note: 'Jangan pake saos' }
      ],
      total: 22000,
      status: 'Pending',
      date: new Date().toLocaleString()
    }
  ])

  // Action: Buat Pesanan Baru (Dipanggil dari Checkout)
  function createOrder(cartItems, totalAmount) {
    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`, // Generate ID Acak
      customerName: `Guest ${Math.floor(Math.random() * 100)}`, // Simulasi Nama
      items: [...cartItems], // Copy array agar tidak reaktif ke cart lama
      total: totalAmount,
      status: 'Pending',
      date: new Date().toLocaleString()
    }
    
    // Masukkan ke paling atas (terbaru)
    orders.value.unshift(newOrder)
  }

  // Action: Update Status Pesanan (Dipanggil Admin)
  function updateStatus(orderId, newStatus) {
    const order = orders.value.find(o => o.id === orderId)
    if (order) {
      order.status = newStatus
    }
  }

  // Helper: Warna Badge Status
  function getStatusColor(status) {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Cooking': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'Ready': return 'bg-green-100 text-green-700 border-green-200'
      case 'Completed': return 'bg-gray-100 text-gray-600 border-gray-200'
      case 'Cancelled': return 'bg-red-100 text-red-600 border-red-200'
      default: return 'bg-gray-50 text-gray-500'
    }
  }

  return { orders, createOrder, updateStatus, getStatusColor }
})