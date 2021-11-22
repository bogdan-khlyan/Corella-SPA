import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import Api from './api'
import VueDataTables from 'vue-data-tables'
import './element-variables.scss'
import Chat from 'vue-beautiful-chat'
import preloader from './utils/preloader'


Vue.directive('preloader', preloader)

Vue.use(Chat)

// set language to EN
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
locale.use(lang)

Vue.prototype.$api = new Api()

Vue.use(ElementUI)
Vue.use(PerfectScrollbar)
Vue.use(VueDataTables)

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_HOST
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.interceptors.request.use(function (config) {
    if (store.state.user.loggedIn) {
        const token = store.state.user.jwt
        config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config
})
axios.interceptors.response.use(undefined, (error) => {
    if (error.request.status === 0 || error.response.status === 401) {
        if (store.state.user.loggedIn) {
            // store.dispatch('logOut')
            // this.$router.push('/login')
            Vue.prototype.$api.user.logout()
        } else
            return
    }
    return Promise.reject(error)
})

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
