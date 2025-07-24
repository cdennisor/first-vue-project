<template>
   <button  
      v-if="isVisible" 
      @click="scrollToTop"
      class="fixed bottom-4 left-4 bg-gradient-to-r bg-[#28a745] text-white rounded-full z-10
      w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-[#28c44d]">
      <Icon icon="line-md:arrow-up" class="font-bold"/>
   </button>
</template>
<script setup>
//bottom-4
   import { onMounted, onUnmounted, ref } from 'vue';
   const isVisible = ref(false);
   const handleScroll = () => {
      isVisible.value = window.scrollY > 300;
   }

   const scrollToTop = () => {
      window.scrollTo({top:0,behavior:'smooth'})
   }
   
   onMounted(()=>{
      window.addEventListener('scroll',handleScroll)
   });

   onUnmounted(()=>{
      window.removeEventListener('scroll',handleScroll)
   });
</script>