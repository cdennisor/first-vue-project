<template>
   <header class="flex justify-between items-center px-6 py-2 dark:bg-customBlack dark:border-b-primaryDark
      fixed left-0 top-0 w-full z-20 bg-[#fbf7ef] border-b-primaryLight border-b-2 border-opacity-20 dark:border-opacity-20">
      <Logo/>
      <div class="flex items-center flex-row gap-6 md:gap-0">
         <div class="flex items-center flex-row">
            <!-- Navbar Links -->
            <nav :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] bg-opacity-95 md:relative md:bg-transparent md:flex md:justify-between md:flex-row',
               isMenuOpen ? 'block':'hidden']">
               <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 
                  overflow-y-auto w-full scrollbar-hide">
                  <li v-for="item in Menu" :key="item.name">
                     <a :href="item.href" class="block transition text-white md:text-customBlack hover:text-primaryLight dark:text-white dark:hover:text-primaryDark ease-linear text-2xl md:text-lg"
                        @click="scrollToSection(item.href)">
                        {{ item.name }}
                     </a>
                  </li>
               </ul>
            </nav>
            <NavTheme />
         </div>

         <!-- Mobile toogle button -->
         <div class="md:hidden z-30">
            <button type="button" class="block focus:outline-none text-primaryLight" @click="isMenuOpen = !isMenuOpen">
               <span v-if="isMenuOpen" class="text-5xl text-primaryLight dark:text-white 
                  ">
                  <Icon icon="line-md:menu-to-close-transition"/>
               </span>
               <span v-else class="text-5xl dark:text-white">
                  <Icon icon="line-md:close-to-menu-transition"/>
               </span>
            </button>
         </div>
      </div>
   </header>
</template>
<script setup>
   //import { Icon } from '@iconify/vue';
   import Logo from '@/components/UI/Logo.vue';
   import {ref, watch, onBeforeUnmount} from 'vue';
   import NavTheme from '@/components/UI/NavTheme.vue';
   const Menu = ref([
      {name:'Servicios', href:'#services'},
      {name:'Skills', href:'#skills'},
      {name:'Proyectos', href:'#projects'},
      {name:'Contacto', href:'#contact'},
   ]);

   const isMenuOpen = ref(false)
   const scrollToSection = (href)=>{
      isMenuOpen.value = false;
      const section = document.querySelector(href);
      if (section){
         section.scrollIntoView({behavior : 'smooth'});
      }
   } 
/*const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  const headerHeight = document.querySelector('header')?.offsetHeight || 80; // Cambia si tu cabecera no es <header>

  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
};*/
   // Ocultar scroll del body cuando el menú móvil está abierto
   /*watch(isMenuOpen, (newVal) => {
      if (!newVal) { 
         //document.body.style.overflow = 'hidden' // Ocultar scroll del body
         // Hacer scroll a la parte superior donde está el menú
         if (window.scrollY > 50) { // solo si se ha hecho scroll hacia abajo
            window.scrollTo({ top: 0, behavior: 'smooth' })
         }
      }  // else {
         // document.body.style.overflow = '' // Limpiar/Restaurar scroll
      // }
   })

   // Limpiar al desmontar componente (buena práctica)
   // onBeforeUnmount(() => {
   //    document.body.style.overflow = ''
   // })*/

</script>

<style scoped>
   .scrollbar-hide {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
   }

   .scrollbar-hide::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Edge */
   }

   /**<nav
  class="fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] bg-opacity-95 transition-transform duration-500 ease-in-out transform md:relative md:translate-x-0 md:bg-transparent md:flex md:flex-row"
  :class="{
    'translate-x-0': isMenuOpen,
    'translate-x-full': !isMenuOpen
  }"
> */
</style>