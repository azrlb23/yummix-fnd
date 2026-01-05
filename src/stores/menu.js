import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'

export const useMenuStore = defineStore('menu', () => {
  const items = ref([])
  const isLoading = ref(false)

  // --- 1. FETCH DATA DARI SUPABASE ---
  async function fetchMenu() {
    isLoading.value = true
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true })

      if (error) throw error

      // Mapping: Ubah format Database (snake_case) ke format Frontend (camelCase/Legacy)
      // Agar 'MenuCard.vue' dan file lain tidak error
      items.value = data.map(dbItem => ({
        id: dbItem.id,
        name: dbItem.name,
        price: dbItem.price,
        category: dbItem.category,    // 'Food' / 'Drink'
        type: dbItem.sub_category,    // Database: sub_category -> Frontend: type
        img: dbItem.image_url,        // Database: image_url -> Frontend: img
        description: dbItem.description,
        // Konversi Boolean ke String Status
        status: dbItem.is_available ? 'Tersedia' : 'Habis',
        // Simpan nilai asli boolean untuk keperluan edit nanti
        is_available: dbItem.is_available 
      }))

    } catch (err) {
      console.error('Gagal mengambil menu:', err.message)
    } finally {
      isLoading.value = false
    }
  }

  // --- 2. TAMBAH MENU KE DATABASE ---
  async function addMenu(newItem) {
    try {
      // newItem adalah data bersih dari MenuFormModal (sudah format DB)
      const { data, error } = await supabase
        .from('products')
        .insert([newItem])
        .select()

      if (error) throw error

      // Update state lokal manual (biar gak perlu fetch ulang/loading lagi)
      if (data && data[0]) {
        const dbItem = data[0]
        items.value.push({
          id: dbItem.id,
          name: dbItem.name,
          price: dbItem.price,
          category: dbItem.category,
          type: dbItem.sub_category,
          img: dbItem.image_url,
          description: dbItem.description,
          status: dbItem.is_available ? 'Tersedia' : 'Habis',
          is_available: dbItem.is_available
        })
      }
      return true // Beritahu caller kalau sukses
    } catch (err) {
      console.error('Gagal menambah menu:', err.message)
      throw err
    }
  }

  // --- 3. UPDATE MENU DI DATABASE ---
  async function updateMenu(updatedItem) {
    try {
      // Ambil ID dan data sisanya
      const { id, ...updates } = updatedItem

      const { data, error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()

      if (error) throw error

      // Update state lokal
      const index = items.value.findIndex(i => i.id === id)
      if (index !== -1 && data && data[0]) {
        const dbItem = data[0]
        items.value[index] = {
          ...items.value[index], // Pertahankan data lama
          name: dbItem.name,
          price: dbItem.price,
          category: dbItem.category,
          type: dbItem.sub_category,
          img: dbItem.image_url,
          description: dbItem.description,
          status: dbItem.is_available ? 'Tersedia' : 'Habis',
          is_available: dbItem.is_available
        }
      }
    } catch (err) {
      console.error('Gagal update menu:', err.message)
      throw err
    }
  }

  // --- 4. HAPUS MENU DARI DATABASE ---
  async function deleteMenu(id) {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)

      if (error) throw error

      // Hapus dari state lokal
      items.value = items.value.filter(i => i.id !== id)
    } catch (err) {
      console.error('Gagal menghapus menu:', err.message)
      throw err
    }
  }

  // Helper (Tetap sama)
  function getItemById(id) {
    return items.value.find(i => i.id === parseInt(id))
  }

  function formatPrice(value) {
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR', 
      minimumFractionDigits: 0 
    }).format(value)
  }

  return { 
    items, 
    isLoading, 
    fetchMenu, 
    addMenu, 
    updateMenu, 
    deleteMenu, 
    formatPrice, 
    getItemById 
  }
})