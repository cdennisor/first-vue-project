<template>
   <button @click="toogleDarkMode" class=" md:ml-20 z-10 md:block text-primaryLight">
      <!-- Mostrar icono de modo dark o light-->
      <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-4xl md:text-5xl"/>
      <Icon v-else icon="line-md:sunny-outline" class="text-4xl md:text-5xl text-primaryDark"/>
   </button>
</template>
<script setup>
   // Propiedad reactiva para rastrear el estado del modo oscuro
   import {ref, watch, onBeforeUnmount} from 'vue';
   const isDarkMode = ref(localStorage.getItem('theme') === 'dark');

   const toogleDarkMode = ()=>{
      const html = document.documentElement;
      if (isDarkMode.value){
         html.classList.remove('dark');
         localStorage.setItem('theme','light');
      }else {
         html.classList.add('dark');
         localStorage.setItem('theme','dark');
      }

      // actualizar el estado del modo dark
      isDarkMode.value = !isDarkMode.value;
   }
</script>