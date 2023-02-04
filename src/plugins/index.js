import ElementPlus from 'element-plus'
import PerfectScrollbar from '@/plugins/perfect-scrollbar'
import Vue3Toasity from '@/plugins/toastify'

import Vuelidate from '@vuelidate/core'

import pinia from '@/store'

import router from '../router/router'

export default [
  pinia,
  router,
  PerfectScrollbar,
  ElementPlus,
  Vuelidate,
  Vue3Toasity,
]
