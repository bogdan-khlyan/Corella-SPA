import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Vuex from "vuex";
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(Vuex)
   .use(router)
   .use(ElementPlus)
   .mount('#app')
