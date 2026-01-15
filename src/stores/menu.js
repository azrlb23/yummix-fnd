import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '@/lib/supabase'

export const useMenuStore = defineStore('menu', () => {
  const items = ref([])
  const isLoading = ref(false)

  // --- 1. FETCH DATA (Tidak Berubah) ---
  async function fetchMenu() {
    isLoading.value = true
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('id', { ascending: true })

      if (error) throw error

      items.value = data.map(dbItem => ({
        id: dbItem.id,
        name: dbItem.name,
        price: dbItem.price,
        category: dbItem.category,
        type: dbItem.sub_category,
        img: dbItem.image_url,
        description: dbItem.description,
        status: dbItem.is_available ? 'Tersedia' : 'Habis',
        is_available: dbItem.is_available
      }))

    } catch (err) {
      console.error('Gagal mengambil menu:', err.message)
    } finally {
      isLoading.value = false
    }
  }

  // --- 2. TAMBAH MENU (PERBAIKAN UTAMA DISINI) ---
  async function addMenu(newItem) {
    try {
      // ⚠️ FILTERING: Pisahkan 'status' (sampah) dari data asli
      // 'status' dan 'id' kita buang, sisanya kita tampung di 'sisaData'
      const { status, id, ...sisaData } = newItem

      // Kita susun ulang agar 100% cocok dengan kolom Database
      const dbPayload = {
        name: sisaData.name,
        price: sisaData.price,
        category: sisaData.category,
        sub_category: sisaData.sub_category || sisaData.type,
        description: sisaData.description,
        image_url: sisaData.image_url || sisaData.img,
        is_available: sisaData.is_available // Gunakan boolean, bukan string 'status'
      }

      const { data, error } = await supabase
        .from('products')
        .insert([dbPayload]) // Kirim data yang sudah bersih
        .select()

      if (error) throw error

      // Update state lokal
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
      return true
    } catch (err) {
      console.error('Gagal menambah menu:', err.message)
      throw err
    }
  }

  // --- 3. UPDATE MENU (PERBAIKAN JUGA DISINI) ---
  async function updateMenu(updatedItem) {
    try {
      // Sama seperti addMenu, kita buang 'status'
      const { id, status, ...sisaData } = updatedItem

      const dbPayload = {
        name: sisaData.name,
        price: sisaData.price,
        category: sisaData.category,
        sub_category: sisaData.sub_category || sisaData.type,
        description: sisaData.description,
        image_url: sisaData.image_url || sisaData.img,
        is_available: sisaData.is_available
      }

      const { data, error } = await supabase
        .from('products')
        .update(dbPayload)
        .eq('id', id)
        .select()

      if (error) throw error

      // Update state lokal
      const index = items.value.findIndex(i => i.id === id)
      if (index !== -1 && data && data[0]) {
        const dbItem = data[0]
        items.value[index] = {
          ...items.value[index],
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

  // --- 4. HAPUS MENU ---
  async function deleteMenu(id) {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)

      if (error) throw error
      items.value = items.value.filter(i => i.id !== id)
    } catch (err) {
      console.error('Gagal menghapus menu:', err.message)
      throw err
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