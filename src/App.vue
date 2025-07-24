<template>
   <!-- <SectionMain/> -->
    <div class="bg-[#fbf7ef] dark:bg-customBlack min-h-screen">
      <NavBar />
      <HeroSection />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <!-- <ScrollToTop /> -->
      <Footer />
      <Chatbot />
    </div>
</template>
<script setup>
   import { defineAsyncComponent } from 'vue';
   const NavBar = defineAsyncComponent(()=>import('@/components/layouts/Navbar.vue'));
   const HeroSection = defineAsyncComponent(()=>import('@/components/layouts/HeroSection.vue'));
   const Services = defineAsyncComponent(()=>import('@/components/layouts/Services.vue'));
   const Skills = defineAsyncComponent(() => import('@/components/layouts/Skills.vue'));
   const Projects = defineAsyncComponent(() => import('@/components/layouts/Projects.vue'));
   const Contact = defineAsyncComponent(() => import('@/components/layouts/Contact.vue'));
   //const ScrollToTop = defineAsyncComponent(() => import('@/components/layouts/BackToTop.vue'));
   const Footer = defineAsyncComponent(() => import('@/components/layouts/Footer.vue'));
   const Chatbot = defineAsyncComponent(() => import('@/components/layouts/Bot.vue'));
   //import SectionMain from '@/components/SectionMain.vue';
</script>