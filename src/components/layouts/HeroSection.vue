<template>
   <section id="home" data-aos="zoom-in" class="flex justify-center items-center dark:text-white min-h-screen lg:mb-0">
      <header class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc]
         via-[#785ae4] to-primaryDark opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block">
      </header>
      <header class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc]
         via-[#785ae4] to-primaryDark opacity-30 dark:opacity-20 blur-[100px] right-10 bottom-0 hidden md:block">
      </header>
      <main class="grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8 mt-20 w-full lg:w-[90%]">
         <header class="text-center lg:text-left p-2">
            <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
               Técnico en <span class="text-primaryDark stroke-text text-stroke-primaryLight dark:text-stroke-primaryDark">
               Ing. de Software con IA</span> 
            </h1>
            <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
               Hola, soy Clinton y desarrollo soluciones 
               tecnológicas personalizadas que combinan automatización, análisis de datos e interfaces eficientes para 
               resolver necesidades reales de tu empresa o negocio.
            </p>
            <div class="mt-6 gap-3 flex flex-col md:flex-row items-center md:justify-center lg:justify-start md:gap-6">
               <a href="/assets/myCV.pdf" download="mycv.pdf" class="font-semibold text-lg w-full sm:w-48 h-[48px] rounded-full border-2 border-primaryLight dark:border-primaryDark
                  hover:scale-105 flex justify-center items-center text-primaryLight dark:text-primaryDark" >
                  <Icon icon="line-md:download-loop" class="text-3xl"/>
                  <span class="ml-2">Descargar CV</span>
               </a>
            </div>
         </header>
         <aside class="lg:h-full md:flex justify-center items-center p-2">
            <figure  class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full items-center justify-center lg:justify-end rounded-full relative">
               <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 
                  from-[#645be288] to-primaryLight dark:from-[#00bbd488] dark:to-primaryDark blur-2xl"></div>
                <div class="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] p-2 rounded-full shadow-lg border border-primaryLight dark:border-primaryDark">
                  <img src="@/assets/images/imghero.jpeg" alt="imagen perfil" width="500" height="auto" loading="lazy" 
                     class="w-full h-full rounded-full object-cover"/>
               </div>
            </figure>
         </aside>
      </main>
      <svg class="hidden">
         <filter id="wavy1">
            <feTurbulence x="0" y="0" baseFrequency="0.2" numOctaves="5" seed="1"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="30"/>
         </filter>
      </svg>
   </section>
</template>
