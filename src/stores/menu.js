import { defineStore } from 'pinia'
import { ref } from 'vue'

import noodlesImg from '@/assets/Noodles.png'
import kebabImg from '@/assets/Kebab.png'
import toastImg from '@/assets/Toast.png'
import squashImg from '@/assets/Squash.png'
import nonCoffeeImg from '@/assets/Non-Coffee.png'

export const useMenuStore = defineStore('menu', () => {
  const items = ref([
    { 
      id: 1, 
      name: 'Spicy Noodles', 
      price: 15000, 
      category: 'FOOD', 
      type: 'NOODLES', 
      img: noodlesImg, 
      status: 'Tersedia',
      description: 'Mie goreng pedas dengan bumbu rahasia YUMMIX, dilengkapi pangsit goreng renyah.',
      calories: '450 kkal',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Beef Kebab', 
      price: 20000, 
      category: 'FOOD', 
      type: 'KEBAB', 
      img: kebabImg, 
      status: 'Tersedia',
      description: 'Tortilla lembut membungkus daging sapi panggang premium dan sayuran segar.',
      calories: '320 kkal',
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Choco Toast', 
      price: 12000, 
      category: 'FOOD', 
      type: 'TOAST', 
      img: toastImg, 
      status: 'Habis',
      description: 'Roti panggang renyah dengan isian cokelat lumer yang melimpah.',
      calories: '280 kkal',
      rating: 4.7
    },
    { 
      id: 4, 
      name: 'Chicken Kebab', 
      price: 18000, 
      category: 'FOOD', 
      type: 'KEBAB', 
      img: kebabImg, 
      status: 'Tersedia',
      description: 'Kebab dengan isian daging ayam panggang yang gurih dan saus spesial.',
      calories: '300 kkal',
      rating: 4.6
    },
    { 
      id: 5, 
      name: 'Cheese Toast', 
      price: 14000, 
      category: 'FOOD', 
      type: 'TOAST', 
      img: toastImg, 
      status: 'Tersedia',
      description: 'Perpaduan roti panggang dan keju mozzarella yang mulur saat digigit.',
      calories: '310 kkal',
      rating: 4.8
    },
    { 
      id: 6, 
      name: 'Lemon Squash', 
      price: 10000, 
      category: 'DRINKS', 
      type: 'SQUASH', 
      img: squashImg, 
      status: 'Tersedia',
      description: 'Minuman segar dengan perasan lemon asli dan soda yang menyegarkan.',
      calories: '120 kkal',
      rating: 4.5
    },
    { 
      id: 7, 
      name: 'Taro Milk', 
      price: 15000, 
      category: 'DRINKS', 
      type: 'NON-COFFEE', 
      img: nonCoffeeImg, 
      status: 'Tersedia',
      description: 'Susu segar dengan rasa taro yang creamy dan manis pas.',
      calories: '200 kkal',
      rating: 4.7
    },
    { 
      id: 8, 
      name: 'Orange Squash', 
      price: 10000, 
      category: 'DRINKS', 
      type: 'SQUASH', 
      img: squashImg, 
      status: 'Tersedia',
      description: 'Kesegaran jeruk berpadu dengan soda dingin.',
      calories: '130 kkal',
      rating: 4.6
    },
    { 
      id: 9, 
      name: 'Matcha Latte', 
      price: 18000, 
      category: 'DRINKS', 
      type: 'NON-COFFEE', 
      img: nonCoffeeImg, 
      status: 'Tersedia',
      description: 'Latte matcha premium dengan susu yang lembut.',
      calories: '180 kkal',
      rating: 4.9
    },
    { 
      id: 10, 
      name: 'Berry Squash', 
      price: 12000, 
      category: 'DRINKS', 
      type: 'SQUASH', 
      img: squashImg, 
      status: 'Tersedia',
      description: 'Paduan berbagai jenis beri dan soda yang manis asam segar.',
      calories: '140 kkal',
      rating: 4.8
    },
  ])

  function addMenu(newItem) {
    const newId = items.value.length > 0 ? Math.max(...items.value.map(i => i.id)) + 1 : 1
    items.value.push({ ...newItem, id: newId })
  }

  function updateMenu(updatedItem) {
    const index = items.value.findIndex(i => i.id === updatedItem.id)
    if (index !== -1) items.value[index] = updatedItem
  }

  function deleteMenu(id) {
    items.value = items.value.filter(i => i.id !== id)
  }

  function getItemById(id) {
    return items.value.find(i => i.id === parseInt(id))
  }

  function formatPrice(value) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value)
  }

  return { items, addMenu, updateMenu, deleteMenu, formatPrice, getItemById }
})