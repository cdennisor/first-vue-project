import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import router from './router'
import Countup from 'vue-countup-v3';
import { Icon } from '@iconify/vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration:1000});

createApp(App).component('Icon',Icon).component('Countup',Countup).mount('#app')
// refrescar AOS en cada cambio de ruta
// router.afterEach(() => {
//   // Refresca AOS en cada ruta nueva
//   setTimeout(() => {
//     AOS.refresh()
//   }, 500)
// })

// app.use(router)
// app.mount('#app')

// AOS.init({
//   duration: 1000,
//   once: true
// })
