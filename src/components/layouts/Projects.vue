<template>
   <section id="projects" class="relative text-white mt-12 px-4 lg:px-20 scroll-m-20 z-10">
      <SectionHeader title="Proyectos" />
      <div class="py-10 xs:px-10 lg:mt-10 xl:px-16 grid grid-cols-1 relative" data-aos="zoom-in">
         <div ref="prevEl" class="custom-prev cursor-pointer hidden xs:block text-4xl text-primaryLight dark:text-primaryDark">
            <Icon icon="ooui:previous-ltr" />
         </div>
         <div ref="nextEl" class="custom-next cursor-pointer hidden xs:block text-4xl text-primaryLight dark:text-primaryDark">
            <Icon icon="ooui:previous-rtl" />
         </div>
         <div ref="paginationEl" class="custom-pagination"></div>
         <swiper 
            :loop=true :slidesPerView=3 
            :spaceBetween='23' 
            :grabCursor=false 
            :mousewheel="false"

            :keyboard="{ enabled: true, }" 
            :breakpoints="{
               0: { slidesPerView: 1 },
               640: { slidesPerView: 2, spaceBetween: 20 },
               768: { slidesPerView: 2 },
               950: { slidesPerView: 3 },
            }" 
            :pagination="{ el: '.custom-pagination', clickable: true }"
            :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }" :modules="modules"
            @autoplayTimeLeft="onAutoplayTimeLeft" class="mySwiper">

            <swiper-slide v-for="(element, index) in projects" :key="index" class="swiper-slide-wrapper">
               <ProjectCard 
                  :title = "element.name"
                  :image = "element.img"
                  :tags = "element.tag"
                  :link = "element.link"                  
               />
            </swiper-slide>

            <!-- <template #container-end>
               <div class="autoplay-progress">
                  <svg viewBox="0 0 48 48" ref="progressCircle">
                     <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref="progressContent" class="text-primaryLight dark:text-primaryDark"></span>
               </div>
            </template> -->
         </swiper>
      </div>
   </section>
</template>
<script>
//:effect="'fade'" :centeredSlides="true"
/**            :autoplay="{
               delay: 2500,
               disableOnInteraction: false,
               pauseOnMouseEnter: true,
            }" */
   import { ref } from 'vue';
   import SectionHeader from '@/components/UI/SectionHeader.vue';
   import ProjectCard from '@/components/UI/ProjectCard.vue';
   // Import Swiper Vue.js components
   import { Swiper, SwiperSlide } from 'swiper/vue';

   // Import Swiper styles
   import 'swiper/css';

   import 'swiper/css/pagination';
   import 'swiper/css/navigation';

   import '@/style.css';

   // import required modules
   import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

   export default {
      components: {
         Swiper,
         SwiperSlide,
         SectionHeader,
         ProjectCard,
      },
      setup() {
         const progressCircle = ref(null);
         const progressContent = ref(null);
         // refs para navigation y pagination
         const prevEl = ref(null);
         const nextEl = ref(null);
         const paginationEl = ref(null);

         const projects = ref([
            {
               img: "@/assets/images/facial.webp",
               name: "Control de asistencia con Reconocimiento facial",
               tag: ["Filament","Python","MySql"],
               link: "https://www.youtube.com/watch?v=iFhcXuwOhjE",
            },
            {
               img: "@/assets/images/powerBI.webp",
               name: "Análisis de datos con Power BI",
               tag: ["Power BI","Excel","MySql"],
               link: "https://app.powerbi.com/view?r=eyJrIjoiZjc0MWRjODQtZThiZi00OWZlLWJmZmQtYTIwMjUxMzYwNDFkIiwidCI6ImI0YTQwNTQ1LTc3NzktNGIzOC1hZmY3LTFmMTczOGY4MDg0MCIsImMiOjR9",
            },
            {
               img: "@/assets/images/watson.webp",
               name: "Chatbots con IBM Watson Assistant",
               tag: ["Watson Assistant"],
               link: "https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fau-syd.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-95495053-d25a-428b-ba79-f2b6aeeb88eb%3A%3A4aab8a95-23b9-41f7-8bb1-d10c7f417068&integrationID=dc8471ac-9c2d-4f40-a4d9-1022b4a747e9&region=au-syd&serviceInstanceID=95495053-d25a-428b-ba79-f2b6aeeb88eb",
            },
            {
               img: "@/assets/images/qr.webp",
               name: "Control de asistencia con código QR",
               tag: ["Filament","MySql","VB.NET"],
               link: "https://www.youtube.com/watch?v=ox4hx__OtKk",
            },
            {
               img: "@/assets/images/botpress.webp",
               name: "Integración de ChatBots con Telegram",
               tag: ["Botpress","Telegram"],
               link: "https://t.me/dennisor_bot",
            },
            {
               img: "@/assets/images/maui.webp",
               name: "App mobile: Creación y consumo de Rest API",
               tag: ["Express JS",".NET Maui"],
               link: "https://www.youtube.com/watch?v=wrK_c5fFlFQ",
            },                                             
         ]);      
         const onAutoplayTimeLeft = (s, time, progress) => {
         progressCircle.value.style.setProperty('--progress', 1 - progress);
         progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
         };
         return {
            onAutoplayTimeLeft,
            progressCircle,
            progressContent,
            projects,
            prevEl,
            nextEl,
            paginationEl,
            modules: [Autoplay, Pagination, Navigation, Mousewheel, Keyboard],
         };
      },
   };
</script>