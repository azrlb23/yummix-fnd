import { defineStore } from 'pinia'
import { ref } from 'vue'

import imgBurger from '@/assets/Hero.png' // Using hero map since there's no Burger.png
import imgKebab from '@/assets/Kebab.png'
import imgTaro from '@/assets/Non-Coffee.png'
import imgToast from '@/assets/Toast.png'
import imgNoodles from '@/assets/Noodles.png'
import imgSquash from '@/assets/Squash.png'

export const useMenuStore = defineStore('menu', () => {
  const items = ref([])
  const isLoading = ref(false)

  // Dummy mock data
  const initialData = [
    {
      id: 1,
      name: 'Yummix Signature Beef Burger',
      price: 35000,
      category: 'FOOD',
      type: 'BURGER',
      img: imgBurger,
      description: 'Burger daging sapi premium dengan saus rahasia Yummix.',
      status: 'Tersedia',
      is_available: true
    },
    {
      id: 2,
      name: 'Yummix Kebab Special',
      price: 25000,
      category: 'FOOD',
      type: 'KEBAB',
      img: imgKebab,
      description: 'Kebab lezat dengan isian daging melimpah.',
      status: 'Tersedia',
      is_available: true
    },
    {
      id: 3,
      name: 'Ice Taro Latte',
      price: 18000,
      category: 'DRINK',
      type: 'MILK',
      img: imgTaro,
      description: 'Minuman taro segar dengan susu premium.',
      status: 'Tersedia',
      is_available: true
    },
    {
      id: 4,
      name: 'Classic Toast',
      price: 20000,
      category: 'FOOD',
      type: 'ROTI',
      img: imgToast,
      description: 'Roti panggang mentega dengan isian manis/gurih klasik.',
      status: 'Tersedia',
      is_available: true
    },
    {
      id: 5,
      name: 'Yummix Noodles',
      price: 22000,
      category: 'FOOD',
      type: 'MIE',
      img: imgNoodles,
      description: 'Mie kenyal dengan bumbu otentik racikan spesial.',
      status: 'Tersedia',
      is_available: true
    },
    {
      id: 6,
      name: 'Orange Squash',
      price: 15000,
      category: 'DRINK',
      type: 'SQUASH',
      img: imgSquash,
      description: 'Minuman segar perpaduan soda dan sirup jeruk.',
      status: 'Tersedia',
      is_available: true
    }
  ]

  async function fetchMenu() {
    isLoading.value = true
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800))

      // Load mock data if items are empty (to preserve local additions during session)
      if (items.value.length === 0) {
        items.value = [...initialData]
      }
    } catch (err) {
      console.error('Gagal mengambil menu:', err.message)
    } finally {
      isLoading.value = false
    }
  }

  async function addMenu(newItem) {
    isLoading.value = true
    try {
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 500))

      const newId = items.value.length > 0 ? Math.max(...items.value.map(i => i.id)) + 1 : 1

      items.value.push({
        id: newId,
        name: newItem.name,
        price: newItem.price,
        category: (newItem.category || '').toUpperCase(),
        type: (newItem.sub_category || newItem.type || '').toUpperCase(),
        img: newItem.image_url || newItem.img || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        description: newItem.description,
        status: newItem.is_available !== false ? 'Tersedia' : 'Habis',
        is_available: newItem.is_available !== false
      })
      return true
    } catch (err) {
      console.error('Gagal menambah menu:', err.message)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function updateMenu(updatedItem) {
    isLoading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 500))

      const index = items.value.findIndex(i => i.id === updatedItem.id)
      if (index !== -1) {
        items.value[index] = {
          ...items.value[index],
          name: updatedItem.name,
          price: updatedItem.price,
          category: (updatedItem.category || '').toUpperCase(),
          type: (updatedItem.sub_category || updatedItem.type || '').toUpperCase(),
          img: updatedItem.image_url || updatedItem.img || items.value[index].img,
          description: updatedItem.description,
          status: updatedItem.status || (updatedItem.is_available !== false ? 'Tersedia' : 'Habis'),
          is_available: updatedItem.is_available !== false
        }
      }
    } catch (err) {
      console.error('Gagal update menu:', err.message)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function deleteMenu(id) {
    isLoading.value = true
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      items.value = items.value.filter(i => i.id !== id)
    } catch (err) {
      console.error('Gagal menghapus menu:', err.message)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  function getItemById(id) {
    return items.value.find(i => i.id === parseInt(id))
  }

  function formatPrice(value) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value)
  }

  return { items, isLoading, fetchMenu, addMenu, updateMenu, deleteMenu, formatPrice, getItemById }
})