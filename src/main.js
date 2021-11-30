import {createApp} from 'vue'
import App from './App.vue'

import globals from "@/globals"
import plugins from '@/plugins'

const app = createApp(App)

globals.forEach(global => app.component(global.name, global.component))
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
