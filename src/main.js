import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from "vuex";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const app = createApp(App)

app.use(Vuex)
   .use(router)
   .use(ElementUI)
   .mount('#app')
