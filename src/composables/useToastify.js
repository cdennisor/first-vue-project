import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const defaultOptions = {
   position:'top-right',
   autoClose:4000,
   hideProgressBar:false,
   closeOnclick:true,
   pauseOnInteraction:true,
   draggable:true,
   theme:'dark',
   //transition:'slide'
}

// Función composable que encapsula los métodos para mostrar toasts
export function useToastify(){
   // Método para mostrar un toast de éxito
   // Recibe el mensaje y opciones adicionales que pueden sobrescribir las opciones por defecto
   const success = (message, description = '', options = {})=>{
      const html = `<b>${message}</b><br>${description}`
      toast.success(html, {...defaultOptions, ...options, dangerouslyHTMLString: true});
   }
   
   // Método para mostrar un toast de error
   // Igual que success pero muestra una notificación con estilo de error
   const error = (message, options = {})=>{
      toast.error(message, {...defaultOptions, ...options});
   }   

   // Retornamos ambos métodos para usarlos desde donde se importe este composable
   return { success, error }
};
