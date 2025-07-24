<template>
  <section id="services" class="relative text-white mt-12 scroll-mt-20 z-10">
    <SectionHeader title="Mis Servicios" />
    <div
      class="p-10 lg:mt-10 xl:px-16 px-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-3"
    >
      <article
        class="px-[12px] mb-[24px]"
        v-for="element in services"
        :key="element.id"
      >
        <div
          class="mt-[30px] relative flex flex-col justify-center text-center rounded-[30px] border border-secondary dark:bg-[#ffffff29] bg-primaryLight"
          data-aos="fade-up"
          data-aos-delay="element.i*100"
        >
          <div class="mt-[-30px] flex justify-center relative">
            <div
              class="mt-[-7px] p-[20px] relative bg-[#2f1c6a] rounded-[50%] dark:bg-[#213F99]"
            >
              <span
                class="h-[60px] w-[60px] m-auto border-[1px] border-solid border-secondary absolute top-[8px] left-[8px] rounded-[50%] inline-block z-[5]"
              ></span>
              <Icon
                :icon="element.icon"                
                class="h-[35px] w-[35px] relative z-[1] text-[#daed1a]"
              />
            </div>
          </div>
          <div class="p-[20px]">
            <h3 class="uppercase font-semibold text-secondary text-base">
              {{ element.name }}
            </h3>
            <p class="text-[14px] leading-[23px] text-white tracking-[0.03rem]">
              {{ element.descripction }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import SectionHeader from "@/components/UI/SectionHeader.vue";

const services = ref([
  {
    id: 1,
    icon: "hugeicons:developer",//mdi:code-tags
    name: "1. Desarrollo de Sistemas a Medida con Paneles Administrativos",
    descripction: //icon: new URL('@/assets/icons/google-code.svg', import.meta.url).href
      "Diseño y desarrollo sistemas personalizados para la gestión de asistencia, inventarios u operaciones administrativas, usando tecnologías como Laravel + Filament, .NET con SQL Server, mySql e interfaces intuitivas. Ideal para instituciones educativas, tiendas comerciales u oficinas que buscan digitalizar y optimizar su gestión interna.",
  },
  {
    id: 2,
    icon: "ri:robot-2-line",
    name: "2. Automatización Inteligente con Visión por Computadora e IA",
    descripction:
      "Desarrollo soluciones basadas en Python, OpenCV y herramientas de IA que permiten integrar funciones como control de acceso con reconocimiento facial o lectores de QR. También implemento chatbots con IBM Watson Assistant y Botpress, integrables con plataformas como Telegram, para atención automatizada.",
  },
  {
    id: 3,
    icon: "fluent-mdl2:b-i-dashboard",
    name: "3. Dashboards Interactivos y Análisis de Datos",
    descripction:
      "Creo tableros dinámicos usando Power BI, convertiendo datos crudos en información clara y visual, conectando fuentes de datos como MySQL o Excel, para mostrar información relevante y clave de tu negocio: ventas, rendimiento, asistencia, inventario y más. Ideal para empresas que buscan tomar decisiones basadas en datos.",
  },
]);
</script>
