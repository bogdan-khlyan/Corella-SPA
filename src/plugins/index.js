import ElementPlus from 'element-plus'

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import Vuelidate from '@vuelidate/core'
import pinia from '@/store'
import router from '../router/router'

export default [router, PerfectScrollbar, ElementPlus, pinia, Vuelidate]
