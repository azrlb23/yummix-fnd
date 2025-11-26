<script setup>
import { computed } from 'vue'

const reviews = [
  { id: 1, text: "Jujur awalnya ragu, tapi pas nyoba burger-nya langsung jatuh cinta. Dagingnya juicy, rotinya lembut. Fix bakal jadi langganan tiap minggu.", name: "DIMAS PRATAMA", role: "Anak Himpunan", img: "https://i.pravatar.cc/150?img=3" },
  { id: 2, text: "Yummix selalu jadi pilihan utama kalau lagi buru-buru. Enak, cepet, dan varian menunya bikin gak bosen. Salut buat tim Yummix!", name: "EVA PUTRI", role: "Dosen Pembimbing", img: "https://i.pravatar.cc/150?img=5" },
  { id: 3, text: "Kebabnya the best! Dagingnya banyak, sayurnya fresh. Cocok banget buat makan siang yang praktis dan mengenyangkan.", name: "RIZKY JAYA", role: "Alumni ITK", img: "https://i.pravatar.cc/150?img=11" },
  { id: 4, text: "Tempat paling asik buat nugas. WiFi kenceng, kopi enak, dan makanannya murah meriah tapi rasanya bintang lima.", name: "SITI AMINAH", role: "Mahasiswa Design", img: "https://i.pravatar.cc/150?img=9" },
  { id: 5, text: "Pelayanan ramah banget, tempatnya bersih. Cocok buat ngerjain tugas atau sekedar ngobrol santai. Makanannya juga cepet sampainya.", name: "BUDI SANTOSO", role: "Mahasiswa ITK", img: "https://i.pravatar.cc/150?img=12" },
]

const chunkedReviews = computed(() => {
  const result = []
  for (let i = 0; i < reviews.length; i += 3) {
    result.push(reviews.slice(i, i + 3))
  }
  return result
})

const scrollToSlide = (index) => {
  const targetId = `slide-${index}`
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }
}
</script>

<template>
  <section id="review" class="w-full py-16 lg:py-20 bg-[#FFF6E0]">
    <div class="max-w-[1150px] mx-auto w-full text-center space-y-10 px-4">
      
      <h2 v-animate class="font-potta text-3xl md:text-5xl text-[#3E2723]">
        What Our Customer Says?
      </h2>

      <div class="carousel w-full">
        
        <div 
          v-for="(group, index) in chunkedReviews" 
          :key="index" 
          :id="`slide-${index}`" 
          class="carousel-item relative w-full"
        >
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-2 md:px-5">
            
            <div v-for="review in group" :key="review.id" class="flex justify-center w-full h-full">
              
              <div class="bg-[#FFF8E7] p-8 rounded-xl shadow-sm border border-[#3E2723]/10 flex flex-col items-center text-center h-auto md:h-[400px] w-full max-w-[340px] justify-between transform transition-transform duration-300 hover:-translate-y-2">
                
                <p class="font-poppins text-[#5D4037] text-sm italic leading-relaxed mt-2 mb-6">
                  "{{ review.text }}"
                </p>
                
                <div class="flex flex-col items-center gap-3">
                  <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-[#BF360C]">
                    <img :src="review.img" :alt="review.name" class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300">
                  </div>
                  <div>
                    <h4 class="font-market text-[#3E2723] text-lg font-bold tracking-wider uppercase">
                      {{ review.name }}
                    </h4>
                    <span class="font-poppins text-[11px] text-[#BF360C] font-bold uppercase tracking-widest">
                      {{ review.role }}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div v-if="group.length < 3" class="hidden md:block"></div>
            <div v-if="group.length < 2" class="hidden md:block"></div>

          </div>

        </div>
      </div>
      
      <div class="flex justify-center w-full pt-4 md:pt-8 gap-2">
        <a 
          v-for="(group, i) in chunkedReviews" 
          :key="i" 
          :href="`#slide-${i}`" 
          class="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#3E2723]/20 hover:bg-[#3E2723] transition-all active:bg-[#3E2723]"
        ></a>
      </div>

    </div>
  </section>
</template>