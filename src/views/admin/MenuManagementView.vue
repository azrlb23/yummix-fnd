<script setup>
import { ref, computed } from 'vue'
import { useMenuStore } from '@/stores/menu'

// Import Components
import MenuTable from '@/components/admin/menu/MenuTable.vue'
import MenuFormModal from '@/components/admin/menu/MenuFormModal.vue'

const menuStore = useMenuStore()

// State Halaman
const showModal = ref(false)
const editingItem = ref(null)
const filterCategory = ref('ALL')

// Filter Logic
const filteredItems = computed(() => {
  if (filterCategory.value === 'ALL') return menuStore.items
  return menuStore.items.filter(i => i.category === filterCategory.value)
})

// Handler: Buka Modal Tambah
const openAddModal = () => {
  editingItem.value = null // Null artinya mode tambah
  showModal.value = true
}

// Handler: Buka Modal Edit
const openEditModal = (item) => {
  editingItem.value = item // Isi dengan data yang mau diedit
  showModal.value = true
}

// Handler: Simpan Data (Dari emit 'save' di modal)
const handleSave = (formData) => {
  if (formData.id) {
    menuStore.updateMenu(formData)
  } else {
    menuStore.addMenu(formData)
  }
  showModal.value = false
}

// Handler: Hapus Data (Dari emit 'delete' di table)
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

    <div class="flex border-b border-gray-200">
      <button 
        v-for="cat in ['ALL', 'FOOD', 'DRINKS']" 
        :key="cat"
        @click="filterCategory = cat"
        class="px-6 py-3 font-market text-sm transition-colors border-b-2"
        :class="filterCategory === cat ? 'text-[#C62E2E] border-[#C62E2E]' : 'text-gray-500 border-transparent hover:text-[#C62E2E]'"
      >
        {{ cat === 'ALL' ? 'SEMUA' : (cat === 'FOOD' ? 'MAKANAN' : 'MINUMAN') }}
      </button>
    </div>

    <MenuTable 
      :items="filteredItems" 
      @edit="openEditModal" 
      @delete="handleDelete" 
    />

    <MenuFormModal 
      :is-open="showModal" 
      :edit-item="editingItem"
      @close="showModal = false"
      @save="handleSave"
    />

  </div>
</template>