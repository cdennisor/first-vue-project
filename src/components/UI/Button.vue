<template>
   <!-- component -->
   <button 
      @click="onClick" 
      class="group relative h-12 overflow-hidden text-lg dark:hover:shadow-none bg-primaryLight dark:bg-primaryDark
      transition-all hover:shadow-lg hover:shadow-primaryLight active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      <span class="relative text-white group-hover:text-white font-semibold"> {{ label }} </span>
   </button> 
</template>
<script setup>
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
