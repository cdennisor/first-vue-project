/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
      screens: {
         xs: '440px',         // personalizado
         sm: '640px',         // default
         md: '768px',         // default
         lg: '1024px',        // default
         xl: '1280px',        // default
         '2xl': '1536px',     // default
      },
      extend: {
         colors:{
            primaryLight: '#655be2',     // Violeta principal #3f42ff
            primaryDark: '#00abe4',   // Azul claro
            secondary: '#f59e0b',      // Amarillo 
            pinky: '#ec4899',       // Rosa fuerte
            customBlack: '#111827', // Gris muy oscuro
            customHeader: '#E9F1FA',
         }
      },
   },
   darkMode: 'class',
   mode:'jit',
   plugins: [
      function({addUtilities, theme}){
         const newUtilities = {
            '.stroke-text':{
               '--tw-text-opacity':'1',
               '-webkit-text-stroke-width':'1.4px',
               '-webkit-text-fill-color':'transparent',
               '-webkit-text-stroke-color':theme('colors.primaryDark'),
            },
            '.text-stroke-primaryLight':{
               '-webkit-text-stroke-color':theme('colors.primaryLight'),
            },
            '.dark .text-stroke-primaryDark':{
               '-webkit-text-stroke-color':theme('colors.primaryDark'),
            }
         };
         addUtilities(newUtilities,['responsive','dark']);
      }
   ],
}

