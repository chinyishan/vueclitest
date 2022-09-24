// import { createApp } from 'vue'
// import App from './App.vue'
// import './registerServiceWorker'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//加上 star
import router from './router'
import store from './store'
//加上 end

// import gsap from 'gsap'

import "./assets/scss/style.scss";


const app = createApp(App)

app.use(ElementPlus)
//加上 star
app.use(router)
app.use(store)
//加上 end
app.mount('#app')
