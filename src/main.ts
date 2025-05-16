import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/index.scss'
import router from './router'
import pinia from './store'
import registerIcons from './global/register-icons'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(registerIcons).use(router).use(pinia).mount('#app')
