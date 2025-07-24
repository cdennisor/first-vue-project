<template>
   <section id="contact" class="relative text-white mt-12 px-4 lg:px-20 scroll-m-20">
      <SectionHeader title="Contacto" />
      <div
         class="py-10 sm:px-10 lg:mt-10 xl:px-16 flex flex-col md:justify-center gap-6 md:flex-row md:gap-10 overflow-x-hidden"
      >
         <div class="md:w-1/2 w-full dark:bg-[#252d35] rounded-xl p-4 sm:p-6 border border-gray-300 shadow-lg dark:border-none" :data-aos="aosAnimation">
            <form @submit.prevent="submitForm" >
               <div class="mb-5">
                  <Input v-model="formData.fullName" id="fullName" label="Apellidos y nombres" placeholder=""/>
                  <span v-if="formData" class="text-red-400">{{ getFirstError('fullName') }}</span>
               </div>
               <div class="mb-5">
                  <Input v-model="formData.email" id="email" label="Correo electrónico" type="email" placeholder="correo@ejemplo.com"/>
                  <span v-if="getFirstError('email')" class="text-red-400">{{ getFirstError('email') }}</span>
               </div>
               <div class="mb-5">
                  <Input v-model="formData.message" id="textarea" label="Mensaje" type="textarea" placeholder="escriba su mensaje aquí..."/>
                  <span v-if="getFirstError('message')" class="text-red-400">{{ getFirstError('message') }}</span>
               </div>
               <button type="submit" class="relative group bg-primaryLight hover:bg-[#4e44e6] 
                  dark:bg-primaryDark dark:hover:bg-[#0097c9] transition-colors duration-300 w-full my-0 mx-auto rounded-[17px] p-2">
                  <span class="relative w-full transition-all ease-in duration-75 group-hover:bg-opacity-0">
                     {{ isSubmitting ? 'enviando ...':'enviar'}}
                  </span>
               </button>
            </form>
         </div>
         <div class="md:w-1/2 w-full rounded-[7px] hidden md:block" data-aos="fade-left">
            <iframe class="rounded-[7px] w-full h-full" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" 
               src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Lima%20Lima+(Lima)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
         </div>
      </div>
   </section>
</template>
<script setup>
   import SectionHeader from '@/components/UI/SectionHeader.vue';
   import Input from '@/components/UI/Input.vue';
   import { ref, onMounted, onBeforeUnmount, reactive, computed, watch } from 'vue';
   import { useToastify } from '@/composables/useToastify';

   // vuelidate
   import { useVuelidate } from '@vuelidate/core'
   import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
   import emailjs from '@emailjs/browser';

   const soloTexto = (value) => {
      if (!value) return false
      const limpio = value.replace(/\s+/g, ' ').trim()
      return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(limpio)
   }

   const formData = reactive(
      {
         fullName: "",
         email: "",
         message: "",
      }
   );
   
   // Limpieza de espacios en fullName
   watch(() => formData.fullName, (val) => {
   formData.fullName = val
      .replace(/\s+/g, ' ')  // Reemplaza múltiples espacios por uno
      .trim()                // Elimina espacios iniciales/finales
   })

   // Definir reglas como computed para reactividad
   const rules = computed(()=>{
      return{
         fullName: {
            required: helpers.withMessage('campo obligatorio', required), 
            soloTexto: helpers.withMessage('ingrese solo texto',soloTexto) 
         },
         email: {
            required: helpers.withMessage('campo obligatorio',required), 
            email: helpers.withMessage('ingrese un correo válido',email)},
         message: {required: helpers.withMessage('campo obligatorio',required)},
      };
   });

   // Crear la instancia de Vuelidate
   const v$ = useVuelidate(rules, formData);

   // Función para obtener el primer mensaje de error
   const getFirstError = (field) => {
      const errors = v$.value[field].$errors
      return errors.length ? errors[0].$message : null
   };

   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
   const {success, error} = useToastify();

   const isSubmitting = ref(false);
   const submitForm = async () =>{
      isSubmitting.value = true;
      const result = await v$.value.$validate();
      if (result){
         const templateParams = {
            name:formData.fullName,
            email:formData.email,
            message:formData.message
         }
         try{
            await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams);
            success('Éxito','mensaje enviado correctamente.') 
            formData.fullName = '';
            formData.email = '';
            formData.message = '';
            v$.value.$reset();
         }catch(e){
            error('No se pudo enviar el mensaje')
         }finally{
            isSubmitting = false;
         }
      } else {
         isSubmitting.value = false;
         error('Revise los campos');  
      }
      
   }
   
   const aosAnimation = ref(getAOS())

   function getAOS() {
   return window.innerWidth < 768 ? 'fade-up' : 'fade-right' // Tailwind md = 768px
   }

   function handleResize() {
   aosAnimation.value = getAOS()
   }

   onMounted(() => {
   window.addEventListener('resize', handleResize)
   })

   onBeforeUnmount(() => {
   window.removeEventListener('resize', handleResize)
   })

</script>

