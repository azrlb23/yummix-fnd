<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  editItem: Object // Data menu yang akan diedit (null jika Tambah Baru)
})

const emit = defineEmits(['close', 'save'])

// State Lokal Form (Agar tidak mengubah data asli sebelum save)
const formData = ref({
  id: null,
  name: '',
  price: 0,
  category: 'FOOD',
  type: '',
  status: 'Tersedia',
  img: 'https://placehold.co/150' // Default placeholder
})

// Reset/Isi form saat modal dibuka
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    if (props.editItem) {
      // Mode Edit: Clone data agar reaktif terpisah
      formData.value = { ...props.editItem }
    } else {
      // Mode Tambah: Reset form
      formData.value = { 
        id: null, 
        name: '', 
        price: 0, 
        category: 'FOOD', 
        type: '', 
        status: 'Tersedia', 
        img: 'https://placehold.co/150' 
      }
    }
  }
})

const isEditing = computed(() => !!props.editItem)

const handleSubmit = () => {
  // Emit data yang sudah diisi ke parent
  emit('save', { ...formData.value }) 
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" @click.self="$emit('close')">
    <div class="bg-white w-full max-w-md rounded-xl p-6 shadow-2xl animate-fade-in">
      
      <h3 class="font-potta text-xl text-[#3E2723] mb-4">
        {{ isEditing ? 'Edit Menu' : 'Tambah Menu Baru' }}
      </h3>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
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
          <button type="button" @click="$emit('close')" class="text-gray-500 text-sm font-bold hover:bg-gray-100 px-4 py-2 rounded-lg">BATAL</button>
          <button type="submit" class="bg-[#C62E2E] text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-[#9E2222] shadow-lg">SIMPAN</button>
        </div>
      </form>

    </div>
  </div>
</template>

<style scoped>
.animate-fade-in { animation: fadeIn 0.3s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>