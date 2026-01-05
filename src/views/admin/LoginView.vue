<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMsg = ref('')
const showPassword = ref(false) // Fitur intip password

const handleLogin = async () => {
  isLoading.value = true
  errorMsg.value = ''

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error
    router.push('/admin') 
    
  } catch (err) {
    errorMsg.value = 'Login gagal! Email atau password salah.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex bg-[#FFF6E0]">
    
    <div class="hidden lg:flex w-1/2 bg-[#3E2723] relative overflow-hidden items-center justify-center">
      <div class="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
          alt="Food Background" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="relative z-10 text-center p-12">
        <h1 class="font-potta text-6xl text-[#FFF6E0] mb-4 drop-shadow-lg">YUMMIX</h1>
        <p class="text-white text-xl font-light tracking-wide">
          Manage your delicious menu<br>with ease & style.
        </p>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-12 relative">
      
      <div class="lg:hidden text-center mb-8">
        <h1 class="font-potta text-4xl text-[#C62E2E]">YUMMIX</h1>
        <p class="text-[#3E2723] text-sm mt-1">Admin Dashboard</p>
      </div>

      <div class="w-full max-w-md space-y-8">
        <div class="text-center lg:text-left">
          <h2 class="font-potta text-3xl text-[#3E2723]">Welcome Back!</h2>
          <p class="text-gray-500 mt-2">Silakan masuk untuk mengelola pesanan.</p>
        </div>

        <div v-if="errorMsg" class="bg-red-50 border-l-4 border-[#C62E2E] p-4 rounded-r shadow-sm flex items-center gap-3 animate-pulse">
          <span class="text-xl">⚠️</span>
          <p class="text-sm text-red-700 font-medium">{{ errorMsg }}</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          
          <div class="space-y-2">
            <label class="text-sm font-bold text-[#3E2723] tracking-wide">EMAIL</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input 
                v-model="email" 
                type="email" 
                required 
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C62E2E] focus:border-transparent outline-none transition-all bg-white/50 hover:bg-white"
                placeholder="admin@yummix.com"
              >
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-bold text-[#3E2723] tracking-wide">PASSWORD</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input 
                v-model="password" 
                :type="showPassword ? 'text' : 'password'" 
                required 
                class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C62E2E] focus:border-transparent outline-none transition-all bg-white/50 hover:bg-white"
                placeholder="••••••••"
              >
              <button type="button" @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#C62E2E]">
                <svg v-if="!showPassword" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full bg-[#C62E2E] text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-[#9E2222] hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2"
          >
            <span v-if="isLoading" class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            {{ isLoading ? 'Memproses...' : 'LOGIN DASHBOARD' }}
          </button>
        </form>

        <div class="text-center mt-6">
          <RouterLink to="/" class="text-sm text-gray-500 hover:text-[#C62E2E] transition-colors flex items-center justify-center gap-1 group">
            <span class="group-hover:-translate-x-1 transition-transform">←</span> Kembali ke Menu Pelanggan
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>