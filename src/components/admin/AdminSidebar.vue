<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase' // <--- 1. Import Supabase

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
const router = useRouter()

// 2. Hapus 'Logout' dari array ini (kita buat tombol terpisah)
const adminLinks = [
  { name: 'Dashboard', path: '/admin' },
  { name: 'Manajemen Menu', path: '/admin/menu' },
  { name: 'Pesanan Masuk', path: '/admin/orders' },
]

// 3. Fungsi Logika Logout (Cabut Kunci)
const handleLogout = async () => {
  try {
    // Hapus sesi di server & local storage
    const { error } = await supabase.auth.signOut()
    if (error) throw error

    // Tutup sidebar (jika di mobile)
    emit('close')

    // Tendang ke halaman login (bukan home, biar jelas sudah keluar)
    router.replace('/admin/login') 
    
  } catch (error) {
    console.error('Logout error:', error.message)
    alert('Gagal logout!')
  }
}
</script>

<template>
  <aside 
    class="w-64 bg-[#C62E2E] text-white flex flex-col fixed h-full shadow-xl z-40 transition-transform duration-300 ease-in-out"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <div class="p-6 flex items-center justify-between lg:justify-center border-b border-white/10">
      <h1 class="font-potta text-2xl tracking-widest">ADMIN</h1>
      <button @click="emit('close')" class="lg:hidden text-white">✕</button>
    </div>

    <nav class="flex-grow p-4 space-y-2 overflow-y-auto">
      <RouterLink 
        v-for="link in adminLinks" 
        :key="link.path" 
        :to="link.path"
        @click="emit('close')" 
        class="block px-4 py-3 rounded-lg font-market text-sm tracking-widest transition-colors hover:bg-white/10"
        active-class="bg-white text-[#C62E2E]"
      >
        {{ link.name }}
      </RouterLink>
    </nav>

    <div class="p-4 border-t border-white/10">
      <button 
        @click="handleLogout"
        class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-market text-sm tracking-widest bg-[#3E2723] hover:bg-[#2c1b17] transition-colors"
      >
        <span>LOGOUT</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
        </svg>
      </button>
      
      <div class="mt-4 text-center text-xs font-market opacity-50">
        YUMMIX ADMIN v1.0
      </div>
    </div>
  </aside>
</template>