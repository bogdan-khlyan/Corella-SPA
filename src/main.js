import {createApp} from 'vue'
import App from './App.vue'

import SvgIcon from "./app/common/components/SvgIcon.js";

import plugins from './plugins/index'

const app = createApp(App)

app.component('svg-icon', SvgIcon)

plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
