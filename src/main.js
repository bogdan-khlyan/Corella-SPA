import { createApp } from 'vue'
import useWS from '@/utils/ws/ws'
import App from './App'

import plugins from './plugins'
import globals from './globals'

import { useApi } from './api'

const app = createApp(App)

plugins.forEach((plugin) => app.use(plugin))
globals.forEach((global) => app.component(global.name, global.component))

app.config.globalProperties.$api = useApi()
app.config.globalProperties.$ws = useWS()

app.mount('#app')
