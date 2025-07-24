<template>
   <!-- component -->
   <button 
      @click="onClick" 
      class="group relative h-12 overflow-hidden text-lg dark:hover:shadow-none bg-primaryLight dark:bg-primaryDark
      transition-all hover:shadow-lg hover:shadow-primaryLight active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      <!-- <div class="absolute inset-0 w-3 bg-primaryLight dark:bg-primaryDark transition-all duration-[250ms] ease-out group-hover:w-full"></div> -->
      <span class="relative text-white group-hover:text-white font-semibold"> {{ label }} </span>
   </button> <!--[#E9F1FA]-->
</template>
<script setup>
   //import { defineProps } from 'vue';
   defineProps({
      label:{
         type:String,
         default:'Button'
      },
      onClick:{
         type:Function,
         default:() =>{} 
      }
   })
</script>
