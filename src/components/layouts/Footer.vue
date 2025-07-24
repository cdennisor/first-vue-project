<template>
   <footer class="text-white mt-12 z-10 bg-[#252d35]">
      <div class="mt-10 pb-5 pt-20 xs:px-10 xl:px-16 px-4 flex justify-center gap-10 flex-col sm:flex-row lg:w-[75%] mx-auto">
         <div class="w-full md:w-1/2">
            <div class="w-full">
               <h3 class="text-center sm:text-left mb-5 text-2xl font-semibold tracking-wide">Datos de contacto</h3>
               <ul>                  
                  <li v-for="(element,index) in contact" :key="index" class="flex justify-center sm:justify-start gap-4 items-center mb-3">
                     <img :src="`/src/assets/icons/${ element.icon }`" alt="icono" class="w-[30px] h-[30px] bg-white p-1 
                        rounded-full">
                     <p>{{ element.label }}</p>
                  </li>
               </ul>
            </div>
         </div>

         <div class="w-full md:w-1/2">
            <h3 class="mb-5 text-2xl font-semibold tracking-wide text-center sm:text-right">Redes</h3>
            <div class="w-full flex gap-2 justify-center sm:justify-end">
               <a href="https://github.com/cdennisor" class="text-gray-500 hover:text-gray-200 transition-all duration-300 hover:scale-110">
                  <Icon icon="mdi:github" style="font-size: 2.5rem;"/>
               </a>
               <a href="facebook.com/sinned.orcd" class="text-gray-500 rounded-full hover:text-gray-200 transition-all duration-300 hover:scale-110">
                  <Icon icon="ic:baseline-facebook" style="font-size: 2.5rem;"/>
               </a>
               <a href="www.youtube.com/@thingsofworld5838" class="text-gray-500 hover:text-gray-200 transition-all duration-300 hover:scale-110">
                  <Icon icon="line-md:youtube-filled" style="font-size: 2.5rem;"/>
               </a>                        
            </div>
         </div>
      </div>
      <div class="py-5 flex justify-center items-center gap-2">
         <p>&copy; Derechos Reservados 2025 - </p>
         <Logo class="hover:underline underline-offset-2"/>
      </div>
   </footer>   
</template>
<script setup>
   import Logo from '@/components/UI/Logo.vue';
   import { ref } from 'vue';
   const contact = ref([
      {icon:"/email.svg",label:"cdennisor17@gmail.com"},
      {icon:"/whatsApp.svg",label:"+51916595794"},
      {icon:"/location.svg",label:"Lima - Perú"},
   ]);
//#002f4b
</script>
