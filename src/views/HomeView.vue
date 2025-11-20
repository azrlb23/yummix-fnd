<script setup>
import NavbarSection from '@/components/NavbarSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ReviewSection from '@/components/ReviewSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
  <div class="min-h-screen w-full bg-[#FFF6E0] flex flex-col">
    <NavbarSection />
    
    <HeroSection />
    <AboutSection /> 
    <ReviewSection/>
    <FooterSection/>
    </div>
</template>