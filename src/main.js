import {createApp} from 'vue'
import App from './App.vue'

import plugins from './plugins'
import globals from './globals'

import {createApi} from './api'

const app = createApp(App)

app.config.globalProperties.$api = createApi()

plugins.forEach(plugin => app.use(plugin))
globals.forEach(global => app.component(global.name, global.component))

app.mount('#app')
