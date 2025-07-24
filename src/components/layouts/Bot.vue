<template>
   <div>
      
   </div>
</template>
<script setup>
   import { onMounted } from 'vue';
   // chatbot creado con watson assistant
   onMounted(() => { // se asegura de que el DOM esté listo para manipular.
      // Evita volver a cargar el script si ya fue inyectado
      if (document.getElementById('watson-chat-script')) return; // Se usa un id para evitar inyectar el script más de una vez (importante si se monta y desmonta el componente)
      window.watsonAssistantChatOptions = {
         integrationID: import.meta.env.VITE_WATSON_INTEGRATION_ID, // Tu ID de integración
         region: import.meta.env.VITE_WATSON_REGION, // Región de tu instancia
         serviceInstanceID: import.meta.env.VITE_WATSON_SERVICE_ID, // ID del servicio
         onLoad: async (instance) => {
            await instance.render();
         }
      };
      setTimeout(function () {
         const t = document.createElement('script');
         t.id = 'watson-chat-script';
         t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
                  (window.watsonAssistantChatOptions.clientVersion || 'latest') +
                  "/WatsonAssistantChatEntry.js";
         document.head.appendChild(t);
      });
   });
</script>
