<script setup>
import { useMenuStore } from '@/stores/menu'

// Props: Menerima data items untuk ditampilkan
defineProps({
  items: {
    type: Array,
    required: true
  }
})

// Emits: Memberi tahu parent jika ada aksi
const emit = defineEmits(['edit', 'delete'])

const menuStore = useMenuStore() // Hanya untuk helper formatPrice
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full text-left">
        <thead class="bg-[#FFF6E0] text-[#3E2723] font-market uppercase text-xs tracking-wider">
          <tr>
            <th class="px-6 py-4">Produk</th>
            <th class="px-6 py-4">Kategori</th>
            <th class="px-6 py-4">Harga</th>
            <th class="px-6 py-4">Status</th>
            <th class="px-6 py-4 text-right">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="item in items" :key="item.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4">
              <div class="flex items-center gap-3">
                <img :src="item.img" class="w-10 h-10 rounded-lg object-cover bg-gray-100">
                <div>
                  <p class="font-bold text-[#3E2723] text-sm">{{ item.name }}</p>
                  <p class="text-xs text-gray-400 uppercase">{{ item.type }}</p>
                </div>
              </div>
            </td>
            <td class="px-6 py-4">
              <span 
                class="text-xs font-bold px-2 py-1 rounded-full"
                :class="item.category === 'FOOD' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'"
              >
                {{ item.category }}
              </span>
            </td>
            <td class="px-6 py-4 font-market text-[#3E2723]">
              {{ menuStore.formatPrice(item.price) }}
            </td>
            <td class="px-6 py-4">
              <span 
                class="w-2 h-2 rounded-full inline-block mr-2"
                :class="item.status === 'Tersedia' ? 'bg-green-500' : 'bg-red-500'"
              ></span>
              <span class="text-xs text-gray-600">{{ item.status }}</span>
            </td>
            <td class="px-6 py-4 text-right space-x-2">
              <button @click="emit('edit', item)" class="text-blue-600 hover:text-blue-800 text-xs font-bold underline">EDIT</button>
              <button @click="emit('delete', item.id)" class="text-red-600 hover:text-red-800 text-xs font-bold underline">HAPUS</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>