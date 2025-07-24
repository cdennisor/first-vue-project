<template>
   <a role="button" @click.prevent="scrollToInicio" class="flex items-center gap-2 dark:text-white">
      <img src="/src/assets/icons/brand.svg" alt="logo" class="w-[33px] h-[33px] sm:w-[45px] sm:h-[45px] rounded-[10px] bg-[#efefef] p-1">
      <h4 class="dark:text-white text-xl hidden xs:block">dennisor</h4>
   </a>
</template>
<script setup>
function scrollToInicio() {
  const section = document.getElementById('home');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>