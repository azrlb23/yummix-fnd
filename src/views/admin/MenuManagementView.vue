<script setup>
import { ref, computed } from 'vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
const showModal = ref(false)
const isEditing = ref(false)

// Form Model
const formData = ref({
  id: null,
  name: '',
  price: 0,
  category: 'FOOD',
  type: '',
  status: 'Tersedia',
  img: null // Nanti dihandle upload
})

// Filter Tampilan
const filterCategory = ref('ALL')

const filteredItems = computed(() => {
  if (filterCategory.value === 'ALL') return menuStore.items
  return menuStore.items.filter(i => i.category === filterCategory.value)
})

// Fungsi Buka Modal Tambah
const openAddModal = () => {
  isEditing.value = false
  formData.value = { id: null, name: '', price: 0, category: 'FOOD', type: '', status: 'Tersedia', img: 'https://placehold.co/150' }
  showModal.value = true
}

// Fungsi Buka Modal Edit
const openEditModal = (item) => {
  isEditing.value = true
  // Copy object agar tidak reaktif langsung (clone)
  formData.value = { ...item } 
  showModal.value = true
}

// Fungsi Simpan
const saveMenu = () => {
  if (isEditing.value) {
    menuStore.updateMenu(formData.value)
  } else {
    menuStore.addMenu(formData.value)
  }
  showModal.value = false
}

// Fungsi Hapus
const handleDelete = (id) => {
  if(confirm('Yakin ingin menghapus menu ini?')) {
    menuStore.deleteMenu(id)
  }
}
</script>

<template>
  <div class="space-y-6">
    
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h2 class="font-potta text-[#3E2723] text-3xl">Daftar Menu</h2>
        <p class="font-market text-gray-500 text-sm">Kelola makanan dan minuman yang tersedia.</p>
      </div>
      <button 
        @click="openAddModal"
        class="bg-[#C62E2E] text-white px-6 py-2 rounded-full font-market shadow-md hover:bg-[#9E2222] transition-colors flex items-center gap-2"
      >
        <span>+</span> TAMBAH MENU
      </button>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      
      <div class="flex border-b border-gray-100">
        <button 
          @click="filterCategory = 'ALL'"
          class="px-6 py-3 font-market text-sm transition-colors"
          :class="filterCategory === 'ALL' ? 'text-[#C62E2E] border-b-2 border-[#C62E2E]' : 'text-gray-500 hover:text-[#C62E2E]'"
        >
          SEMUA
        </button>
        <button 
          @click="filterCategory = 'FOOD'"
          class="px-6 py-3 font-market text-sm transition-colors"
          :class="filterCategory === 'FOOD' ? 'text-[#C62E2E] border-b-2 border-[#C62E2E]' : 'text-gray-500 hover:text-[#C62E2E]'"
        >
          MAKANAN
        </button>
        <button 
          @click="filterCategory = 'DRINKS'"
          class="px-6 py-3 font-market text-sm transition-colors"
          :class="filterCategory === 'DRINKS' ? 'text-[#C62E2E] border-b-2 border-[#C62E2E]' : 'text-gray-500 hover:text-[#C62E2E]'"
        >
          MINUMAN
        </button>
      </div>

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
            <tr v-for="item in filteredItems" :key="item.id" class="hover:bg-gray-50 transition-colors">
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
                <button @click="openEditModal(item)" class="text-blue-600 hover:text-blue-800 text-xs font-bold underline">EDIT</button>
                <button @click="handleDelete(item.id)" class="text-red-600 hover:text-red-800 text-xs font-bold underline">HAPUS</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" @click.self="showModal = false">
      <div class="bg-white w-full max-w-md rounded-xl p-6 shadow-2xl animate-fade-in">
        <h3 class="font-potta text-xl text-[#3E2723] mb-4">{{ isEditing ? 'Edit Menu' : 'Tambah Menu Baru' }}</h3>
        
        <form @submit.prevent="saveMenu" class="space-y-4">
          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1">NAMA PRODUK</label>
            <input v-model="formData.name" type="text" class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#C62E2E] outline-none" required>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1">HARGA (RP)</label>
              <input v-model="formData.price" type="number" class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#C62E2E] outline-none" required>
            </div>
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1">TIPE</label>
              <input v-model="formData.type" type="text" placeholder="Contoh: KEBAB" class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#C62E2E] outline-none" required>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1">KATEGORI</label>
              <select v-model="formData.category" class="w-full border border-gray-300 rounded-lg p-2 text-sm">
                <option value="FOOD">FOOD</option>
                <option value="DRINKS">DRINKS</option>
              </select>
            </div>
            <div>
              <label class="text-xs font-bold text-gray-500 block mb-1">STATUS</label>
              <select v-model="formData.status" class="w-full border border-gray-300 rounded-lg p-2 text-sm">
                <option value="Tersedia">Tersedia</option>
                <option value="Habis">Habis</option>
              </select>
            </div>
          </div>

          <div class="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
            <button type="button" @click="showModal = false" class="text-gray-500 text-sm font-bold hover:bg-gray-100 px-4 py-2 rounded-lg">BATAL</button>
            <button type="submit" class="bg-[#C62E2E] text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-[#9E2222] shadow-lg">SIMPAN</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<style scoped>
.animate-fade-in { animation: fadeIn 0.3s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>