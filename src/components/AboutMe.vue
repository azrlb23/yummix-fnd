<script setup>
// Data Skill (Bisa diubah sesuai keahlian)
const skills = [
  { title: 'Vue.js', icon: '🟢', desc: 'Frontend Framework' },
  { title: 'Tailwind', icon: '🎨', desc: 'Utility-First CSS' },
  { title: 'UI/UX', icon: '✨', desc: 'Designing Experience' }
]
</script>

<template>
  <div class="w-full flex justify-center items-center py-12 px-6 md:px-16 lg:px-24">
    
    <div class="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <div class="order-2 md:order-1 space-y-6 text-center md:text-left">
        
        <div>
          <h2 class="font-market text-[#C62E2E] text-lg md:text-xl tracking-widest mb-2">
            HELLO, I AM
          </h2>
          <h1 class="font-potta text-[#3E2723] text-4xl md:text-6xl leading-tight">
            Azriel Albian
          </h1>
        </div>

        <p class="font-poppins text-[#5D4037] text-sm md:text-base leading-relaxed opacity-90">
          Saya adalah seorang pengembang web yang bersemangat menciptakan pengalaman digital yang interaktif dan responsif. 
          Dengan spesialisasi di Vue.js dan Tailwind CSS, saya mengubah ide menjadi antarmuka yang nyata dan fungsional. 
          Mari berkolaborasi untuk menciptakan sesuatu yang luar biasa!
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div 
            v-for="(skill, index) in skills" 
            :key="index"
            class="bg-white/60 border border-[#3E2723]/10 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div class="text-3xl mb-2">{{ skill.icon }}</div>
            <h3 class="font-potta text-[#3E2723] text-lg">{{ skill.title }}</h3>
            <p class="font-market text-[#5D4037] text-[10px] uppercase tracking-wide">{{ skill.desc }}</p>
          </div>
        </div>

        <div class="pt-4">
          <a href="mailto:azrielalbian23@gmail.com" class="bg-[#3E2723] text-white px-8 py-3 rounded-full font-market tracking-widest shadow-lg hover:bg-[#5D4037] transition-colors inline-block">
            CONTACT ME
          </a>
        </div>

      </div>

      <div class="order-1 md:order-2 hidden md:flex justify-center md:justify-end relative">
        
        <div class="absolute inset-0 bg-[#C62E2E]/10 rounded-full blur-3xl scale-90 -z-10"></div>
        
        <div class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-[8px] border-white shadow-2xl relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Profile Photo" 
            class="w-full h-full object-cover"
          >
        </div>
      </div>

    </div>

  </div>
</template>