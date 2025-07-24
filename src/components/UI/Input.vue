<template>
   <div class="flex flex-col">
      <label :for="props.id" class="font-semibold mb-2 text-sm tracking-wide pointer-events-none text-customBlack dark:text-white" :class="{'focus-custom':isFocused}">
         {{ props.label }} <span class="text-red-400">*</span>
      </label>
      <component :class="['border-[1px] border-solid dark:focus:border-primaryDark dark:border-opacity-50 px-[16px]',
         'dark:focus:border-opacity-15 font-[16px] rounded-[10px] transition-all duration-300 ease-in-out bg-transparent outline-none',
         'custom-shadow z-10 dark:bg-[#ffffff29] border-[#d9d9d9] focus:shadow-primaryLight dark:focus:shadow-primaryDark',
         'text-gray-800 dark:text-white',
         type !== 'textarea' ? 'py-[0.6rem]' : 'py-[0.5rem] resize-none']"
         autocomplete="off"
         :is="props.type === 'textarea' ? 'textarea':'input'"
         :id="props.id"
         :placeholder="props.placeholder"
         :rows="props.type === 'textarea' ? props.rows : undefined"   
         :value="props.modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
         @focus="isFocused = true"
         @blur="isFocused = false"             
      />
   </div>
</template>
<script setup>
import { ref, computed } from 'vue';
   const props = defineProps({
      modelValue: String,
      id: { type: String, required: true },
      label: { type: String, required: true },
      type: { type: String, default: 'text' },
      //isTextarea: { type:Boolean, default:false },
      placeholder: { type: String, default: '' },
      rows: { type: Number, default: 5 }, // solo para textareas
   })

   defineEmits(['update:modelValue']);
   const isFocused = ref(false);
</script>
<style scoped>
   input.custom-shadow:focus,  textarea.custom-shadow:focus{
      box-shadow: 0 0 0 3px rgba(101, 91, 226, 0.3);
   }
   .dark .custom-shadow:focus,  .dark .custom-shadow:focus{
      box-shadow: 0 0 0 3px rgba(0, 171, 228, 0.3);
   }

   .floating {
      padding: 0 4px;
      font-size: 12px;
      top: -7px;
      transform: initial;
      z-index: 1;
   }

   .focus-custom {
      color: #655be2;
   }

   .dark .focus-custom {
      color: #00abe4;
   }
   /**:autocomplete="type === 'text' ? 'off' : undefined" */
</style>