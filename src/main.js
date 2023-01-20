import { createApp } from 'vue'
import App from './App'

import plugins from './plugins'
import globals from './globals'

import { useApi } from './api'

const app = createApp(App)

app.config.globalProperties.$api = useApi()

plugins.forEach((plugin) => app.use(plugin))
globals.forEach((global) => app.component(global.name, global.component))

app.mount('#app')
