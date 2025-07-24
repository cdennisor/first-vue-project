<template>
   <article class="swiper-slide-content">
      <div class="portfolio-card dark:bg-[#252d35]">
         <figure class="card-image-wrapper">
            <img :src="image" class="portfolio-card__img" :alt="title" loading="lazy">
         </figure>
         <div class="layer"></div>
         <div class="portfolio-card__description">
            <h3 class="font-bold tracking-[0.03rem] uppercase text-sm">{{ title }}</h3>
            <footer class="my-2">
               <ul class="flex flex-wrap gap-2 items-center justify-center">
                  <li v-for="(element,index) in tags" :key="index" 
                     class="inline-block dark:bg-[#213F99] bg-gray-700 text-gray-200 rounded-full px-3 py-1
                     text-xs font-semibold">
                     {{ element }}
                  </li>
               </ul>
            </footer>
            <!-- <p class="leading-[25px] tracking-[0.03rem] dark:text-white">Creamos tu página web utilizando las últimas</p> -->
            <a :href="link" v-if="link || !link" target="_blank">Ver màs</a>
         </div>
      </div>
   </article>
</template>
<script setup>
   /*const props =*/ defineProps({
      image:{
         type: String,
         required: true,
         default: "/"
      },      
      title:{
         type: String,
         required: true,
         default: "nombre del proyecto"
      },
      tags:{
         type: Array,
         required: false,
         default: () => ["Vue js","Tailwind css"]
      },        
      link:{
         type: String,
         required: false,
         default: null
      },                                      
   })
</script>