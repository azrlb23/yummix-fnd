<script setup>
import { ref, watch, computed } from 'vue'
import { supabase } from '@/lib/supabase' 

const props = defineProps({
  isOpen: Boolean,
  editItem: Object 
})

const emit = defineEmits(['close', 'save'])

const categoryMap = {
  Food: ['Kebab', 'Roti, Mie, Burger'],
  Drink: ['Coffee, Squash, Milk']
}

const selectedFile = ref(null)
const isUploading = ref(false)

const formData = ref({
  id: null,
  name: '',
  price: 0,
  category: '',
  sub_category: '',
  status: 'Tersedia',
  description: '',
  image_url: ''
})

const availableSubCategories = computed(() => {
  if (!formData.value.category) return []
  return categoryMap[formData.value.category] || []
})

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) selectedFile.value = file
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    selectedFile.value = null 
    if (props.editItem) {
      formData.value = { 
        ...props.editItem,
        sub_category: props.editItem.sub_category || props.editItem.type, 
        image_url: props.editItem.image_url || props.editItem.img
      }
    } else {
      formData.value = { 
        id: null, name: '', price: 0, category: '', sub_category: '', 
        status: 'Tersedia', description: '', image_url: '' 
      }
    }
  }
})

const handleSubmit = async () => {
  isUploading.value = true
  try {
    let finalImageUrl = formData.value.image_url

    if (selectedFile.value) {
      const fileName = `${Date.now()}-${selectedFile.value.name.replace(/\s/g, '-')}`
      const { data, error } = await supabase.storage
        .from('menu-images')
        .upload(fileName, selectedFile.value)
      
      if (error) throw error

      const { data: urlData } = supabase.storage
        .from('menu-images')
        .getPublicUrl(fileName)
        
      finalImageUrl = urlData.publicUrl
    }

    emit('save', { 
      ...formData.value,
      image_url: finalImageUrl,
      is_available: formData.value.status === 'Tersedia' 
    })
  } catch (err) {
    alert('Gagal menyimpan: ' + err.message)
  } finally {
    isUploading.value = false
  }
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

        <div>
          <label class="text-xs font-bold text-gray-500 block mb-1">DESKRIPSI</label>
          <textarea v-model="formData.description" rows="2" class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#C62E2E] outline-none" placeholder="Deskripsi singkat menu..." required></textarea>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1">HARGA (RP)</label>
            <input v-model="formData.price" type="number" class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#C62E2E] outline-none" required>
          </div>

          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1">STATUS</label>
            <select v-model="formData.status" class="w-full border border-gray-300 rounded-lg p-2 text-sm bg-white">
              <option value="Tersedia">Tersedia</option>
              <option value="Habis">Habis</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1">KATEGORI UTAMA</label>
            <select v-model="formData.category" class="w-full border border-gray-300 rounded-lg p-2 text-sm bg-white" required>
              <option disabled value="">Pilih...</option>
              <option value="Food">Food</option>
              <option value="Drink">Drink</option>
            </select>
          </div>
          
          <div>
            <label class="text-xs font-bold text-gray-500 block mb-1">SUB KATEGORI</label>
            <select v-model="formData.sub_category" :disabled="!formData.category" class="w-full border border-gray-300 rounded-lg p-2 text-sm bg-white disabled:bg-gray-100" required>
              <option disabled value="">Pilih Detail...</option>
              <option v-for="sub in availableSubCategories" :key="sub" :value="sub">
                {{ sub }}
              </option>
            </select>
          </div>
        </div>

        <div>
          <label class="text-xs font-bold text-gray-500 block mb-1">FOTO PRODUK</label>
          <div class="flex items-center gap-3">
            <input type="file" @change="handleFileChange" accept="image/*" class="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#FFF6E0] file:text-[#3E2723] hover:file:bg-[#FFB300]"/>
            
            <img v-if="formData.image_url && !selectedFile" :src="formData.image_url" class="h-10 w-10 object-cover rounded-full border border-gray-200">
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
          <button type="button" @click="$emit('close')" class="text-gray-500 text-sm font-bold hover:bg-gray-100 px-4 py-2 rounded-lg">BATAL</button>
          <button type="submit" :disabled="isUploading" class="bg-[#C62E2E] text-white text-sm font-bold px-6 py-2 rounded-lg hover:bg-[#9E2222] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            <span v-if="isUploading" class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            {{ isUploading ? 'UPLOADING...' : 'SIMPAN' }}
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<style scoped>
.animate-fade-in { animation: fadeIn 0.3s ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>