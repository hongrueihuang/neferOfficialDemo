import { createApp } from 'vue'
import App from './App.vue'

import './index.css'
import router from './router'
// importing AOS css style globally
import AOS from "aos";
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router)
app.AOS = new AOS.init({
    disable: "phone",
    duration: 1000,
    easing: 'ease-in-out-back'
});
app.mount('#app')
