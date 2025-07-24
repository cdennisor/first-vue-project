<template>
   <section id="skills" class="relative text-white mt-12 scroll-mt-20 z-10">
      <SectionHeader title="Skills" />
      <div class="p-10 lg:mt-10 xl:px-16 px-4 flex justify-center" data-aos="zoom-in">
         <ul class="flex flex-wrap justify-center items-center">
            <li
               ref="skillRefs" 
               v-for="(element, index) in skills" :key="index"
               :class="`mx-[15px] rounded-[12px] mb-7 bg-gradient-to-b hover:scale-110 transition-all duration-500 cursor-default ${element.bgGradient}`">
               <div class="rounded-[12px] bg-[#746bf5cc] dark:bg-[#252d35] mt-[3px] p-5 sm:p-12 md:p-5 text-center">
                  <h3 class="font-bold text-[35px] text-white dark:text-white flex items-center justify-center">
                     <Countup v-if="visibleItems[index]" :endVal="element.percentage" :startVal="0" :duration="2"/> %
                  </h3>
                  <p :class="['font-normal text-[16px]',element.textColor]" :style="{color:element.textColor}">{{ element.title }}</p>
               </div>
            </li>
         </ul>
      </div>
   </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import SectionHeader from "@/components/UI/SectionHeader.vue";

const skills = ref([
   {
      percentage:85,
      title:"Figma",
      bgGradient:'from-[#DAF7A699] to-[#1f1e1c99] dark:from-[#10bce399] dark:to-[#1f1e1c99]',
      textColor:"text-[#DAF7A6] dark:text-[#10bce3]"
   },
   {
      percentage:80,
      title:"Vue js",
      bgGradient:"from-[#29e31099] to-[#1f1e1c99]",
      textColor:"#29e310 "
   },
   {
      percentage:70,
      title:"Git, Git Hub",
      bgGradient:"from-[#eba7a799] to-[#1f1e1c99]",
      textColor:"#eba7a7"
   },
   {
      percentage:70,
      title:"SQL Server",
      bgGradient:"from-[#FFE60099] to-[#1f1e1c99]",
      textColor:"#FFE600"
   },
   {
      percentage:70,
      title:"Laravel/filament",
      bgGradient:"from-[#ffe89e99] to-[#1f1e1c99]",
      textColor:"#ffe89e"
   },
   {
      percentage:80,
      title:"Power BI",
      bgGradient:"from-[#FFA07A99] to-[#1f1e1c99]",
      textColor:"#FFA07A"
   },   
   {
      percentage:70,
      title:"Python",
      bgGradient:"from-[#f7ec1399] to-[#1f1e1c99]",
      textColor:"#f7ec13"
   },  
   {
      percentage:70,
      title:"Java",
      bgGradient:"from-[#a3e4d799] to-[#1f1e1c99]",
      textColor:"#a3e4d7"
   },      
   {
      percentage:75,
      title:".NET",
      bgGradient:"from-[#DAF7A699] to-[#1f1e1c99]",
      textColor:"#DAF7A6"
   },              
]);

// Creamos una lista reactiva donde cada ítem indica si es visible en pantalla o no (inicialmente todos en false)
const visibleItems = ref(skills.value.map(() => false))

// Lista de referencias a los elementos del DOM que queremos observar (uno por cada skill)
const skillRefs = ref([])

onMounted(() => {
   // Creamos un observer para detectar cuándo un elemento entra en el viewport (visibilidad en pantalla)
   const observer = new IntersectionObserver(
      (entries) => {
         // Recorremos todos los elementos que han cambiado su estado de visibilidad
         entries.forEach((entry) => {
         // Si el elemento es visible al menos en un 30%
         if (entry.isIntersecting) {
            // Obtenemos el índice del elemento dentro de nuestra lista de referencias
            const index = skillRefs.value.indexOf(entry.target)
            if (index !== -1) {
               // Marcamos ese ítem como visible en el array visibleItems
               visibleItems.value[index] = true
            }
         }
         })
      },
      { threshold: 0.3 } // El observer se dispara cuando al menos el 30% del elemento está visible
   )

   // Iniciamos la observación de cada elemento en skillRefs
   skillRefs.value.forEach((el) => observer.observe(el))
})
</script>
